import './TodoTitle.css'
//parametros en react  se llaman props
const estilos = {
 
}
function TodoTitle({total, completed, palabra}) {
    
  return (
    <h1 >
        Has completado {completed} de {total} tareas  {palabra}
    </h1>
  )
}
//se debe de exportar para quye funciuone hay diferentes opciones
export  { TodoTitle };