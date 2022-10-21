
import { useCalendarStore } from "../../hooks";


export const FabDelete = () => {
  

  // Hace una destructuracion de los eventos que estan almacenados en el calendarStore.
  const { StartDelitingEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = () =>{
    StartDelitingEvent();
  };

  return (
    <button
        className="btn btn-danger fab-danger"
        onClick={ handleDelete }
        style={{
          display: hasEventSelected ? '': 'none'
        }}
    >
        <i className="fas fa-trash-alt" ></i>
    </button>
  )
}
