
import {  useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { calendarApi } from "../api";
import { convertsEventsToDate } from "../helpers";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent,onLoadEvents } from "../store";

// Custom Hook Donde se hace las funciones con los dispatch de los reducers del Redux utilizando el redux-toolkit
export const useCalendarStore = () => {

 // Constante del useDispatch
    const dispatch = useDispatch();

    // Destructura los events y los activeEvents del state del calendar que esta almacenado en el store.
    const { events, activeEvent } = useSelector( state => state.calendar )
    const { user } = useSelector( state => state.auth )
    
    // funcion que recive el evento calendario y despacha la accion ActiveEvent, para activas las notas al seleccionarlas doble click.
    const setActiveEvent = ( calendarEvent ) =>{
        dispatch( onSetActiveEvent( calendarEvent ));
    }

// funcion de dispatch del boton + para guardar las notas!
// hace uso de sus propios reducers y sus componentes individuales, Son los dos componentes Fab!
    const startSavingEvent = async( calendarEvent ) =>{
        //TODO: update Event
        //TODO: Llegando al back-end

        try {
            
            if( calendarEvent.id ){
                await calendarApi.put( `/events/${ calendarEvent.id }`, calendarEvent );
                dispatch(onUpdateEvent( {...calendarEvent,user } ));
                return;
    
            }
            
            //Creando
            const {data} = await calendarApi.post('/events', calendarEvent)
            // console.log({data});
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.eventoGuardado.id, user }) )

        } catch (error) {
            console.log(error)
            Swal.fire('Error al guardar', error.response.data.msg, 'error' );
        }
    }

// funcion para eliminar una nota, haciendo un dispatch del onDeleteEvent el cual es un reducer propio.
    const StartDelitingEvent = async() => {
        // TODO: llegar al backend
        try {
            // Mando a llamar la funcion delete del back-end, pasando la ruta y el id del evento Activo
            await calendarApi.delete(`/events/${activeEvent.id}`);
            dispatch(onDeleteEvent());
        } catch (error) {
            console.log(error);
            Swal.fire('Error al Eliminar', error.response.data.msg, 'error' );
        }
       
    }

    const startLoadingEvents = async() => {
        try {
            
            const { data } = await calendarApi.get('/events');
            const events = convertsEventsToDate( data.eventos );
            dispatch( onLoadEvents( events ) );


        } catch (error) {
          console.log('Error cargando eventos');
          console.log(error)
        }
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
        startLoadingEvents

    }
}
