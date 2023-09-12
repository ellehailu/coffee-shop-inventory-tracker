import React from "react";
import PropTypes from "prop-types"

function Coffee(props){
    return (
        <React.Fragment>
            <div onClick = {() => props.whenCoffeeClicked(props.id)}>
                <h3>{props.type} - {props.name}</h3>
                <h4>{props.origin}</h4>
                <h4>{props.roast}</h4>
                <h4>{props.price}</h4>
                <h4>{props.amountAvailable}</h4>
            </div>
        </React.Fragment>
    )
}

Coffee.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    origin: PropTypes.string,
    roast: PropTypes.string,
    price: PropTypes.number,
    amountAvailable: PropTypes.number,
    id: PropTypes.string,
    whenCoffeeClicked: PropTypes.func
}

export default Coffee;