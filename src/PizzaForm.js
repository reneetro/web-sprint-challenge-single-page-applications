import React from 'react';


export default function PizzaForm(props) {
    const { 
        values, 
        submit, 
        change, 
        errors, 
        disabled 
    } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h2>Build Your Own Pizza!</h2>
            <div className='pizza-inputs'>
                <div className = 'errors'>
                    <p>{errors.name}</p>
                    <p>{errors.size}</p>
                </div>

                <label>Name :
                    <input
                        type='text'
                        name='name'
                        id='name-input'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label>Size :
                    <select 
                    onChange={onChange} 
                    value ={values.size} 
                    name='size'
                    id='size-dropdown'
                    >
                        <option value=''>-Select a pizza size-</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
            <div className='toppings'>
                <h3>Toppings:</h3>
                <label>Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                </label>
                <label>Ham
                    <input 
                        type='checkbox'
                        name='ham'
                        checked={values.ham}
                        onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input 
                        type='checkbox'
                        name='sausage'
                        checked={values.sausage}
                        onChange={onChange}
                    />
                </label>
                <label>Peppers
                    <input 
                        type='checkbox'
                        name='peppers'
                        checked={values.peppers}
                        onChange={onChange}
                    />
                </label>
                </div>
                <div className = 'instructions'>
                <label>Special Instructions
                    <textarea
                        id='special-text' 
                        type='text'
                        name='instructions'
                        value={values.instructions}
                        onChange={onChange}
                    />
                </label>
                </div>
            </div>
                <button id = 'order-button' disabled={disabled}>Add to Order</button>
        </form>
    )
}