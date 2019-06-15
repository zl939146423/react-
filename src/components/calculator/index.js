import React,{Component} from "react"
import Expression from "./expression"
import Result from "./result"
import "./index.scss"
class Calculator extends Component{
    render(){
        return (
            <div className="calculator">
                <Expression></Expression>
                <Result></Result>
            </div>
        )
    }
}
export default Calculator