const fun=(state=0,action)=>{
    if(action.type==='deposit'){
        return action.payload+state;
    }else if(action.type==='withdraw'){
        return state-action.payload;
    }else{
        return state;
    }
}
export default fun