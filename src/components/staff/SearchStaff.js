import React from 'react';
import { useState } from 'react';
import staffSlice from './staffSlice';
import { useDispatch } from 'react-redux';

const SearchStaff = () => {
const [ searchInput, setSearchInput] = useState('')
const dispatch = useDispatch()

this.props.parentCallback("Hey Popsie, How’s it going?");

const handleSearchChange = (e) => {
    setSearchInput(e.target.value)
    dispatch(staffSlice.actions.searchListStaff(e.target.value))   
}

    return (
        <div>
           <p> <b>Tìm Kiếm Nhân Viên: </b></p>
            <input type="text" placeholder="Nhập tên nhân viên" value={searchInput} onChange={handleSearchChange}/>
        </div>
    );
};

export default SearchStaff;