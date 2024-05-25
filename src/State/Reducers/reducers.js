import { combineReducers } from "redux"
import amountReducer from "./amountreducer"

const allreducers=combineReducers({
    amount : amountReducer,
})

export default allreducers