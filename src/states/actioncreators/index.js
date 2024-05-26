const withdrawmoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }
}
const depositmoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload:amount
        })
    }
}

export default {withdrawmoney,depositmoney}