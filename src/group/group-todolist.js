import {connect} from "react-redux"
import actionCreators from "../store/todolist/actioncreators"
import {bindActionCreators} from "redux"
export default connect(state=>state.todolist, dispatch=>{
    return bindActionCreators(actionCreators, dispatch)
})