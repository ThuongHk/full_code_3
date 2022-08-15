import {configureStore} from '@reduxjs/toolkit';
import staffSlice from '../staff/staffSlice';



const store = configureStore({
reducer: {
    staffStoreReducer: staffSlice.reducer
} 
})

export default store