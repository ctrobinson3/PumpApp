import './App.css';
import './pages/Pages.css';
import Navbar from './components/Navbar';
import { FrictionLoss, SmoothBore, Scene } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';
import Scene2 from './delete/create/Scene2';

function App() {
	return (
		<>
			{/* <FrictionLoss /> */}
			{/* <SmoothBore /> */}

			<Scene />
			{/* <Scene2 /> */}
		</>
	);
}

export default App;
