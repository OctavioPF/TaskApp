import React from 'react'
import './TodoList.css';

function TodoList({children}) {
  return (
    <div className='container'>
      <ul className="TodoList">
      {children}
    </ul>
    </div>
    
  );
}

export { TodoList };