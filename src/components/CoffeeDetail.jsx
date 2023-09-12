import React from "react"
import PropTypes from "prop-types"

function CoffeeDetail(props){
    const { coffee, onClickingDelete } = props;

    return (
        <React.Fragment>
            <h1>Coffee Detail</h1>
            <h3>Type: {coffee.type}</h3>
            <h3>Name: {coffee.name}</h3>
            <h4>Origin: {coffee.origin}</h4>
            <h4>Roast: {coffee.roast}</h4>
            <h4>Price: ${coffee.price}</h4>
            <h4>Amount available: {coffee.amountAvailable}lbs</h4>
            <button onClick={props.onClickingEdit }>Update Coffee</button>
            <button onClick={() => onClickingDelete(coffee.id)}>Delete Coffee</button>
            <button onClick={coffee.amountAvailable - 1}>sell coffee</button>
            <hr/>
        </React.Fragment>
    )
}

CoffeeDetail.propTypes = {
    coffee: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func

};

export default CoffeeDetail;