import axios from 'axios';
axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5c2dbaccda4d71382bd2d04f/vueProject'
class HTTP {
    request({url,method="get",data={},params={}}){
        return axios({
            url,
            method,
            data,
            params
        })
    }
}
export {HTTP};