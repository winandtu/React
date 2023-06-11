//se puede importar componentes o funciones de otros archivos
//este modulo se importara en app.js

/*const Descripcion = ()=>{

    return <p>Aqui estamos importando este nuevo modulo desde el archivo descripcion.js</p>
}*/

//vamos a reutilizar el componente usando paramatros:

const Description = (props)=>{
    console.log(props)
    return <h2 style={{color: props.color}}>
            {props.message}</h2>
}

export default Description