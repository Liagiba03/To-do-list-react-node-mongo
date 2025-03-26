import React, {useEffect, useState } from 'react'
import Header from './Components/Header/Header';
import Formulario from './Components/Formulario/Formulario';
import Tareas from './Components/Tareas/Tareas';
import URL_BACKEND from './common/server';

function App() {
  const [contador, setContador] = useState(0);
  const [estadoListas, setEstadoListas] = useState(0);
  const [listaTareas, setListaTareas] = useState([
    /*{
      title: "Tarea 1",
      description: "Tarea 1 description",
      status: true,
    },
    {
      title: "Tarea 2",
      description: "Tarea 2 description",
      status: false,
    },
    {
      title: "Tarea 3",
      description: "Tarea 3 description",
      status: true,
    },
    {
      title: "Tarea 4",
      description: "Tarea 4 description",
      status: false,
    },*/
  ]);

  const obtenerDatos = async (status) =>{
    //console.log(status);
    var response;
    response = await fetch(`${URL_BACKEND}/${status}`);
    if(response.status ==200){
      const tareas = await response.json();
      setListaTareas(tareas);
      //console.log(tareas);
    }
  }

  useEffect(()=>{
    obtenerDatos("show");
  },[]);

  const aumentarContador = () => {
    setContador(contador + 1);
  }
  const decrementarContador = () => {
    setContador(contador - 1);
  }

  return (
    <>
      {/*<h1>{contador}</h1>
    <button className='btn btn-outline-success' onClick={aumentarContador}>+</button>
    <button className='btn btn-outline-danger' onClick={decrementarContador}>-</button>*/}
      <Header />

      <Formulario 
      obtenerDatos={obtenerDatos}
      estadoListas={estadoListas}
      setEstadoListas={setEstadoListas} />

      <Tareas
        listaTareas={listaTareas}
        setEstadoListas={setEstadoListas}
        obtenerDatos={obtenerDatos}/>
    </>

  )
}

export default App
