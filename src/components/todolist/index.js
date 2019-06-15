import React,{Component} from "react";
import TodoInput from "./TodoInput";
import TodoContent from "./TodoContent";
import "./index.scss"
import TodoInfo from "./TodoInfo"
// import store from "../store"

class Todolist extends Component{
    /* constructor(){
        super()
        //reducer返回什么状态，store.getState()就拿到什么状态
        // console.log("todolist", store.getState())
    } */
    render(){
        return (
            <div className=" todolist container">
                <TodoInput></TodoInput>
                <TodoContent></TodoContent>
                <TodoInfo></TodoInfo>
            </div>
        )
    }
}

export default Todolist