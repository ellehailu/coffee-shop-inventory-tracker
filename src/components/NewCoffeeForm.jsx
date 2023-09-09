import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid"

function NewCoffeeForm(props){
    function handleNewCoffeeFormSubmission(event){
        event.preventDefault();
        props.onNewCoffeeCreation({
            type: event.target.type.value,
            name: event.target.name.value,
            origin: event.target.origin.value,
            roast: event.target.roast.value,
            price: event.target.price.value,
            id: v4()
        });
    }

    NewCoffeeForm.propTypes = {
        onNewCoffeeCreation: PropTypes.func
    }
    return(
        <React.Fragment>
            <h3>New coffee form</h3>
            <form onSubmit={handleNewCoffeeFormSubmission}>
                <input
                    type="text"
                    name="type"
                    placeholder="type of coffee"
                />
                <input
                    type="text"
                    name="name"
                    placeholder="name of coffee"
                />
                <input
                    type="text"
                    name="origin"
                    placeholder="origin of coffee"
                />
                <input
                    type="text"
                    name="roast"
                    placeholder="roast"
                />
                <input
                    type="number"
                    name="price"
                    placeholder="price"
                />
                <button type="submit">Add Coffee</button>
            </form>
        </React.Fragment>
    )
}

export default NewCoffeeForm;