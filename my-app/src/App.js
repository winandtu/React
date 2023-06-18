//import logo from './logo.svg';
import './App.css';
import Description from './description';


//Para crear un nuevo modulo
const Mensaje = ()=>{
  return <h1>Hola mundo</h1>
}

//
function App() {
  return (
    <div className="App">
        <Mensaje/>
        <Description color='blue' message = 'Usando parametros y reutilizando el componente'/>
        
    </div>
  );
}

export default App;
