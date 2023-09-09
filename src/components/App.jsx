import React from "react";
import Header from "./Header";
import CoffeeInventory from "./CoffeeInventory";
import Coffee from "./Coffee";
import CoffeeControl from "./CoffeeControl";


function App() {

  return (
    <React.Fragment>
      <Header />
      <CoffeeControl/>
    </React.Fragment>
  );
}

export default App;
