export default  {
    /* todos:[
        {id:1, title:"天不刮风",isFinished:false},
        {id:2, title:"天不下雨",isFinished:true},
        {id:3, title:"天上有太阳",isFinished:false}
    ] */

    todos:localStorage.todos?JSON.parse(localStorage.todos) : []
}