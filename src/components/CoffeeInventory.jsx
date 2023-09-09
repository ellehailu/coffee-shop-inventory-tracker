import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";


function CoffeeInventory(props){
    return(
        <React.Fragment>
            {props.coffeeList.map((coffee, index) => 
            <Coffee type={coffee.type}
                origin={coffee.origin}
                roast={coffee.roast}
                price={coffee.price}
                key={index}
            />)}
        </React.Fragment>
    )
}

CoffeeInventory.propTypes = {
    coffeeList: PropTypes.array
};
export default CoffeeInventory