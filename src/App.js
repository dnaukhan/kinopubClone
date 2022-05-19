import './App.css';
import HomeScreen from './containers/Home/Home';
import { Routes, Route, Link, useParams } from "react-router-dom";
import Sidebar from './components/Sidebar/sidebar';
import { Header } from './components/Header/Header';
import FilmDetail from './containers/FilmDetail/FilmDetail';


function App() {

	return (
		<div className="App">
			<Sidebar />
			<div className='Wrapper'>
				<Header />
				{/* <Link to="home">Home</Link> */}


				<Routes>
					<Route path='' element={<HomeScreen />} />
					<Route path="filmDetails/:filmId" element={<FilmDetail />} />
				</Routes>
			</div>
		</div>
	);
}


export default App