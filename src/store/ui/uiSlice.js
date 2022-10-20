import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
         isDateModalOpen: false
    },
    reducers: {
       onOpenlDateModal: (state) =>{
        state.isDateModalOpen = true;
       },
       onCloseDateModal: (state) =>{
        state.isDateModalOpen = false;
       },
    //    onCalendar: (state) =>{
        
    //    }

    }
});


// Action creators are generated for each case reducer function
export const { onOpenlDateModal, onCloseDateModal  } = uiSlice.actions;













