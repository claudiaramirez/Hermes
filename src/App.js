import React from 'react';
import HeaderLogin from './Components/header/HeaderLogin'; 
import HeaderApp from './Components/header/HeaderApp';
import Login from './Views/login'; 
import SignIn from './Views/signin';

function App() {
  return (
    <div className="App">
      <HeaderLogin/>
      <HeaderApp/>
      <Login/>
      <SignIn/>
    </div>
  );
}

export default App;
