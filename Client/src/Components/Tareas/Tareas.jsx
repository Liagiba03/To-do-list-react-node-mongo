import React, { useState } from 'react'
import Card from './Card'
import URL_BACKEND from '../../common/server';


const Tareas = ({ listaTareas, setEstadoListas, obtenerDatos}) => {

  const commonFetch = async (id, method, name) =>{
    //console.log(`${URL_BACKEND}/${name}/${id}`);
    const response = await fetch(`${URL_BACKEND}/${name}/${id}`,{
      method: method,
      headers:{
        "Content-Type":"application/json"
      }
    });
    if(response.status ==200){
      obtenerDatos("show");
      setEstadoListas(0);
    }

  }

  const eliminar = async (id)=>{
    //console.log(`id: ${id}`);
    commonFetch(id, "DELETE", "delete");
    
  }
  
  const actualizar = (id) =>{
    //console.log(`id: ${id}`);
    commonFetch(id, "PATCH", "update");
    
  }
  
  
  return (
    <>
      <section className='flex flex-column justify-content-center align-items-center p-4 col-9'>

        {
          listaTareas.map((tarea, index) => {
            //const [statusState, setStatus] = useState(tarea.status);
            //console.log(tarea._id);
            //setStatusState(tarea.status);
            return (
              
              < Card
              key={tarea._id}
              id={tarea._id}
              status = {tarea.status}
              title = {tarea.title}
              description = { tarea.description}
              actualizar ={actualizar}
              eliminar = {eliminar}
              />
            )
          })
        }


        {/* <div className="card col-12 p-2 shadow-sm flex-row justify-content-between mb-2">
          <div className="col-8">
            <h3 className='text-secondary text-decoration-line-through'>Deploy</h3>
            <p className="text-secondary">Desplegar app </p>
          </div>
          
            <i className="bi bi-trash text-danger fs-4"></i>
          
        </div>*/}


      </section>
    </>
  )
}

export default Tareas