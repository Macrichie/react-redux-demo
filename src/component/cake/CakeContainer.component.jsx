import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCakes}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCakes: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
