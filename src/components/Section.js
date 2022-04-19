import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../layouts/Header';
import { sectionsData } from '../data/sectionsData';

const divVariants = {
	visibleUp: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: { delay: 0.2, duration: 0.8 },
	},
	hiddenUp: {
		opacity: 0,
		x: 0,
		y: 100,
		transition: { delay: 0.2, duration: 0.8 },
	},
	visibleDown: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: { delay: 0.2, duration: 0.8 },
	},
	hiddenDown: {
		opacity: 0,
		x: 100,
		y: 0,
		transition: { delay: 0.2, duration: 0.8 },
	},
};

const imgVariants = {
	visibleUp: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: { delay: 0.2, duration: 0.8 },
	},
	hiddenUp: {
		opacity: 0,
		x: 0,
		y: 100,
		transition: { delay: 0.2, duration: 0.8 },
	},
	visibleDown: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: { delay: 0.2, duration: 0.8 },
	},
	hiddenDown: {
		opacity: 0,
		x: 100,
		y: 0,
		transition: { delay: 0.2, duration: 0.8 },
	},
};

const Section = ({ sectionNumber }) => {
	const [currentSection] = useState(sectionsData[sectionNumber]);
	const controls = useAnimation();
	const [ref, inView] = useInView();
	const [isScrollingDown, setIsScrollingDown] = useState(true);
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [controls, inView]);

	useEffect(() => {
		const onScroll = (e) => {
			setScrollTop(e.target.documentElement.scrollTop);

			if (e.target.documentElement.scrollTop > scrollTop) {
				//SCROP DOWN
				setIsScrollingDown(true);
				controls.set(imgVariants);
			} else {
				// SCROLL UP
				setIsScrollingDown(false);
				controls.set(imgVariants);
			}
		};
		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollTop]);

	return (
		<div
			className='section'
			// style={{
			// 	backgroundImage: 'url(../assets/img/' + sectionNumber + '.png)',
			// }}
		>
			<motion.div
				ref={ref}
				animate={controls}
				initial='hidden'
				exit='hidden'
				variants={divVariants}
				className='section-text'
			>
				<h2>{currentSection.title}</h2>
				{currentSection.texts.map((text) => {
					if (text.includes('•')) {
						return <span key={text}>{text}</span>;
					}
					return <p key={text}>{text}</p>;
				})}
			</motion.div>
			<motion.img
				ref={ref}
				animate={controls}
				initial='hidden'
				exit='hidden'
				variants={imgVariants}
				src={'./assets/img/' + currentSection.img + '.png'}
				alt={currentSection.title}
			/>
		</div>
	);
};

export default Section;
