import axios from 'axios'
import store from "@/store"
import auth from "@/models/auth"
import { backend_address } from "@/constants"

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

const TA_STATUS = {
    1: "Baru",
    2: "Bimbingan",
    3: "Sidang",
    4: "Revisi",
    5: "Selesai",
    6: "Ditolak"
}

const SIDANG_STATUS = {
    1: "Baru",
    2: "Fix",
    3: "Lulus",
    4: "Selesai",
    5: "Mengulang"
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

const fetch_sidang_revisi = async (taType=2, taStatus=4, status=3) => {
    if (!store.mystore.apiKey)
        await auth.login()
    return axios
        .get(
            `${backend_address}/sidang/`,
            { 
                headers: {"Authorization": `Bearer ${store.mystore.apiKey}`},
                params: { 
                    "ta_type": taType,
                    "ta_status": taStatus,
                    "status": status
                }
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