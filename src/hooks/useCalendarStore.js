
import {  useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";

// Custom Hook Donde se hace las funciones con los dispatch de los reducers del Redux utilizando el redux-toolkit
export const useCalendarStore = () => {

 // Constante del useDispatch
    const dispatch = useDispatch();

    // Destructura los events y los activeEvents del state del calendar que esta almacenado en el store.
    const {events, activeEvent} = useSelector( state => state.calendar )
    
    // funcion que recive el evento calendario y despacha la accion ActiveEvent, para activas las notas al seleccionarlas doble click.
    const setActiveEvent = (calendarEvent) =>{
        dispatch(onSetActiveEvent(calendarEvent));
    }

// funcion de dispatch del boton + para guardar las notas!
// hace uso de sus propios reducers y sus componentes individuales, Son los dos componentes Fab!
    const startSavingEvent = async( calendarEvent ) =>{

        if( calendarEvent._id ){
            dispatch(onUpdateEvent( {...calendarEvent} ));

        }else{
            dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
        }

    }

// funcion para eliminar una nota, haciendo un dispatch del onDeleteEvent el cual es un reducer propio.
    const StartDelitingEvent = () => {
        // TODO: llegar al backend
        dispatch(onDeleteEvent());
    }

    return {
        //Properties
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        // Metodos
        setActiveEvent,
        
        startSavingEvent,
        StartDelitingEvent,

    }
}
