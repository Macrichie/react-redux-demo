import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../../redux'

function HooksIceCream() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Icecreams - {numOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Icecream</button>
        </div>
    )
}

export default HooksIceCream
