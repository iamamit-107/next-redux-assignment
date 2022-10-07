import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./feature/postSlice";

export const store = configureStore({
	reducer: {
		posts: postReducer,
	},
});
