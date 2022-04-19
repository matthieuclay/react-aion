import React, { useEffect, useState } from 'react';

const ScrollDown = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		window.addEventListener('scroll', listenToScroll);
		return () => window.removeEventListener('scroll', listenToScroll);
	}, []);

	const listenToScroll = () => {
		let heightToHideFrom = 10;
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		if (winScroll > heightToHideFrom) {
			isVisible && setIsVisible(false); // to limit setting state only the first time
		} else {
			setIsVisible(true);
		}
	};

	return (
		<div className={isVisible ? 'scrolldown' : 'scrolldown hidden'}>
			<span>scroll down</span>
		</div>
	);
};

export default ScrollDown;
