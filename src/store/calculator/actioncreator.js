import {CHANGE_NUM, COMPUTE_NUM} from "./const"

export default{
    changeNum(numType, num){
        let action ={
            type:CHANGE_NUM,
            numType,
            num
        }
        return action
    },
    computeNum(){
        // let action = {
        //     type:COMPUTE_NUM,
        // }
        // return action
        //这里返回一个函数，就可以做异步的函数，异步的请求

        //如果不安装redux-thunk中间件，actioncreators只能返回一个对象
        //安装了redux-thunk中间件之后，actionCreators可以返回一个函数了，在这个函数里面可以写异步操作代码
        //redux中间件   创建出来的action在到达reducer之间！ 增强dispatch功能！

        //1.为了解决项目actionCreators不能进行异步请求的情况
        //2.redux-thunk redux中间件  actionCreators 创建的action  到达 reducer之间的过程，在这个之间的过程我们可以
        // 实现异步的逻辑操作   原理就是增强了dispatch功能！

        return dispatch => {
            setTimeout(() => {
                let action = {
                    type:COMPUTE_NUM,
                }
                dispatch(action)
            },1000)
        }
    }
}