import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid"
import ReusableForm from "./ReusableForm";

function NewCoffeeForm(props){
    function handleNewCoffeeFormSubmission(event){
        event.preventDefault();
        props.onNewCoffeeCreation({
            type: event.target.type.value,
            name: event.target.name.value,
            origin: event.target.origin.value,
            roast: event.target.roast.value,
            price: event.target.price.value,
            amountAvailable : 130,
            id: v4()
        });
    }

    NewCoffeeForm.propTypes = {
        onNewCoffeeCreation: PropTypes.func
    }
    return(
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleNewCoffeeFormSubmission}
                buttonText="Add new coffee" />
        </React.Fragment>
    )
}

export default NewCoffeeForm;