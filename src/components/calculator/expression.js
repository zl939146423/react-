import React,{Component} from "react"
import groupCalculator from "../../group/gruop-calculator"

class Expression extends Component{
    constructor(){
        super()
        this.handelPrevKeyUp = this.handle.bind(this, "prevNumber")
        this.handelNextKeyUp = this.handle.bind(this, "nextNumber")
        this.compute = this.compute.bind(this)
    }
    handle(type, e){
        // console.log(type, e.target.value)
        this.props.changeNum(type, e.target.value)
    }
    compute(){
        //在事件对象里的，特别是16版本里的this，一定要标明它的指向，所以要 this.compute = this.compute.bind(this)
        this.props.computeNum()
    }
     /*
        defaultValue只是默认值的渲染是没有任何问题的
        如果input不仅仅是用来渲染默认值，而且当store状态发生改变的时候，也要
        去更改input的value值的时候，需要改成value配合onChange事件才可以。
    
    */
    render(){
        let {prevNumber, operator, nextNumber} = this.props
        return (
            <div className="expression">
                <input onChange={this.handelPrevKeyUp} value={prevNumber} className="form-control" type="text"/>
                <button  className="btn btn-primary">{operator}</button>
                <input onChange={this.handelNextKeyUp} defaultValue={nextNumber} type="text" className="form-control"/>
                <button onClick={this.compute} className="btn btn-warning">=</button>
            </div>
        )
    }
}
export default groupCalculator(Expression)