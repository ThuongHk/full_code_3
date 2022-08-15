import { createSelector} from '@reduxjs/toolkit';

export const showListSearchSelector = state => state.search1
export const showListStaffSelector = state => state.staff1




export const showListStaffAll = createSelector(showListStaffSelector,showListSearchSelector, (staffSelector, searchStaffSelector)=>{
return staffSelector.filter(sta=> {
return sta.name.includes(searchStaffSelector)
})
})