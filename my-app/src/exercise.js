/*
const Ejercicio = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    return (
      <div>
        <Problema/>
        <h1>{course}</h1>
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
    )
  }
*/


const Problema = () => {
    
    const titulo = 'Ejercicio 1'
    const enunciado = "Desafortunadamente, toda la aplicación está en el mismo componente. Refactorice el código para que conste de tres componentes nuevos: Header, Content y Total. Todos los datos aún residen en el componente App, que pasa los datos necesarios a cada componente mediante props. Header se encarga de representar el nombre del curso, Content representa las partes y su número de ejercicios y Total representa el número total de ejercicios."

    const resultado = <div> 
                        <h1>{titulo}</h1> 
                        <p>{enunciado}</p>
                        </div>

    return resultado;
}

const Header = (props) => { 
    return <h1>{props.curso}</h1>;
}

const Content = (props) => {
    return <p>- {props.part}: {props.exercises}</p>;
}

const Total = (props) => {
   return <p>- Total: {props.total}</p>
}

const Ejercicio = () => {

    //header
    const curso = 'Solución: Half Stack application development'
    //content
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    //total
    const total= exercises1+exercises2+exercises3

    return (<div>
         
            <Problema/>
            <Header curso={curso}/>
            <Content part = {part1} exercises = {exercises1}/>
            <Content part = {part2} exercises = {exercises2}/>
            <Content part = {part3} exercises = {exercises3}/>
            <Total total = {total}></Total>
        </div>)
}

export default Ejercicio;