import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditCoffeeForm(props){
    const { coffee } = props;

    function handleEditCoffeeFormSubmission(event){
        event.preventDefault();
        props.onEditCoffee({
            type: event.target.type.value,
            name: event.target.name.value,
            origin: event.target.origin.value,
            roast: event.target.roast.value,
            price: event.target.price.value,
            id: event.target.id.value
        });
    }

    return (
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleEditCoffeeFormSubmission}
                buttonText="update coffee" />
        </React.Fragment>
    );
}

EditCoffeeForm.propTypes = {
    onEditCoffee: PropTypes.func,
    coffee: PropTypes.object
};

export default EditCoffeeForm;