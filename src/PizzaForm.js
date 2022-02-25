import React from 'react';

export default function PizzaForm(props) {
    const { values, submit, change, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse);
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h2>Build Your Own Pizza!</h2>
            <div className='pizza-inputs'>
                <div>
                    <p>{errors.name}</p>
                    <p>{errors.size}</p>
                </div>

                <label>Name
                    <input
                        type='text'
                        name='name'
                        id='name-input'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label id='size-dropdown'>Size
                    <select onChange={onChange} value ={values.size} name='size'>
                        <option value=''>-Select a pizza size-</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <button>Submit Order</button>
            </div>
        </form>
    )
}