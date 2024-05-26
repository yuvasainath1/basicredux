const fun=(state=0,action)=>{
    if(action.type==='deposit'){
        return Number.parseInt(action.payload)+state;
    }else if(action.type==='withdraw'){
        return state-Number.parseInt(action.payload);
    }else{
        return state;
    }
}
export default fun