import './App.css';
import './pages/Pages.css';
import Navbar from './components/Navbar';
import { FrictionLoss, SmoothBore, CreateScene } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';
import Scene2 from './delete/create/Scene2';

function App() {
	return (
		<>
			{/* <FrictionLoss /> */}
			{/* <SmoothBore /> */}
			<CreateScene />
		</>
	);
}

export default App;
