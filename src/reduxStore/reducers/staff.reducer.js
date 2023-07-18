import { createSlice } from "@reduxjs/toolkit";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";
import { getMultipleDocuments } from "../../firestore/getFromFirestore.utils";

export const staffSlice = createSlice({
    name: "staffList",
    initialState: {},
  reducers: {
    updateStaffList: (state, action) => {
      state.staffList = action.payload;
  },
  addStaff: (state, action) => {
    const { StaffName, staffDetails } = action.payload;

    state.staffList[StaffName] = staffDetails;

    addCollectionAndDocuments("Staff", StaffName, staffDetails);
  }
  },
});

    export const { addStaff, updateStaffList } = staffSlice.actions;
    export const staffReducer = staffSlice.reducer;
