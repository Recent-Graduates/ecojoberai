import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const containerStyle = {
	paddingLeft: "10%",
	paddingRight: "10%",
};

function App() {
	return (
		<>
			<Header />
			<div style={containerStyle}>
				<Outlet />
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<Footer />
		</>
	);
}

export default App;
