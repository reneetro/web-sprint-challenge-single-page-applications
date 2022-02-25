import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import PizzaForm from './PizzaForm'

const initialFormValues = {
  name: '',
  size: '',
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
    }
  }

  const inputChange = (name, value) => {
    console.log(name, value);
    setFormValues({
      ...formValues,
      [name] : value
    })
  }

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
        <PizzaForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        />
  
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>

    </>
  );
};
export default App;
