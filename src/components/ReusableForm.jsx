import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
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
    );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;