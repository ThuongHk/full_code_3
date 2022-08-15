import {configureStore} from '@reduxjs/toolkit';
import staffSlice from '../staff/staffSlice';



const store = configureStore({
reducer: staffSlice.reducer
})

export default store