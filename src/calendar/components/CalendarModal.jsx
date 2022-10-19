import Modal from 'react-modal'

export const CalendarModal = () => {

    const onCloseModal=()=>{
        console.log('Cerrando Modal');
    }

  return (
    <Modal
        isOpen={true}

        onRequestClose={onCloseModal}
        style={customStyles}
        
    >
        <H1>Hola mundo</H1>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis exercitationem nostrum, impedit quisquam corrupti ipsum quia, perferendis maxime explicabo a. Impedit cum laborum, iusto blanditiis ullam recusandae voluptatum a?</p>
    </Modal>
  )
}
