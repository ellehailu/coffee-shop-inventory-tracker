import React from "react"
import PropTypes from "prop-types"

function CoffeeDetail(props){
    const { coffee, onClickingDelete } = props;

    return (
        <React.Fragment>
            <h1>Coffee Detail</h1>
            <h3>{coffee.type}</h3>
            <h3>{coffee.name}</h3>
            <h4>{coffee.origin}</h4>
            <h4>{coffee.roast}</h4>
            <h4>{coffee.price}</h4>
            <h4>{coffee.amountAvailable}</h4>
            <button onClick={props.onClickingEdit }>Update Coffee</button>
            <button onClick={() => onClickingDelete(coffee.id)}>Delete Coffee</button>
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