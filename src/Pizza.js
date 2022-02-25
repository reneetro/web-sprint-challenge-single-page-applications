import React from 'react';

export default function Pizza(props) {
    const { orders } = props
    

    if(!orders) {
        return <h3>fetching your pizza orders!</h3>
    }

    return (
        <div className='pizza-container'>
            <h2>{orders.name}'s Order</h2>
            <p>Size: {orders.size}</p>
            <p>Instructions: {orders.special}</p>
            <p>Toppings:</p>
            {/* {if(order.topping1 } */}
        </div>
    )
}