import './TodoTitle.css'
import React from 'react';


function TodoTitle({total, completed}) {
    
  return (
    <h1 >
        Has completado {completed} de {total} tareas 
    </h1>
  )
}
//se debe de exportar para quye funciuone hay diferentes opciones
export  { TodoTitle };