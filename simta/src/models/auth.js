import axios from 'axios'
import store from "@/store"
const login = async (username="dosen1", password="dosen") => {
    return axios
        .post(
            'http://localhost:5000/user/login',
            { username, password }
        )
        .then(response => {
            store.mystore.setApiKey(response.data.api_key)
        })
}
const exports = { login }

export { login }
export default exports