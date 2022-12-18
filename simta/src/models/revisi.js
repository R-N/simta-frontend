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

const fetch_revisi = async (sidangId) => {
    if (!store.mystore.apiKey)
        await auth.login()
    return axios
        .get(
            `http://localhost:5000/sidang/${sidangId}/revisi`,
            { 
                headers: {"Authorization" : `Bearer ${store.mystore.apiKey}`}
            }
        )
        .then(response => {
            let data = response.data
            if (data.ta.mhs){
                data.ta.mhs.level_str = MHS_LEVEL[data.ta.mhs.level]
            }
            data.revisi.forEach((x) => {
                x.status_str = REVISI_STATUS[x.status]
            })
            data.revisi.sort((a, b) => a.nomor - b.nomor)
            return data
        })
}
const exports = { fetch_revisi }

export { fetch_revisi }
export default exports