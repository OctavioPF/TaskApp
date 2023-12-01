import {TodoTitle} from './TodoTitle';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem } from './TodoItem';
import {TodoButton } from './TodoButton';
import React from 'react';

const defaultTodos = [
  { text:'Cortar cebolla', completed: true},
  { text:'Finalizar curso de React', completed: false},
  { text:'Realizar CV', completed: true},
  { text:'Agregar proyecto a GITHUB', completed: false},
  { text:'mandar solicitud de trabajo', completed: false}
]
//si nos encontramos una funcion com mayuscula probablemente es componente de React
function App() {

  return (
    <>
    
      <TodoTitle completed={16} total={20}  />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      <TodoButton/>

    </>
  );
}
export default App;
