import React,{Component} from "react";
import actionCreators from "../../store/todolist/actioncreators"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

class TodoInput extends Component{
    // 初始化就会走constructor这个函数
    constructor(){
        super()
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }
    handleKeyUp(e){
        //我要改变state里面的数据  当我触发handleKeyUp就要派发actioncreators里改变新状态的方法
        // 获取input框的值 e.target.value 或 ref做标记用this.input.value
        if(e.keyCode === 13 && this.input.value.trim()){
            // actionCreators.addNewTodo(this.input.value)
            this.props.addNewTodo(this.input.value)
            this.input.value = ""
        }
    }
    render(){
        return (
            <input ref={el=>this.input=el} onKeyUp={this.handleKeyUp} className="form-control" type="text"/>
        )
    }
}

//返回什么，UI组件的属性上就会拿到什么
//将派发的一些方法在这里进行挂载，UI组件的props上就会有方法
// 这个回调函数能够获取更改状态的方法
// const mapDispatchProps = dispatch => {
//     return {
//         addNewTodo(title){
//             //创建action
//             let action = actionCreators.addNewTodo(title);
//             //派发action
//             dispatch(action)
//         }
//     }
// }
// 若我按以上代码写就会把所有方法都挂载上，所以
const mapDispatchProps = dispatch => {
    //利用bindActionCreators方法，将需要操作状态的方法全部取出来，然后绑定到UI组件上，顺便dispatch走（给了reducer处理action）
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(state=>state, mapDispatchProps)(TodoInput)