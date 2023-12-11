import { TodoTitle } from './TodoTitle';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import React from 'react';

//van a hacer estados 
const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Finalizar curso de React', completed: false },
  { text: 'Realizar CV', completed: true },
  { text: 'Agregar proyecto a GITHUB', completed: false },
  { text: 'mandar solicitud de trabajo', completed: false }
,  { text: 'MAYUSCULAS', completed: false }

];
//si nos encontramos una funcion com mayuscula probablemente es componente de React
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue);
    }
  );
  
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  console.log('Los usuarios buscan todos de ' + searchValue);
  return (
    <>
      <TodoTitle
        completed={completedTodos} total={totalTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <TodoButton />

    </>
  );
}
export default App;
