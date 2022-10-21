
export const CalendarEvent = ( {event} ) => {

    const { title, user, notes } = event;
    

    // console.log({title})
  return (
    <>
    <span>{ user.name  }:</span>
    <strong> { title} </strong>
    <br />
    <span>*{ notes  }  </span>
    
    </>
  )
}
