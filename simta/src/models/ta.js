import axios from 'axios'
import store from "@/store"
import auth from "@/models/auth"

const TAType = {
    1: "Request",
    2: "Proposal",
    3: "TA"
}

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

const sort_sidang_revisi = (a, b) => {
    if (a.revisi_terakhir.status != b.revisi_terakhir.status){
        if (a.revisi_terakhir.status == 2) return -1
        if (b.revisi_terakhir.status == 2) return 1
        return a.revisi_terakhir.status - b.status
    }
    if (a.revisi_terakhir.created_at != b.revisi_terakhir.created_at){
        return a.revisi_terakhir.created_at < b.revisi_terakhir.created_at
    }
    if (a.ta.mhs.id != b.ta.mhs.id){
        return a.ta.mhs.name < b.ta.mhs.name
    }
}

const fetch_sidang_revisi = async () => {
    if (!store.mystore.apiKey)
        await auth.login()
    return axios
        .get(
            'http://localhost:5000/sidang/',
            { 
                headers: {"Authorization": `Bearer ${store.mystore.apiKey}`},
                params: { "ta_type": 2 }
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
            data.sort(sort_sidang_revisi)
            return data
        })
}
const exports = { fetch_sidang_revisi }

export { fetch_sidang_revisi }
export default exports