import { useEffect, useState } from "react"
// import { getFetch } from "../helpers/mock"
import ItemCount from "./ItemCount.js/ItemCount"

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setloading] = useState(true)


    // useEffect(() => {
    //     // llamada a una api. Tarea asincónica
    //     getFetch
    //         .then(res => setProductos(res))
    //         .catch(err => console.log(err))
    //         //.then(respuesta => console.log(respuesta))
    //         .finally(() => setloading(false))
    //     //console.log('api')     
    // }, [])

    function onAdd(cant) {
        console.log(cant)
    }

    //console.log(productos)

    // [1,2,3,4] 0, 1 => [<li>1</li>, <li>2</li>.....]
    return (
        <div>
            {loading ? <h2>Cargando ...</h2> :
                productos.map(prod => <div
                    key={prod.id}
                    className='col-md-4'
                >
                    <div className="card w-100 mt-5" >
                        <div className="card-header">
                            {`${prod.name} - ${prod.categoria}`}
                        </div>
                        <div className="card-body">
                            <img src={prod.foto} alt='' className='w-50' />
                            {prod.price}
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-primary btn-block">
                                detalle del producto
                            </button>
                        </div>
                    </div>
                </div>

                )}
            {/* <button onClick={() => setBool(!bool)}>cllik</button><br />
            <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
        </div>
    )
}

export default ItemListContainer
