import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
    return (
        <React.Fragment>
            <div className="form">
            <form onSubmit={props.formSubmissionHandler}>
            <input
                    type="text"
                    name="type"
                    placeholder="type of coffee"
                /><br/>
                <input
                    type="text"
                    name="name"
                    placeholder="name of coffee"
                /><br/>
                <input
                    type="text"
                    name="origin"
                    placeholder="origin of coffee"
                /><br/>
                <input
                    type="text"
                    name="roast"
                    placeholder="roast"
                /><br/>
                <input
                    type="number"
                    name="price"
                    placeholder="price"
                /><br/>
                <button type="submit">Add Coffee</button>
            </form>
            </div>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;