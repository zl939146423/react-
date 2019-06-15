import {connect} from "react-redux"
import actionCreators from "../store/calculator/actioncreator"
import {bindActionCreators} from "redux"
export default connect(state=>state.calculator, dispatch=>{
    return bindActionCreators(actionCreators, dispatch)
})