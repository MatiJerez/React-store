// import React from 'react';
// import ItemCount from '../ItemCount/ItemCount';
// import ItemListConteiner from '../ItemListConteiner/ItemListConteiner';

// export default function item() {
//     return <div className='card'>
//         <img className='img-product' src="./img/8-highdarkmocha.jpg" alt="" />
//         <p>AIR JORDAN RETRO 1 HIGH DARK MOCHA</p>
//         <ItemCount />



//     </div>;
// }

import React from 'react';

import ItemCount from '../ItemCount/ItemCount';

export default function Item({ data }) {
    console.log(data.pictureUrl);
    return (

        <div className="product">
            <p>{data.title}</p>
            <img width="100px" src={"."} alt="product" />
            <ItemCount stock={data.stock} />
        </div>
    )
};
