import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";



function CoffeeInventory(props){
    return(
        <React.Fragment>
            <div className="detail">
            {props.coffeeList.map((coffee) => 
            <Coffee 
                whenCoffeeClicked = { props.onCoffeeSelection }
                type={coffee.type}
                name={coffee.name}
                origin={coffee.origin}
                roast={coffee.roast}
                price={coffee.price}
                amountAvailable={coffee.amountAvailable}
                id={coffee.id}
                key={coffee.id} />
            )}
            </div>
        </React.Fragment>
    )
}

CoffeeInventory.propTypes = {
    coffeeList: PropTypes.array,
    onCoffeeSelection: PropTypes.func
};
export default CoffeeInventory