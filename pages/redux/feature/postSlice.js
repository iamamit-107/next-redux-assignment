import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	posts: null,
	selectedPost: null,
};

export const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setAllPosts: (state, action) => {
			state.posts = action.payload;
		},

		updateSelectedPost: (state, action) => {
			state.selectedPost = action.payload;
		},
	},
});

export const { updateSelectedPost, setAllPosts } = postSlice.actions;

export const getSelectedPost = (state) => state.posts.selectedPost;

export default postSlice.reducer;
