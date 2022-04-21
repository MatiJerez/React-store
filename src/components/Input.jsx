
const Input = ({ saludar }) => {

    return (
        <div>
            <p>Fede</p>            
            <input placeholder='ingresar nombre' />
            <button onClick={()=>saludar()}>Ejecutar</button>
        </div>
    )
}

export default Input
