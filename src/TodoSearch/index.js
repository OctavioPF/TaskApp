import React from 'react';
import './TodoSearch.css'

function TodoSearch({searchValue,setSearchValue}) {


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