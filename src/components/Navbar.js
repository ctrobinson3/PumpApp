import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<nav className='navbar-nav'>
				<ul className='navbar-item'>
					<li>
						<NavLink exact to='/' className='nav-links'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/friction-loss' className='nav-links'>
							Friction Loss
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
