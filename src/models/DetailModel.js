import {HTTP} from './HTTP';
class DetailModel extends HTTP{
    /* 获取首页的数据 */
    getDetail(id){
       return this.request({
            url:"detail",
            params:{
                id
            }
        })
    }
}
export {DetailModel};