import { createSlice } from '@reduxjs/toolkit';
// import { addHours } from 'date-fns';
// const tempEvent =  {
//     _id: new Date().getTime(),
//     title: 'Cumple Años',
//     notes: 'Hola',
//     start: new Date(),
//     end: addHours( new Date(), 2 ),
//     bgColor: '#fafafa',
//     user: {
//       _id: '123',
//       name: 'bakita'
//     }
  
//   }

// Slice del calendario, donde se crean los Reducers del las acciones del calendario.
export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
      isLoadingEvents: true,
       events: [
        //tempEvent
        ],
       activeEvent: null
    },
    reducers: {
      // Reducer para activar las notas!
        onSetActiveEvent: (state, {payload}) =>{
            state.activeEvent = payload;
        },
     // Reducer para agregar nuevas notas!
        onAddNewEvent: (state, {payload}) => {
          state.events.push( payload );
          state.activeEvent = null;
        },
     // Reducer para modificar notas ya existentes!
        onUpdateEvent: (state, {payload}) => {
          state.events = state.events.map( event=>{
              if (event.id === payload.id )
              
              return payload;
          })
          
        },
      // Reducer para eliminar notas ya existentes!
        onDeleteEvent: ( state ) => {

          if (state.activeEvent){
            state.events = state.events.filter( event => event.id !== state.activeEvent.id )
            state.activeEvent = null;
          }

        },

        onLoadEvents: ( state, { payload = [] })=>{
          state.isLoadingEvents = false;
          
          payload.forEach(event => {
            const exists = state.events.some( dbEvent => dbEvent.id === event.id );
            if (!exists) {
              state.events.push( event )
            }

          });

        }

    }
});


// Exportacion de los reducers!
// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadEvents } = calendarSlice.actions;