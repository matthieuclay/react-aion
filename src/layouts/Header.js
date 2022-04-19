import React from 'react';
import DarkMode from '../components/DarkMode';
import Logo from '../components/Logo';

const Header = () => {
	return (
		<header className='header'>
			{/* <Logo /> */}
			<h1>AION</h1>
			<DarkMode />
		</header>
	);
};

export default Header;
