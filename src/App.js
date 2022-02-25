import React from "react";
import { Route, Link, Switch } from 'react-router-dom';


const App = () => {
  return (
    <>
    <nav>
      <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order</Link>
        </div>
    </nav>
      <p>You can remove this code and create your own header</p>
   
    </Switch>
    </>
  );
};
export default App;
