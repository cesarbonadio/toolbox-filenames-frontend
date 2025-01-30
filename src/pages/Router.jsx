import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Home/Home";
import Files from "./Files/Files";

function AppRoutes() {
	return (
		<Router>
			{/* <Nabvar /> */}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/files" element={<Files />}></Route>
			</Routes>
		</Router>
	);
}

export default AppRoutes;
