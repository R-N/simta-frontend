import axios from 'axios'
import store from "@/store"
import auth from "@/models/auth"

const MHS_LEVEL = {
    1: "S1",
    2: "S2",
    3: "S3"
}

const REVISI_STATUS = {
    1: "Baru",
    2: "Dilihat",
    3: "Diterima",
    4: "Ditolak"
}

const fetch_sidang = async () => {
    if (!store.mystore.apiKey)
        await auth.login()
    return axios
        .get(
            'http://localhost:5000/sidang/',
            { 
                headers: {"Authorization" : `Bearer ${store.mystore.apiKey}`}
            }
        )
        .then(response => {
            let data = response.data
            data.forEach((x) => {
                if (x.ta.mhs){
                    x.ta.mhs.level_str = MHS_LEVEL[x.ta.mhs.level]
                }
                if (x.revisi_terakhir){
                    x.revisi_terakhir.status_str = REVISI_STATUS[x.revisi_terakhir.status]
                }
            })
            return data
        })
}
const exports = { fetch_sidang }

export { fetch_sidang }
export default exports