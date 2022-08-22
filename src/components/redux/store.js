import {configureStore} from '@reduxjs/toolkit';
import departmentSlice from '../department/departmentSlice';
import staffSlice from '../staff/staffSlice';


const store = configureStore({
reducer: {
    staffStoreReducer: staffSlice.reducer,
    staffStoreDep: departmentSlice.reducer
} 
})

export default store




