import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { memoize } from "lodash";

const { reducer } = createSlice({
  name: "users",
  initialState: {
    "5e5e31c381eafb4b45cf1095": {
      name: "Alice"
    },
    "5e5e31d081eafb4b45cf1096": {
      name: "Bob"
    }
  }
});

const selectUserById = memoize(userId => state => state.users[userId]);

export function useUser(userId) {
  return useSelector(selectUserById(userId));
}

export default reducer;
