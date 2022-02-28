import React from 'react';

export default function Pizza(props) {
    const { orders } = props
    

    if(!orders) {
        return <h3>fetching your pizza order!</h3>
    }

    return (
        <div className='pizza-container'>
            <h2>{orders.name}'s Order</h2>
            <p>Size: {orders.size}</p>
            <ul>Toppings:
                {orders.topping1 ? <li>Pepperoni</li> : null}
                {orders.topping2 ? <li>Ham</li> : null}
                {orders.topping3 ? <li>Sausage</li> : null}
                {orders.topping4 ? <li>Peppers</li> : null}
            </ul>
            <p>Instructions: {orders.special}</p>
        </div>
    )
}