// import React, { useState, useEffect } from 'react';

// // styles
// import './itemCount.css';



// export default function ItemCount() {
//     const [count, setCount] = useState(0);
//     let stock = 5;
//     // sumamos productos
//     const addCount = () => {
//         setCount(count => Math.min(count + 1, stock));
//         // setCount(count + 1);
//         console.log(count);
//         if (count >= stock) {
//             alert('No hay mas stock de este producto')
//         }
//     }
//     // restamos productos
//     const subCount = () => {
//         setCount(count => Math.max(count - 1, 0));
//         console.log(count);
//     }

//     return <div className=''>
//         {/* <img className='img-product' src="./img/8-highdarkmocha.jpg" alt="" /> */}
//         <div className='card-controls'>
//             <button className='btn btn-sub' onClick={subCount}>-</button>
//             <p className='counter-items'>{count}</p>
//             <button className='btn btn-add' onClick={addCount}>+</button>
//         </div>
//         <div className=''>
//             {/* <p>{stock}</p> */}
//             <button className='add-cart'>Agregar al carrito </button>
//         </div>
//     </div>;
// }



// import { useState } from "react";
// import Item from "../Item/Item";

// function ItemCount({ data, initial, onAdd }) {
//     const [contador, setcontador] = useState(initial);

//     const handleAumentar = () => {
//         if (contador < data.stock) {
//             setcontador(contador + 1)
//         }
//     }

//     const handlerRestar = () => {
//         if (contador > initial) {
//             setcontador(contador - 1)
//         }
//     }

//     const agregar = () => {
//         onAdd(contador)
//     }

//     return (
//         <div className="container w-50">
//             <button className="btn btn-outline-primary" onClick={handleAumentar}> + </button>
//             {contador}
//             <input type="text" readOnly value={contador} />
//             <button className="btn btn-outline-primary" onClick={handlerRestar}> - </button><br />
//             <button className="btn btn-outline-primary btn-block" onClick={agregar} >Agregar al carrito</button>
//         </div>
//     )
// }

// export default ItemCount;


import React, { useState } from 'react';
import Item from '../Item/Item';

export default function ItemCount({ stock, initial, onAdd, size }) {



    const [counter, setCounter] = useState(initial);
    const [added, setAdded] = useState("hidden added-to-cart");
    const [addedMobile, setAddedMobile] = useState("hidden added-to-cart-mobile");

    const handleAdded = () => {
        setAdded("visible added-to-cart");
        setAddedMobile("visible added-to-cart-mobile")
        setTimeout(() => {
            setAdded("hidden added-to-cart")
            setAddedMobile("hidden added-to-cart-mobile")
        }, 1500);
    }

    const addAmount = () => {
        if (counter === stock) {
            return;
        }
        console.log(counter);
        setCounter(counter + 1);
    }
    const subAmount = () => {
        if (counter === 1) {
            return;
        }
        setCounter(counter - 1);
    }


    return (
        <div className='d-flex justify-content-around'>
            <div className="justify-content-center w-auto input-group mt-1 mb-1">
                <button onClick={subAmount} className={size > 500 ? "btn btn2 bg-light border" : "btn count-mobile bg-light border"}>-</button>
                <input type="text" className={size > 500 ? "btn btn2 fw-bold bg-light border" : "btn count-mobile bg-light border"} readOnly value={counter} />
                <button onClick={addAmount} className={size > 500 ? "btn btn2 bg-light border" : "btn count-mobile bg-light border"}>+</button>
            </div>
            <div className='d-flex justify-content-around'>
                <button className="btn chart border" onClick={() => { onAdd(counter); }}>
                    <span onClick={handleAdded} sx={{ color: "#fff" }} fontSize="medium" />
                </button>
            </div>
        </div>

    )
}