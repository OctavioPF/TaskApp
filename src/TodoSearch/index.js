import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch() {

    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);

    return (
        <div className='inputContainer'>
            <input 
            className= "TodoSearch" 
            value= {searchValue} 
            placeholder="Buscar Tarea" 
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
            />
        </div>
    );
}

export { TodoSearch };