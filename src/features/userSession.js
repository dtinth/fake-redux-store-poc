import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { provideFakeSelectorResult } from "../fake-redux-store";

const { reducer } = createSlice({
  name: "userSession",
  initialState: {
    currentUserId: "5e5e31c381eafb4b45cf1095"
  }
});

const selectCurrentUserId = provideFakeSelectorResult(
  state => state.userSession.currentUserId,
  "fakeuser"
);

export function useCurrentUserId() {
  return useSelector(selectCurrentUserId);
}

export default reducer;
