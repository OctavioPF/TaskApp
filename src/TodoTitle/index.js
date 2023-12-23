import './TodoTitle.css'
import React from 'react';
import { TodoContext } from '../TodoContext';



function TodoTitle() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}
//se debe de exportar para quye funciuone hay diferentes opciones
export { TodoTitle };