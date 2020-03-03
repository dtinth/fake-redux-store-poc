import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const { reducer } = createSlice({
  name: "userSession",
  initialState: {
    currentUserId: "5e5e31c381eafb4b45cf1095"
  }
});

const selectCurrentUserId = state => state.userSession.currentUserId;

export function useCurrentUserId() {
  return useSelector(selectCurrentUserId);
}

export default reducer;
