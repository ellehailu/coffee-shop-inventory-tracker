import React from "react";

function NewCoffeeForm(){
    function handleNewCoffeeFormSubmission(event){
        event.preventDefault();
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