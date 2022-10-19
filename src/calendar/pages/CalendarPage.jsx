import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from "date-fns";


import { Navbar, CalendarEvent, CalendarModal } from "../";
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';



const events = [{
  title: 'Cumple Años',
  notes: 'Hola',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Fernando'
  }

}];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#yourAppElement');

export const CalendarPage = () => {

  const [lastView, setlasView]= useState( localStorage.setIte,  ('lastView') || 'week')

  const eventStyleGetter = (event, start, end, isSelected) => {

    // console.log({event, start, end, isSelected})

    const style= {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color:'white'
    }

    return { 
      style
    }
  }

  const onDoubleClick = ( event ) =>{
    console.log({doubleClick: event})
  }

  const onSelect = ( event ) =>{
    console.log({click: event});
  }

  const onViewChanged = ( event ) =>{
    localStorage.setItem('lastView', event);
    setlasView(event)
  }


  return (
    <>
      <Navbar />

    <Calendar
    culture='es'
      localizer={localizer}
      events={events}
      defaultView={lastView}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc( 100vh - 80px )' }}
      messages={getMessagesES()}
      eventPropGetter={ eventStyleGetter}
      components={{event: CalendarEvent }}
      onDoubleClickEvent={ onDoubleClick }
      onSelectEvent={onSelect}
      onView= {onViewChanged}
    />

    <CalendarModal/>


    </>
  )
}
