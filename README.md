# Session Management Demo

This project demonstrates how to handle user session management across multiple browser tabs using React and Redux. The goal is to ensure that the user is logged out only when the last tab of the website is closed.

## Technologies Used
⚛️ React: A JavaScript library for building user interfaces.

🐍 Redux: A predictable state container for JavaScript apps.

🛠️ Redux Toolkit: The official, recommended way to write Redux logic.

💾 LocalStorage & SessionStorage: Web storage APIs for storing data in the browser.

## Features
- Login/Logout: Users can log in and log out.
- Multi-Tab Session Management: The application keeps track of the number of open tabs and logs out the user only when the last tab is closed.

## Project Structure
- AuthProvider.jsx: Manages the authentication state and tab count.
- App.jsx: Main application component with login form and session information display.
- store.js: Redux store configuration with authentication slice.

## Getting Started
### Prerequisites
npm or bun 

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/session-management-demo.git
cd session-management-demo
```

2. install dependencies:

```sh
npm install
# or
bun install
```

### Running the Application

```sh
npm run dev
# or
bun run dev
```
### Usage
1. Enter a username and click "Login".
2. Open multiple tabs to see the session management in action.
3. Close tabs and observe that the user is logged out only when the last tab is closed.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
