import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import Item from '../Item/Item';


export default function ItemList() {

    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const dataProducts = [
        {
            id: "1",
            title: "NIKE DUNK LOW SB CHUNKY DUNKY",
            stock: 10,
            description: "low",
            price: 2000,
            pictureUrl: "#"
        },
        {
            id: "2",
            title: "NIKE AIR FORCE 1 LOW JUST DO IT ORANGE",
            stock: 4,
            description: "low",
            price: 4000,
            pictureUrl: "#"
        },
        {
            id: "3",
            title: "NIKE AIR MAX 90 INDEPENDENCE DAY WHITE",
            stock: 2,
            description: "air max",
            price: 5000,
            pictureUrl: "#"
        }
    ];

    const getProducts = new Promise((response, reject) => {
        setTimeout(() => {
            response(dataProducts);
        }, 2000);
    });

    useEffect(() => {
        getProducts.then((data) => {
            console.log("respuesta de promesa:", data)
            setProducts(data)
            //Ocultar loader
            setLoader(false)
        })
    }, [])



    return (

        <div fluid className="justify-content-center">
            {
                loader
                    ?
                    <p> loading... </p>
                    :
                    <div >
                        {products.map(product => {
                            return (
                                <div key={product.id}>
                                    <Item data={product} />
                                </div>
                            )
                        })}
                    </div>
            }
        </div>
    )
}