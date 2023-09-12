import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeInventory from "./CoffeeInventory";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm";

class CoffeeControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false,
        mainCoffeeList: [],
        selectedCoffee: null,
        editing: false
      };
    }
  
    handleClick = () => {
      if (this.state.selectedCoffee != null) {
        this.setState({
          formVisibleOnPage: false,
          selectedCoffee: null,
          editing: false
        });
      } else {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
      }
    }
  
    handleDeletingCoffee = (id) => {
      const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
      this.setState({
        mainCoffeeList: newMainCoffeeList,
        selectedCoffee: null
      });
    }
  
    handleEditClick = () => {
      this.setState({editing: true});
    }
  
    handleEditingCoffeeInList = (coffeeToEdit) => {
      const editedMainCoffeeList = this.state.mainCoffeeList
        .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
        .concat(coffeeToEdit);
      this.setState({
        mainCoffeeList: editedMainCoffeeList,
        editing: false,
        selectedCoffee: null
      });
    }

    handleSale = (id) =>{
      const coffeeToSell = this.state.mainCoffeeList.filter(coffee => coffee.id === id);
      coffeeToSell.amountAvailable = coffeeToSell.amountAvailable - 1;
      this.setState({
        coffeeToSell: coffeeToSell
      });
    }
  
    handleAddingNewCoffeeToList = (newCoffee) => {
      const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
      this.setState({mainCoffeeList: newMainCoffeeList});
      this.setState({formVisibleOnPage: false});
    }

    
  
    handleChangingSelectedCoffee = (id) => {
      const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
      this.setState({selectedCoffee: selectedCoffee});
    }
  
    render(){
      let currentlyVisibleState = null;
      let buttonText = null; 
      if (this.state.editing ) {      
        currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee} onEditCoffee = {this.handleEditingCoffeeInList} />
        buttonText = "Return to Coffee List";
      } else if (this.state.selectedCoffee != null) {
        currentlyVisibleState = <CoffeeDetail 
        coffee={this.state.selectedCoffee} 
        onClickingDelete={this.handleDeletingCoffee}
        onClickingEdit = {this.handleEditClick}
        onClickingSell={this.handleSale} />
  
        buttonText = "Return to Coffee List";
      } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>;
        buttonText = "Return to Coffee List"; 
      } else {
        currentlyVisibleState = <CoffeeInventory onCoffeeSelection={this.handleChangingSelectedCoffee} coffeeList={this.state.mainCoffeeList} />;
        buttonText = "Add Coffee"; 
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button> 
        </React.Fragment>
      );
    }
  
  }
  
  export default CoffeeControl;