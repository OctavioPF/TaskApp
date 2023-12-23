import './TodoButton.css'
function TodoButton({ setOpenModal }) {
  return (
    <div className='centrar' >
    <button
      className="TodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >+</button>
    </div>
    
  )
}

export {TodoButton}; 