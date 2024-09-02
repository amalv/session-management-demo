import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: localStorage.getItem("token") || null,
		isLastTab: false,
	},
	reducers: {
		login: (state, action) => {
			state.token = action.payload;
			localStorage.setItem("token", action.payload);
		},
		logout: (state) => {
			state.token = null;
			localStorage.removeItem("token");
		},
		setIsLastTab: (state, action) => {
			state.isLastTab = action.payload;
		},
	},
});

export const { login, logout, setIsLastTab } = authSlice.actions;

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
	},
});

export default store;
