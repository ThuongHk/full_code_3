import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DEPARTMENTS } from './staffs';


const staffSlice = createSlice({
    name: 'staffInfo',
    initialState: {
        status: '',
        search1: '',
        staff1: [],
        department1: DEPARTMENTS
    },
    reducers: {
        searchListStaff: (state, action) => {
            state.search1 = action.payload
            console.log(action);
        },
        addStaff: (state, action) => {
            console.log(action);
            state.staff1.push(action.payload);
        }

    },
    extraReducers: builder =>  {
        builder
        .addCase(getStaffs.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(getStaffs.fulfilled, (state, action) => {
            state.status = 'success';
            console.log(action.payload)
            state.staff1 = action.payload;
        })
        .addCase(addNewStaff.fulfilled , (state, action) => {
           
            state.staff1.push(action.payload);
            state.status = 'idle';
            console.log();
        })

        
    }
   
})

 export const getStaffs = createAsyncThunk('getStaff', async ()=>{
    const res = await fetch(' https://nodejstesthatn.herokuapp.com/');
    const data = await res.json();
    // console.log(data);
    return data 
 })

 export const addNewStaff = createAsyncThunk('addStaff', async (newStaff) => {
    const res = await fetch(' https://nodejstesthatn.herokuapp.com/', {
        method: 'POST',
        body: JSON.stringify(newStaff)
    })
    const data = await res.json();
    console.log(data);
    return data
 })
export const searchStaff = createAsyncThunk('search', async (search)=>{
    const res = await fetch(' https://nodejstesthatn.herokuapp.com/', {
        method: 'POST',
        body: JSON.stringify(search)
    })
    const data = await res.json();
    return data
})

export default staffSlice;