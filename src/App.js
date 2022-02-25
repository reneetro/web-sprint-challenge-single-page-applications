import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import Home from './Home';

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
    <Switch>
      <Route path={'/pizza'}>
        {/* <Pizza></Pizza> */}
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>

    </>
  );
};
export default App;
