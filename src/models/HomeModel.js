import {HTTP} from './HTTP';
class HomeModel extends HTTP{
    /* 获取首页的数据 */
    getHome(){
       return this.request({
            url:"home"
        })
    }
}
export {HomeModel};