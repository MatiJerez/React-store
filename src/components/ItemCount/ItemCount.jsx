import React, { useState, useEffect } from 'react';

// styles
import './itemCount.css';



export default function ItemCount() {
    const [count, setCount] = useState(0);
    let stock = 5;
    // sumamos productos
    const addCount = () => {
        setCount(count => Math.min(count + 1, stock));
        // setCount(count + 1);
        console.log(count);
        if (count >= stock) {
            alert('No hay mas stock de este producto')
        }
    }
    // restamos productos
    const subCount = () => {
        setCount(count => Math.max(count - 1, 0));
        console.log(count);
    }

    return <div className=''>
        {/* <img className='img-product' src="./img/8-highdarkmocha.jpg" alt="" /> */}
        <div className='card-controls'>
            <button className='btn btn-sub' onClick={subCount}>-</button>
            <p className='counter-items'>{count}</p>
            <button className='btn btn-add' onClick={addCount}>+</button>
        </div>
        <div className=''>
            {/* <p>{stock}</p> */}
            <button className='add-cart'>Agregar al carrito </button>
        </div>
    </div>;
}
