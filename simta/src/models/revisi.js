import axios from 'axios'
import store from "@/store"
import auth from "@/models/auth"
import FileSaver from "file-saver"

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

const terima_revisi = async (revisiId) => {
    if (!store.mystore.apiKey)
        await auth.login()
    return axios
        .post(
            `http://localhost:5000/revisi/${revisiId}/terima`,
            {},
            { 
                headers: {"Authorization" : `Bearer ${store.mystore.apiKey}`}
            }
        )
        .then(response => {
            let data = response.data
            return data
        })
}

const tolak_revisi = async (revisiId, detail, file_name=null) => {
    if (!store.mystore.apiKey)
        await auth.login()
    return axios
        .post(
            `http://localhost:5000/revisi/${revisiId}/tolak`,
            {
                detail,
                file_name
            },
            { 
                headers: {"Authorization" : `Bearer ${store.mystore.apiKey}`}
            }
        )
        .then(response => {
            let data = response.data
            return data
        })
}

const upload_file_penolakan = async(revisiId, file) => {
    var formData = new FormData();
    formData.append("file", file);
    return axios
        .put(
            `http://localhost:5000/revisi/${revisiId}/penolakan/file`, 
            formData, 
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization" : `Bearer ${store.mystore.apiKey}`
                }
            }
        )
        .then(response => {
            let data = response.data
            return data
        })
}


const download_file_penolakan = async(revisiId, fileName) => {
    return axios
        .get(
            `http://localhost:5000/revisi/${revisiId}/penolakan/file`, 
            {
                headers: {
                    "Authorization" : `Bearer ${store.mystore.apiKey}`
                },
                responseType: "blob"
            }
        )
        .then(response => {
            FileSaver.saveAs(response.data, fileName)
        })
}

const exports = { fetch_revisi, terima_revisi, tolak_revisi, upload_file_penolakan, download_file_penolakan }

export { fetch_revisi, terima_revisi, tolak_revisi, upload_file_penolakan, download_file_penolakan }
export default exports