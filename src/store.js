/**
 * Created by liuxin on 2016/11/22 0022.
 */

export default {
    get(items){
        return JSON.parse(localStorage.getItem(items));
    },
    save(items){
        localStorage.setItem("items",JSON.stringify(items));
    }
}