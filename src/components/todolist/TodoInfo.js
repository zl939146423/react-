import React,{Component} from "react"
import store from "../../store"
import {connect} from "react-redux"

class TodoInfo extends Component{
    //需要一个数据载体，把我从state里拿到的数据放在里面
    getInfo(){
        let {todos} = this.props //在这里通过props接收UI组件上的数据
        let info = {total:0, finished:0, unfinished:0}
        if(todos.length === 0) return info
        info.total = todos.length //赋值总数
        todos.forEach(item=>{
            if(item.isFinished){
                info.finished++
            }else{
                info.unfinished++
            }
        })
        return info
    }
    render(){
        let info = this.getInfo()
        return (
            <div className="alert alert-info">
                <label className="label label-primary">总共{info.total}条</label>
                <label className="label label-primary">完成{info.finished}条</label>
                <label className="label label-primary">未完成{info.unfinished}条</label>
            </div>
        )
    }
}

//connect()(UI组件) ==> 返回一个容器组件，而我传的这个参数就是UI组件，所以将容器组件和UI组件相连接
//我这里的state就是store.getState()拿取数据的方法，这个方法返回什么，UI组件就拿到什么
// 当状态改变的时候，容器组件就会监听状态的改变，并把更新后的状态和属性，返回给UI组件
//因为容器组件已经帮我们实现了store.subscribe方法的订阅
// 这个回调函数能够获取状态，监听状态的改变
const mapStateToProps = state=>{
    return state.todolist //这样组件就拿到了todolist数据，
}
export default connect(mapStateToProps)(TodoInfo)