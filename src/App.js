import './App.css';
import HomeScreen from './containers/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from './components/Sidebar/sidebar';
import { Header } from './components/Header/Header';


function App() {
	return (
		<div className="App">
			<Sidebar />
			<div className='Wrapper'>
				<Header />
				{/* <Link to="home">Home</Link> */}
				<HomeScreen />
				<Routes>
					<Route path='home' element={<HomeScreen />} />
				</Routes>
			</div>
		</div>
	);
}


export default App