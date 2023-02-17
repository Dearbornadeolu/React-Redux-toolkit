import { createStore } from 'redux'

const redducerFn = (state = {counter : 0}, action)=>{
    if (action.type === "INC") {
        return {counter: state.counter+1}
    } else if (action.type === "DEC"){
        return {counter : state.counter -1}
    }
    if(action.type === 'ADD'){
        return {counter : state.counter + action.payload}
    }
 return state
}

const store = createStore(redducerFn)

export default store