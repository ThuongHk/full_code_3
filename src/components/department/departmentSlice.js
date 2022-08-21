import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


const departmentSlice = createSlice({
    name: 'Department',
    initialState: { status: 'idle', department: []},
    reducers: {
        depfilter: (state, action)=> {
            state.status = 'success'
            state.department = action.payload
        }
        
    },
    extraReducers: builder =>{
        builder
        .addCase(getDepartments.fulfilled,(state, action)=>{
          state.status = 'success'
          state.department = action.payload
        })
    }
})
export const getDepartments = createAsyncThunk( 'getDepartments', async ()=>{
    const res = await fetch('https://rjs101xbackend.herokuapp.com/departments');
    const data = await res.json();
    return data
 }
   )
export default departmentSlice;