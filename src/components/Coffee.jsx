import React from "react";
import PropTypes from "prop-types"

function Coffee(props){
    return (
        <React.Fragment>
            <h3>{props.type} - {props.name}</h3>
            <h4>Origin: {props.origin}</h4>
            <h4>Roast: {props.roast}</h4>
            <h4>Price: ${props.price}</h4>
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