import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

import Home from './Home';
import PizzaForm from './PizzaForm';
import schema from './formSchema';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  ham: false,
  sausage: false,
  peppers: false,
  instructions: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  pepperoni: '',
  ham: '',
  sausage: '',
  peppers: '',
  instructions: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [pizzas, setPizza] = useState([]);

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      topping1: formValues.pepperoni,
      topping2: formValues.ham,
      topping3: formValues.sausage,
      topping4: formValues.peppers,
      special: formValues.instructions.trim(),
    }
    axios.post('https://reqres.in/api/orders', newPizza)
      .then(res => {
        console.log(newPizza);
        setPizza(res.data, ...pizzas)
        setFormValues(initialFormValues)
        setFormErrors(initialFormErrors)
      })
      .catch(err => console.error(err));
    }
    
    // useEffect(() => {
    //   axios.get('https://reqres.in/api/orders')
    //     .then(res => setPizza(res.data))
    // }, [])


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
      {
        pizzas.map(pizza => {
          return (
            <Pizza orders={pizza}/>
          )
        })
      }
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>

    </>
  );
};
export default App;
