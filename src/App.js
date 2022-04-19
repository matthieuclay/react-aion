import ReactFullpage from '@fullpage/react-fullpage';
import DarkMode from './components/DarkMode';
import SocialMedia from './components/SocialMedia';
import { sectionsData } from './data/sectionsData';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const divVariants = {
	visibleUp: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: { duration: 0.2 },
	},
	hiddenUp: {
		opacity: 0,
		x: 0,
		y: 100,
		transition: { duration: 0.2 },
	},
	visibleDown: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: { duration: 0.2 },
	},
	hiddenDown: {
		opacity: 0,
		x: -100,
		y: 0,
		transition: { duration: 0.2 },
	},
};

const imgVariants = {
	visibleUp: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: { duration: 0.2 },
	},
	hiddenUp: {
		opacity: 0,
		x: 0,
		y: 100,
		transition: { duration: 0.2 },
	},
	visibleDown: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: { duration: 0.2 },
	},
	hiddenDown: {
		opacity: 0,
		x: 100,
		y: 0,
		transition: { duration: 0.2 },
	},
};

const App = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	// useEffect(() => {
	// 	if (inView) {
	// 		controls.start('visible');
	// 	} else {
	// 		controls.start('hidden');
	// 	}
	// }, [controls, inView]);

	return (
		<>
			<header className='header'>
				{/* <Logo /> */}
				<h1>AION</h1>
				<DarkMode />
			</header>
			<ReactFullpage
				licenseKey={'8F15EDB4-2CFC4019-AFB2C191-710C6599'}
				fadingEffect={true}
				scrollingSpeed={1500}
				beforeLeave={(origin, destination, direction) => {
					if (direction === 'down') {
						controls.start('hiddenDown');
					} else {
						controls.start('hiddenUp');
					}
				}}
				onLeave={(origin, destination, direction) => {
					if (direction === 'down') {
						controls.start('hiddenDown');
					} else {
						controls.start('hiddenUp');
					}
				}}
				afterLoad={(origin, destination, direction) => {
					if (direction === 'down') {
						controls.start('visibleDown');
					} else {
						controls.start('visibleUp');
					}
				}}
				render={() => {
					return (
						<div id='fullPage' className='fullpage-wrapper app'>
							{sectionsData.map((section) => (
								<div
									className='section'
									key={section.id}
									sectionNumber={section.id}
									// style={{
									// 	backgroundImage: 'url(../assets/img/' + sectionNumber + '.png)',
									// }}
								>
									<motion.div
										ref={ref}
										animate={controls}
										initial='hiddenDown'
										exit='hiddenDown'
										variants={divVariants}
										className='section-text'
									>
										<h2>{section.title}</h2>
										{section.texts.map((text) => {
											if (text.includes('•')) {
												return (
													<span key={text}>
														{text}
													</span>
												);
											}
											return <p key={text}>{text}</p>;
										})}
									</motion.div>
									<motion.img
										ref={ref}
										animate={controls}
										initial='hiddenDown'
										exit='hiddenDown'
										variants={imgVariants}
										src={
											'./assets/img/' +
											section.img +
											'.png'
										}
										alt={section.title}
									/>
								</div>
							))}
							<footer className='footer section'>
								<SocialMedia />
							</footer>
						</div>
					);
				}}
			/>
		</>
	);
};

export default App;
