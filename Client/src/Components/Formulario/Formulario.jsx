import React, { useState, useEffect } from 'react'
import URL_BACKEND from '../../common/server'

const Formulario = ({obtenerDatos, estadoListas, setEstadoListas}) => {

  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState('');

  const cargarDatos = async (tarea)=>{
    //console.log(URL_BACKEND);
    const response = await fetch(`${URL_BACKEND}/create`, {
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(tarea)
    })
    //Recibimos una bandera para saber si se realizó la petición 
    if(response.status == 200){
      //alert("Tarea creada");
      //const tareaNueva = await response.json();
      //setListaTareas(tareasPrev => [...tareasPrev, tareaNueva]);
      obtenerDatos("show");
    }

    
  }

  const eventoFormulario =(evt) =>{
    evt.preventDefault();

    const nuevaTarea ={
      title,
      description,
      status: true
    }

    //setListaTareas(tareasPrev => [...tareasPrev, nuevaTarea]);
    cargarDatos(nuevaTarea);

    setTitle('');
    setDescription('');
  }

  const showTasks = (status) =>{
    status =="show" ?
      setEstadoListas(0):
      status =="complete" ?
        setEstadoListas(1):
        setEstadoListas(2);
    obtenerDatos(status);
  }
  return (
    <>
      <form 
      onSubmit={eventoFormulario}
      className='flex flex-column col-9 shadow p-3 rounded mt-4'>

        <h2 className='text-center'>To - do List</h2>

        <div className='input-group mb-3 col-12'>
          <label className='input-group-text'>
            <i className='bi bi-list-task me-1'></i>
          </label>
          
          <input 
          onChange={(evt)=>setTitle(evt.target.value)}
          value={title}
            className='form-control' 
            type="text" 
            placeholder='Work'
            required/>
        </div>

        <div className='input-group mb-3 col-12'>
          <label className='input-group-text'>
            <i className="bi bi-chat me-1"></i>
          </label>
          <input 
          onChange={(evt)=>setDescription(evt.target.value)}
          value={description}
            type="text" id="" 
            placeholder='Escribe tu tarea'
            className='form-control'
            required/>
        </div>
      
        <button className='btn btn-success col-12'>Agregar</button>

      </form>
      <div className='btn-group mt-3 col-9'>
        <button 
          className={`btn btn${estadoListas==0?"-info":"-outline-info"}`}
          onClick={()=>showTasks("show")}
        >Todos
        </button>

        <button 
          className={`btn btn${estadoListas==1?"-info":"-outline-info"}`}
          onClick={()=>showTasks("complete")}
        >Pendientes</button>

        <button 
          className={`btn btn${estadoListas==2?"-info":"-outline-info"}`}
          onClick={()=>showTasks("incomplete")}
        >Completados</button>
      </div>
    </>
    
  )
}

export default Formulario