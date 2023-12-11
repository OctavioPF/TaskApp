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
//se debe de exportar para quye funciuone hay diferentes opciones
// dato intreresante en React se crea una pagina virtual para manejar los estados y si hay un cxambion en el virtual 
// lo pasa ya a la pagina verdadera
// no se puede compartir estado de un componente hiojo a un padre
// solo se puede alreves de padre hijo 
export { TodoSearch };