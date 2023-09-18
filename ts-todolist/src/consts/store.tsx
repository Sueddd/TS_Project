import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// const post = createSlice({
//   name: "post",
//   initialState : [
//     {
//         {id : 0, name : "white and black", count : 2}
// 		{id : 2, name : "Grey Yordan", count : 3}
//     }
//   ]
// });

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

