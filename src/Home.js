import React from 'react';

import { useHistory } from 'react-router-dom';

export default function Home () {

    const history = useHistory();

    const routeToOrder = () => {
        history.push('/pizza');
    }

    return (
        <div className= 'home-wrapper'>
            <button
                onClick={routeToOrder}
                id='order-pizza'
            >
                Order Pizza!
            </button>
        </div>
    )
}