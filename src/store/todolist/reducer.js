
import state from "./state"
import {ADD_NEW_TODO,CHANGE_NEW_TODO,DEIETE_TODO} from "./const"
//reducer是一个纯函数
// 只要是同样的输入，就要有同样的输出
// 不可以更改状态，必须返回一个新的状态
// prevState=state把state赋给prevState，使其拥有一个新的状态
//第二个参数action就是action里的方法
const reducer = (prevState=state, action)=>{     //当我执行添加操作时，我操作的这个数组还是之前的数组，状态没有发生改变，这个数组是引用类型，是浅拷贝，
    let new_state = {...prevState}               //所以我要使我操作的这个数组的状态发生改变，我就要复制出一个新的数组出来，而不只是引用这个数组的地址，
    //通过switch来判断传过来的方法具体执行什么操作  //我要操作给这个数组，不会影响之前的数组，才会引起状态的改变，深拷贝
    switch (action.type){
        case ADD_NEW_TODO:
            new_state.todos = new_state.todos.slice()
            new_state.todos.push({id:handle.getId(new_state.todos),title:action.title,isFinished:false});
             break;
        case CHANGE_NEW_TODO:
            new_state.todos = handle.changeNewTodo(new_state.todos,action.id)
            break;
        case DEIETE_TODO:
                new_state.todos = handle.deleteTodo(new_state.todos,action.id)
            break;
        default:
            break;
    }
    //把new_state.todos存到loacStorage
    localStorage.todos = JSON.stringify(new_state.todos)
    return new_state
}

export default reducer

const handle = {
    getId(todos){
        let arr = todos.slice();//复制出一个新的数组
        if(arr.length === 0) return 1;
        return arr.sort((a,b) => {
            return b.id-a.id  //排出来的就是从大到小的顺序，
        })[0].id+1 //而我只取第一个的id+1作为新添加的数据的id
    },
    changeNewTodo(todos,id){
        let arr = todos.slice();
        for(var i=0;i<arr.length;i++){
            if(arr[i].id === id){
                arr[i].isFinished = !arr[i].isFinished
                return arr
            }
        }
    },
    deleteTodo(todos, id){
        let arr = todos.slice();
        return arr.filter(item =>{
            if(item.id === id) return false
            return true
        })
    }
}
