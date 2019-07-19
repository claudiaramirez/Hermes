import React from 'react';
import HeaderLogin from './Components/header/HeaderLogin'; 
import HeaderApp from './Components/header/HeaderApp';
import Login from './Views/login'; 
import SignUp from './Views/signup';
import Shipment_details from './Views/shipment_details/Shipment_details';


function App() {
  return (
    <div className="App"> 
      <HeaderLogin/> 
      <SignUp/>
      <HeaderApp/>
      <Login/>
      <Shipment_details />

    </div>
  );
}

export default App;
