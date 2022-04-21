import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Item from '../Item/Item';
const task = new Promise((res, rej) => {
    // acciones
    let condition = true;
    let obj = [{
        id: '1', titulo: 'AIR JORDAN RETRO 1 HIGH DARK MOCHA', imagen: './img/8-highdarkmocha.jpg'
    }]
    if (condition) {
        setTimeout(() => {
            res(obj)
        }, 2000)

    } else {
        rej('ERROR')
    }
});


export default function ItemListConteiner({ category }) {
    task
        .then(res => {
            // throw new Error('esto es un error ')
            // return resp;
            console.log(res);
        })
        .catch(err => console.log(err))
        .then(respuesta => console.log(respuesta))
        .finally(() => console.log('si o si al final'))
    return (
        <div>
            <h2>{category}</h2>
            < Item />
        </div>
    )
}
