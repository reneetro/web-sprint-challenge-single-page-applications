import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';

import Home from './Home';
import PizzaForm from './PizzaForm';
import schema from './formSchema';

const initialFormValues = {
  name: '',
  size: '',
}

const initialFormErrors = {
  name: '',
  size: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
    }
  }

  const validate = (name ,value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }
  
  const inputChange = (name, value) => {
    validate(name, value);
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
        errors={formErrors}
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
