import Axios from 'axios'

const pmxProAxios = Axios.create({
    baseURL: 'https://www.paymix.pro/api/currency/',
})

export default pmxProAxios;