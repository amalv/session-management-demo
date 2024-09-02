import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, setIsLastTab } from "./store";

const STORAGE_KEY = "numTabs";

const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.token);

	useEffect(() => {
		const handleBeforeUnload = (event) => {
			const numTabs =
				Number.parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10) - 1;
			localStorage.setItem(STORAGE_KEY, numTabs);
			sessionStorage.setItem(STORAGE_KEY, numTabs);
			if (numTabs === 0) {
				dispatch(logout());
			}
			event.preventDefault();
			event.returnValue = "";
		};

		window.addEventListener("beforeunload", handleBeforeUnload);

		// Increment tab count only if it's not already incremented in this session
		if (!sessionStorage.getItem("tabInitialized")) {
			const numTabs =
				Number.parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10) + 1;
			localStorage.setItem(STORAGE_KEY, numTabs);
			sessionStorage.setItem(STORAGE_KEY, numTabs);
			sessionStorage.setItem("tabInitialized", "true");
		}

		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, [dispatch]);

	useEffect(() => {
		const numTabs = Number.parseInt(
			localStorage.getItem(STORAGE_KEY) || "0",
			10,
		);
		dispatch(setIsLastTab(numTabs === 1));
	}, [dispatch]);

	return children;
};

export default AuthProvider;
