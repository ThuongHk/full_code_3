import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STAFFS, DEPARTMENTS } from "./staffs";

const staffSlice = createSlice({
  name: "staffInfo",
  initialState: {
    status: "idle",
    search1: "",
    staff1: [],
    department1: DEPARTMENTS,
  },
  reducers: {
    searchListStaff: (state, action) => {
      state.search1 = action.payload;
      console.log(action);
    },
    addStaff: (state, action) => {
      console.log(action);
      state.staff1.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStaffs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getStaffs.fulfilled, (state, action) => {
        state.status = "success";
        state.staff1 = action.payload;
      })
      .addCase(getStaffs.failed, (state, action) => {
        state.status = 'failed'
      })
      .addCase(addNewStaff.fulfilled, (state, action) => {
        state.staff1.push(action.payload);
        state.status = "success";
        console.log();
      })
      .addCase(searchStaffThunk.fulfilled, (state, action) => {
        state.search1 = action.payload;
      })
  },
});

export const getStaffs = createAsyncThunk("getStaffs", async () => {
  const res = await fetch("https://nodejstesthatn.herokuapp.com/");  
  const data = await res.json();
  console.log(data);
  return data;
 
});

export const addNewStaff = createAsyncThunk("addStaff", async (newStaff) => {
  const res = await fetch(" https://nodejstesthatn.herokuapp.com/", {
    method: "POST",
    body: JSON.stringify(newStaff),
  });
  const data = await res.json();
  console.log(data);
  return data;
});

export const searchStaffThunk = createAsyncThunk('searchThunks', async (search)=>{
  const  res = await fetch(" https://nodejstesthatn.herokuapp.com/")
  const data = await res.json();
  return data
})

export default staffSlice;
