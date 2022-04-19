import React, { useEffect, useState } from 'react';
import Section from '../components/Section';
import { sectionsData } from '../data/sectionsData';

const Home = () => {
	// const [offset, setOffset] = useState(0);
	// const [height, setHeight] = useState();

	// useEffect(() => {
	// 	const sections = document.querySelector('.sections');
	// 	const sectionLength = document.querySelectorAll('.section').length;

	// 	const viewHeight = document.documentElement.clientHeight;

	// 	let scrollBefore = 0;

	// 	document.addEventListener('scroll', function (e) {
	// 		const scrolled = window.scrollY;

	// 		if (scrollBefore > scrolled) {
	// 			console.log('ScrollUP');
	// 			scrollBefore = scrolled;
	// 			//Desired action
	// 		} else {
	// 			scrollBefore = scrolled;
	// 			console.log('ScrollDOWN');
	// 			//Desired action
	// 		}
	// 	});

	// 	// document.addEventListener('mousewheel', (e) => {
	// 	// 	console.log(e.wheelDelta);
	// 	// 	if (e.wheelDelta > 0) {
	// 	// 		// SCROLL UP
	// 	// 		console.log(offset);
	// 	// 		if (offset === 0) {
	// 	// 			return;
	// 	// 		} else {
	// 	// 			setOffset(offset - 1);
	// 	// 		}
	// 	// 	} else {
	// 	// 		//SCROP DOWN
	// 	// 		console.log(offset);
	// 	// 		if (offset === sectionLength) {
	// 	// 			return;
	// 	// 		} else {
	// 	// 			setOffset(offset + 1);
	// 	// 		}
	// 	// 	}
	// 	// });
	// }, [offset]);

	// useEffect(() => {
	// 	const onScroll = () => setOffset(window.pageYOffset);
	// 	// clean up code
	// 	window.removeEventListener('scroll', onScroll);
	// 	window.addEventListener('scroll', onScroll, { passive: true });
	// 	return () => window.removeEventListener('scroll', onScroll);
	// }, []);

	// console.log(offset);

	return (
		<div className='home'>
			<div className='sections'>
				{sectionsData.map((section) => (
					<Section key={section.id} sectionNumber={section.id} />
				))}

				{/* <Section sectionNumber={offset} /> */}
			</div>
		</div>
	);
};

export default Home;
