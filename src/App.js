import { Fragment } from "react";

function App() {
//En JavaScript se usan las comillas simples por convencion
  const nombre = 'Sofia'
  const apellido = 'Sarapura'
  const edad = 19
  console.log('Hola', nombre, 'de', edad, 'años')
  return (
    // Fragment: es un contenedor y se escribe asi <> 
    <> 
     <h1>const - let - var</h1>
    </>
  );
}

export default App;
