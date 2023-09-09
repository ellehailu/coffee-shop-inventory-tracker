import React from "react";
import PropTypes from "prop-types"

function Coffee(props){
    return (
        <React.Fragment>
            <h3>{props.type} - {props.name}</h3>
            <h2>Origin: {props.origin}</h2>
            <h2>Roast: {props.roast}</h2>
            <h2>Price: ${props.price}</h2>
        </React.Fragment>
    )
}

Coffee.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    origin: PropTypes.string,
    roast: PropTypes.string,
    price: PropTypes.number,
}

export default Coffee;