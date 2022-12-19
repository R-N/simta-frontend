import axios from 'axios'
import store from "@/store"
import { backend_address } from "@/constants"
const login = async (username="dosen1", password="dosen") => {
    return axios
        .post(
            `${backend_address}/user/login`,
            { username, password }
        )
        .then(response => {
            store.mystore.setApiKey(response.data.api_key)
        })
}
const exports = { login }

export { login }
export default exports