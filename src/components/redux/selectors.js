import { createSelector } from "@reduxjs/toolkit";

export const showListStaffSelector = (state) => state.staffStoreReducer.staff1;
export const showListSearchSelector = (state) =>  state.staffStoreReducer.search1;
export const showListDepartmentSelector = (state) => state.staffStoreDep.department;

export const showListStaffAll = createSelector(
  showListStaffSelector,
  showListSearchSelector,
  (staffSelector, searchStaffSelector) => {
    return staffSelector.filter(sta => {
      return sta.name?.includes(searchStaffSelector);
    });
  }
);
