import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Scheduler from "./components/Scheduler.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Constants from "./util/Constants.js";

const router = createBrowserRouter([
	{
		path: `${Constants.BASE_PATH}/`,
		element: <App />,
		children: [
			{
				path: `${Constants.BASE_PATH}/`,
				element: <Dashboard />,
			},
			{
				path: `${Constants.BASE_PATH}/scheduler`,
				element: <Scheduler />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
