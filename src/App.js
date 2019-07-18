import React from 'react';
import HeaderLogin from './Components/header/HeaderLogin'; 
import HeaderApp from './Components/header/HeaderApp';
import Login from './Views/login'; 
import SignUp from './Views/signup';


function App() {
  return (
    <div className="App">
      <HeaderLogin/>
      <SignUp/>
      <HeaderApp/>
      <Login/>

    </div>
  );
}

export default App;
