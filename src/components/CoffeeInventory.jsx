import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

// function CoffeeInventory(props){
//     return(
//         <React.Fragment>
//             {props.coffeeList.map((coffee) =>
//             <Coffee
//                 whenCoffeeClicked = { props.onCoffeeSelection }
//                 type={coffee.type}
//                 origin={coffee.origin}
//                 roast= {coffee.roast}
//                 price= {coffee.price}
//                 id = {coffee.id}
//                 key = {coffee.id} />
//             )}
//         </React.Fragment>
//     );
// }

// CoffeeInventory.propTypes = {
//     coffeeList: PropTypes.array,
//     onCoffeeSelection: PropTypes.func
// }

function CoffeeInventory(){
    return(
        <Coffee />
    );
}
export default CoffeeInventory;