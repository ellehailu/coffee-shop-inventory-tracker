import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeInventory from "./CoffeeInventory";

class CoffeeControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainCoffeeList: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
    }

    handleAddingNewCoffeeToList = (newCoffee) =>{
        const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
        this.setState({mainCoffeeList: newMainCoffeeList, formVisibleOnPage: false});
    }

    render(){
        let currentlyVisibleState = null;
        let buttonText = null;
        if(this.state.formVisibleOnPage){
            currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>
            buttonText="Return to coffee list";
        }
        else{
            currentlyVisibleState = <CoffeeInventory coffeeList={this.state.mainCoffeeList}/>
            buttonText="Add coffee";
        }

        return(
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}

export default CoffeeControl;