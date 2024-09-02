import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store";
import "./App.css";

const STORAGE_KEY = "numTabs";

const App = () => {
	const [username, setUsername] = useState("");
	const token = useSelector((state) => state.auth.token);
	const isLastTab = useSelector((state) => state.auth.isLastTab);
	const dispatch = useDispatch();

	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		if (storedToken) {
			dispatch(login(storedToken));
		}
	}, [dispatch]);

	const handleLogin = (e) => {
		e.preventDefault();
		const fakeToken = `${username}-token-${Date.now()}`;
		localStorage.setItem("token", fakeToken);
		dispatch(login(fakeToken));
		const numTabs = Number.parseInt(
			localStorage.getItem(STORAGE_KEY) || "0",
			10,
		);
		localStorage.setItem(STORAGE_KEY, numTabs + 1);
		sessionStorage.setItem(STORAGE_KEY, numTabs + 1);
	};

	useEffect(() => {
		if (token) {
			const numTabs = Number.parseInt(
				localStorage.getItem(STORAGE_KEY) || "0",
				10,
			);
			if (numTabs === 0) {
				localStorage.setItem(STORAGE_KEY, 1);
				sessionStorage.setItem(STORAGE_KEY, 1);
			}
		}
	}, [token]);

	const numTabs = Number.parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);

	console.log("token", token);
	return (
		<div className="app">
			<h1>Session Management Demo</h1>
			{!token ? (
				<form onSubmit={handleLogin} className="login-form">
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Enter username"
					/>
					<button type="submit">Login</button>
				</form>
			) : (
				<div className="info">
					<h2>Welcome, {username}!</h2>
					<p>
						<strong>Token:</strong> {token}
					</p>
					<p>
						<strong>Is Last Tab:</strong> {isLastTab ? "Yes" : "No"}
					</p>
					<p>
						<strong>Number of Tabs:</strong> {numTabs}
					</p>
				</div>
			)}
		</div>
	);
};

export default App;
