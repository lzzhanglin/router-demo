const defaultState = {
    header:'default'
}

export default (state = defaultState,action)=>{  //就是一个方法函数
    if(action.type === 'CHANGE'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.header = action.value
        return newState
    }
    if(action.type === 'DELETE' ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.header = ''  //push新的内容到列表中去
        return newState
    }
   
    return state
}