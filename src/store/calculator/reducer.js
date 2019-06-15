import state from "./state"
import {CHANGE_NUM, COMPUTE_NUM} from "./const"

const reducer = (prevState=state, action)=>{
    let new_state = {...prevState}
    switch (action.type){
        case CHANGE_NUM:
            new_state = handler.changeNum(new_state, action.numType, action.num) 
            break;
        case COMPUTE_NUM:
            new_state = handler.computeNum(new_state)
            break;
        default:
            break;
    }
    return new_state
}


export default reducer

const handler = {
    changeNum(state, numType, num){
        state[numType] = num //让state里的prevNum，等于num
        return state 
    },
    computeNum(state){
        if(state.result !== 0){
            if(state.prevNumber*1 === state.result - state.nextNumber){
                state.prevNumber = state.result

            }
        }
        state["result"] = eval(state.prevNumber + state.operator + state.nextNumber)
        return state
    }
}