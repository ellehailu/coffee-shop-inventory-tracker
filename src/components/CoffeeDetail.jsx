import React from "react"
import PropTypes from "prop-types"

function CoffeeDetail(props){
    const { coffee, onClickingDelete } = props;

    return (
        <React.Fragment>
            
            <h2>Coffee Detail</h2>
            <div className="detail">
            <h4>Type: {coffee.type}</h4>
            <h4>Name: {coffee.name}</h4>
            <h4>Origin: {coffee.origin}</h4>
            <h4>Roast: {coffee.roast}</h4>
            <h4>Price: ${coffee.price}</h4>
            
            <h4>Amount available: {coffee.amountAvailable}lbs</h4>
            </div>
            <button onClick={props.onClickingEdit }>Update Coffee</button>
            <button onClick={() => onClickingDelete(coffee.id)}>Delete Coffee</button>
            <button onClick={props.onClickingSell}>sell coffee</button>
            <hr/>
              
        </React.Fragment>
    )
}

CoffeeDetail.propTypes = {
    coffee: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
    onClickingSell: PropTypes.func

};

export default CoffeeDetail;