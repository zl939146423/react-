import React,{Component} from "react"
import groupCalculator from "../../group/gruop-calculator"
class Result extends Component{
    render(){
        return (
            <button className="btn btn-default">{this.props.result}</button>
        )
    }
}
export default groupCalculator(Result)