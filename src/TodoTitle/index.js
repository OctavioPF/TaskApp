import './TodoTitle.css'
import React from 'react';


function TodoTitle({ total, completed }) {

  return (
    <h1 >
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  )
}
//se debe de exportar para quye funciuone hay diferentes opciones
export { TodoTitle };