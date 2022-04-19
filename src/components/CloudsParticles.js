import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const CloudsParticles = () => {
	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};

	const options = {
		fullScreen: {
			enable: true,
			zIndex: 1,
		},
		particles: {
			number: {
				value: 100,
				density: {
					enable: true,
					value_area: 1000,
				},
			},
			color: {
				value: '#ffffff',
			},
			shape: {
				type: 'circle',
			},
			opacity: {
				value: 1,
				random: true,
			},
			size: {
				value: 3,
				random: true,
				anim: {
					enable: true,
					speed: 3,
					size_min: 0.1,
					sync: false,
				},
			},
			move: {
				enable: true,
				speed: 1,
				direction: 'none',
				random: false,
				straight: false,
				out_mode: 'out',
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			events: {
				onhover: {
					enable: true,
					mode: 'push',
					parallax: {
						enable: true,
						smooth: 20,
						force: 40,
					},
				},
				resize: true,
			},
			modes: {
				repulse: {
					distance: 200,
				},
			},
		},
		retina_detect: true,
	};

	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			loaded={particlesLoaded}
			options={options}
		/>
	);
};

export default CloudsParticles;
