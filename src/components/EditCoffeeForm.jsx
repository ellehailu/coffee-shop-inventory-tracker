import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm(){
    return(
        <React.Fragment>
            <ReusableForm
                buttonText="update coffee" />
        </React.Fragment>
    )
}

EditCoffeeForm.propTypes = {
    coffee: PropTypes.object,
    onEditCoffee: PropTypes.func
};

export default EditCoffeeForm