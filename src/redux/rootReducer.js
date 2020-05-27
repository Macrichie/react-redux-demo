import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './ice-cream/icecreamReducer'
import pizzaReducer from './pizza/pizzaReducer'

const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceCream: iceCreamReducer,
    pizza: pizzaReducer
})

export default rootReducer


