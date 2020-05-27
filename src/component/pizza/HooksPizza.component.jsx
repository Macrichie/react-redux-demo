import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyPizza } from '../../redux'

function HooksPizzaContainer() {
    const numOfPizzas = useSelector(state => state.pizza.numOfPizzas)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes - {numOfPizzas}</h2>
            <button onClick={() => dispatch(buyPizza())}>Buy Cakes</button>
        </div>
    )
}

export default HooksPizzaContainer
