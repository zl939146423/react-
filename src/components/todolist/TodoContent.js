import React,{Component} from "react";
import groupTodolist from "../../group/group-todolist"

//无状态组件  只有属性  就是一个函数
// //使用无状态组件可以提升一些性能    没有生命周期  没有this 直接拿
// 还可以从props里解构出来item 
const LiItem = (props)=>{
    function handleChange(){
        props.props.changeFinish(props.item.id)
    }
    function deleteTodo(){
        props.props.deleteClose(props.item.id)
    }
    return(
        <li className={"list-group-item " + (props.item.isFinished? "finished" : "")}>
            <input onChange={handleChange} type="checkbox" defaultChecked={props.item.isFinished? "checked" : ""}/>
            <span>{props.item.title}</span>
            <button onClick={deleteTodo} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </li>
    )
}



class TodoContent extends Component{
    renderItem(){
        let {todos} = this.props
        return todos.map(item => {
            return (
                <LiItem props={this.props} key={item.id} item={item}/>
            )
        })

    }

    render(){
        return (
            <ul className="list-group">
                {this.renderItem()}
            </ul>
        )
    } 
}

export default groupTodolist(TodoContent)