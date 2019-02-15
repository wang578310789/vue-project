import {HTTP} from './HTTP';
class CityModel extends HTTP{
    /* 获取首页的数据 */
    getCity(){
       return this.request({
            url:"city"
        })
    }
}
export {CityModel};