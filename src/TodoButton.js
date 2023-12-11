import './TodoButton.css'
function TodoButton() {
  return (
    <div className='centrar' >
      <button onClick={
      (event) => {
        console.log('le diste click')
        console.log(event)
        console.log(event.target)
      }
    }>+AGREGAR+</button>
    </div>

  )
}

export {TodoButton}; 