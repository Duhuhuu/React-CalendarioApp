import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenlDateModal } from "../store";


export const useUiStore = () => {

  const dispatch = useDispatch();

  const { isDateModalOpen } =  useSelector( state => state.ui );

  const openDateModal = () =>{
    dispatch(onOpenlDateModal());
  }

  const  closeDateModal = () => {
    dispatch(onCloseDateModal());
  }

  const toggleDateModal = () =>{
    (isDateModalOpen)
    ? openDateModal()
    :closeDateModal();
  }

  return{ 
    //Propiedades.
    isDateModalOpen,
   
    // Metodos.
    openDateModal,
    closeDateModal,
    toggleDateModal,
   
  }
}
