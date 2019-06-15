
import store from "../index"
import {ADD_NEW_TODO ,CHANGE_NEW_TODO,DEIETE_TODO} from "./const"
export default {
    // 改变新状态的方法，然后提交给reducer来返回一个新的状态
    addNewTodo(title){
        let action = {
            type:ADD_NEW_TODO,
            title
        }
        return action
    },
    changeFinish(id){
        let action = {
            type:CHANGE_NEW_TODO,
            id
        }
        return action
    },
    deleteClose(id){
        let action = {
            type:DEIETE_TODO,
            id
        }
        return action
    }

}
