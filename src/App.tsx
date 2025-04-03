import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Custom colors to match exactly with the design
const colors = {
	primary: '#6C5CE7', // Brighter purple from the images
	primaryLight: '#8A7EF8',
	primaryDark: '#5849C0',
	primaryBg: '#F5F5FF', // Light purple background
	darkBg: '#13121D', // Very dark blue/black for footer
	textDark: '#1A1A2E',
	textGray: '#666685',
};

// CSS custom properties type declaration
declare module 'react' {
	interface CSSProperties {
		'--tw-hover-color'?: string;
		'--tw-hover-background-color'?: string;
		'--tw-hover-border-color'?: string;
		'--tw-focus-border-color'?: string;
	}
}

// Fade in animation variants
const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
};

// Staggered children animation
const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const TuneryLandingPage: React.FC = () => {
	const [email, setEmail] = useState('');
	const [scrollY, setScrollY] = useState(0);
	const [animatedText, setAnimatedText] = useState('open source AI');

	// Text animation cycle
	useEffect(() => {
		const texts = ['open source AI', 'open source vector db', 'your cloud provider'];
		let currentIndex = 0;

		const intervalId = setInterval(() => {
			currentIndex = (currentIndex + 1) % texts.length;
			setAnimatedText(texts[currentIndex]);
		}, 2000);

		return () => clearInterval(intervalId);
	}, []);

	// Handle scroll for parallax effects
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='font-sans'>
			{/* Navigation */}
			<nav className='bg-white py-4 px-6 md:px-12 flex items-center justify-between max-w-7xl mx-auto'>
				<div className='flex items-center'>
					<img src='/tunery_nav_logo.png' alt='tunery.ai' className='h-8' />
				</div>
				<div className='hidden md:flex space-x-8'>
					<a
						href='#solution'
						className='text-gray-800 hover:text-purple-600 transition-colors'
						style={{ color: colors.textDark, '--tw-hover-color': colors.primary }}
					>
						Solution
					</a>
					<a
						href='#product'
						className='text-gray-800 hover:text-purple-600 transition-colors'
						style={{ color: colors.textDark, '--tw-hover-color': colors.primary }}
					>
						Product
					</a>
					<a
						href='#contact'
						className='text-gray-800 hover:text-purple-600 transition-colors'
						style={{ color: colors.textDark, '--tw-hover-color': colors.primary }}
					>
						Contact
					</a>
				</div>
			</nav>

			{/* Hero Section */}
			<motion.section
				className='min-h-[80vh] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden flex items-center'
				style={{ background: colors.primaryBg }}
				initial='hidden'
				animate='visible'
				variants={staggerContainer}
			>
				<div className='max-w-7xl mx-auto w-full'>
					{/* Background Decorative Elements */}
					<div className='absolute left-0 top-0 w-full h-full'>
						<div
							className='absolute left-0 top-1/4 w-48 h-48 md:w-64 md:h-64 opacity-50 rounded-full blur-3xl'
							style={{ background: `${colors.primary}15` }}
						></div>
						<div
							className='absolute right-0 bottom-1/4 w-48 h-48 md:w-64 md:h-64 opacity-50 rounded-full blur-3xl'
							style={{ background: `${colors.primary}15` }}
						></div>
						<div
							className='absolute right-0 top-0 w-32 h-96 opacity-30 rounded-full blur-3xl'
							style={{ background: `${colors.primary}15` }}
						></div>
						<div
							className='absolute left-1/4 bottom-0 w-96 h-48 opacity-30 rounded-full blur-3xl'
							style={{ background: `${colors.primary}15` }}
						></div>
					</div>

					{/* Question Mark Decoration */}
					<motion.div
						className='absolute left-8 bottom-8 opacity-10 text-[200px] font-bold select-none'
						style={{ color: colors.primaryLight }}
						animate={{
							y: [0, -10, 0],
							rotate: [-5, 0, -5],
						}}
						transition={{
							duration: 6,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					>
						?
					</motion.div>

					<div className='mx-auto text-center relative z-10'>
						<motion.h1
							className='text-6xl md:text-8xl font-bold mb-12 leading-tight'
							variants={fadeIn}
						>
							Build enterprise applications <br />
							with{' '}
							<motion.span
								style={{ color: colors.primary }}
								animate={{ opacity: [0.5, 1] }}
								transition={{
									duration: 0.5,
									repeat: Infinity,
									repeatType: 'reverse',
								}}
							>
								{animatedText}
							</motion.span>
						</motion.h1>

						<motion.p
							className='text-2xl md:text-3xl mb-20 text-gray-700 max-w-4xl mx-auto'
							variants={fadeIn}
						>
							Fast experimentation, seamless deployment, continuous improvement
						</motion.p>

						<motion.div
							className='flex flex-col sm:flex-row justify-center gap-8'
							variants={fadeIn}
						>
							<button
								className='text-white px-12 py-5 rounded-md transition-all text-xl hover:scale-105'
								style={{
									backgroundColor: colors.primary,
									'--tw-hover-background-color': colors.primaryDark,
								}}
							>
								Start a free trial
							</button>
							<button
								className='border px-12 py-5 rounded-md transition-all text-xl hover:scale-105'
								style={{
									borderColor: colors.primary,
									color: colors.primary,
									'--tw-hover-background-color': `${colors.primary}10`,
								}}
							>
								Contact Us
							</button>
						</motion.div>
					</div>
				</div>
			</motion.section>

			{/* Accelerate AI Section */}
			<motion.section
				className='text-white py-16 mx-6 md:mx-12 rounded-3xl'
				style={{
					backgroundColor: colors.darkBg,
					boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.5)',
				}}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				variants={fadeIn}
			>
				<div className='max-w-7xl mx-auto px-6 md:px-24 lg:px-32'>
					<div className='flex flex-col md:flex-row items-start gap-16'>
						<div className='md:w-1/2'>
							<h2 className='text-5xl md:text-6xl font-bold mb-4 tracking-tight'>
								Accelerate AI <br />
								with <span style={{ color: colors.primaryLight }}>tunery</span>
							</h2>
						</div>
						<div className='md:w-1/2'>
							<p className='text-gray-300 text-xl leading-relaxed max-w-2xl'>
								tunery's comprehensive suite of tools to evaluate, enhance and deploy open source AI
								models, enables you to exploit AI while retaining control on your data
							</p>
						</div>
					</div>
				</div>
			</motion.section>

			{/* For App Developers Section */}
			<motion.section
				className='py-16 px-6 md:px-12'
				style={{ backgroundColor: 'white' }}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				variants={staggerContainer}
			>
				<div className='max-w-7xl mx-auto'>
					<motion.h2
						className='text-5xl md:text-6xl font-bold mb-20 flex items-baseline gap-3 justify-center'
						variants={fadeIn}
					>
						For <span style={{ color: colors.primary }}>app developers</span>
					</motion.h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
						{/* Feature 1 */}
						<motion.div variants={fadeIn} className='text-center'>
							<div
								className='text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto'
								style={{ backgroundColor: colors.primary }}
							>
								<img src='/accelerated_dev.png' alt='Accelerate Dev' className='w-8 h-8' />
							</div>
							<h3 className='text-3xl font-semibold mb-4'>Accelerate Dev</h3>
							<p className='text-gray-600 text-lg'>
								evaluation, synthetic data, model fine-tuning, built in
							</p>
						</motion.div>

						{/* Feature 2 */}
						<motion.div variants={fadeIn} className='text-center'>
							<div
								className='text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto'
								style={{ backgroundColor: colors.primary }}
							>
								<img src='/model_agnostic_apps.png' alt='Model Agnostic Apps' className='w-8 h-8' />
							</div>
							<h3 className='text-3xl font-semibold mb-4'>Model agnostic apps</h3>
							<p className='text-gray-600 text-lg'>
								Avoid lock-in, build and test apps across multiple models.
							</p>
						</motion.div>

						{/* Feature 3 */}
						<motion.div variants={fadeIn} className='text-center'>
							<div
								className='text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto'
								style={{ backgroundColor: colors.primary }}
							>
								<img src='/deployments.png' alt='Deployments' className='w-8 h-8' />
							</div>
							<h3 className='text-3xl font-semibold mb-4'>Flexible Deployments:</h3>
							<p className='text-gray-600 text-lg'>
								deploy to VPC, private, even air-gapped environments
							</p>
						</motion.div>
					</div>
				</div>
			</motion.section>

			{/* For Enterprises Section */}
			<motion.section
				className='py-16 px-6 md:px-12'
				style={{ backgroundColor: colors.primaryBg }}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				variants={staggerContainer}
			>
				<div className='max-w-7xl mx-auto'>
					<motion.h2
						className='text-5xl md:text-6xl font-bold mb-20 flex items-baseline gap-3 justify-center'
						variants={fadeIn}
					>
						For <span style={{ color: colors.primary }}>Enterprises</span>
					</motion.h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
						{/* Feature 1 */}
						<motion.div variants={fadeIn} className='text-center'>
							<div
								className='text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto'
								style={{ backgroundColor: colors.primary }}
							>
								<img src='/experimental_freely.png' alt='Experiment Freely' className='w-8 h-8' />
							</div>
							<h3 className='text-3xl font-semibold mb-4'>Experiment Freely</h3>
							<p className='text-gray-600 text-lg'>
								Test open-source models in dedicated deployments—no boundaries, just innovation.
							</p>
						</motion.div>

						{/* Feature 2 */}
						<motion.div variants={fadeIn} className='text-center'>
							<div
								className='text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto'
								style={{ backgroundColor: colors.primary }}
							>
								<img src='/fast_start.png' alt='Fast Start' className='w-8 h-8' />
							</div>
							<h3 className='text-3xl font-semibold mb-4'>Fast start</h3>
							<p className='text-gray-600 text-lg'>
								towards AI driven automation with agent workbench
							</p>
						</motion.div>

						{/* Feature 3 */}
						<motion.div variants={fadeIn} className='text-center'>
							<div
								className='text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto'
								style={{ backgroundColor: colors.primary }}
							>
								<img src='/deployments.png' alt='Hybrid Deployments' className='w-8 h-8' />
							</div>
							<h3 className='text-3xl font-semibold mb-4'>Hybrid deployments</h3>
							<p className='text-gray-600 text-lg'>deploy across multicloud, on-premise</p>
						</motion.div>
					</div>
				</div>
			</motion.section>

			{/* Apps Section */}
			<motion.section
				className='py-16 px-6 md:px-12'
				style={{ backgroundColor: colors.primaryBg }}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				variants={fadeIn}
			>
				<div className='max-w-7xl mx-auto'>
					<div className='bg-white p-12 rounded-2xl shadow-lg'>
						{/* Custom Apps Grid */}
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12'>
							{[1, 2, 3, 4].map(i => (
								<motion.div
									key={i}
									className='p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow flex flex-col items-center'
									whileHover={{ scale: 1.02 }}
								>
									<div className='bg-violet-600 text-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
											<path d='M9 3v18'></path>
											<path d='M15 3v18'></path>
										</svg>
									</div>
									<p className='text-gray-700 font-medium'>Custom App</p>
								</motion.div>
							))}
						</div>

						{/* Model Logos */}
						<div className='flex flex-wrap justify-center items-center gap-8 mb-12'>
							<motion.img
								src='/google.svg'
								alt='Google'
								className='h-8 w-auto'
								whileHover={{ scale: 1.05 }}
								style={{ filter: 'grayscale(100%)' }}
							/>
							<motion.img
								src='/meta.svg'
								alt='Meta'
								className='h-8 w-auto'
								whileHover={{ scale: 1.05 }}
								style={{ filter: 'grayscale(100%)' }}
							/>
							<motion.img
								src='/mistral.svg'
								alt='Mistral'
								className='h-8 w-auto'
								whileHover={{ scale: 1.05 }}
								style={{ filter: 'grayscale(100%)' }}
							/>
							<motion.img
								src='/deepseek.svg'
								alt='Deepseek'
								className='h-8 w-auto'
								whileHover={{ scale: 1.05 }}
								style={{ filter: 'grayscale(100%)' }}
							/>
						</div>

						{/* Stack Info */}
						<div className='space-y-4'>
							<motion.div
								className='border border-gray-100 rounded-xl p-4 text-center bg-gray-50 hover:border-violet-200 transition-all'
								whileHover={{ scale: 1.01 }}
							>
								<span className='text-gray-700 text-lg'>Tunery AI Studio</span>
							</motion.div>
							<motion.div
								className='border border-gray-100 rounded-xl p-4 text-center bg-gray-50 hover:border-violet-200 transition-all'
								whileHover={{ scale: 1.01 }}
							>
								<span className='text-gray-700 text-lg'>Any-cloud / Multi-cloud</span>
							</motion.div>
						</div>
					</div>
				</div>
			</motion.section>

			{/* Contact Section */}
			<section className='px-6 md:px-12 py-16'>
				<div
					className='text-white py-24 px-6 md:px-12 rounded-3xl mx-auto max-w-7xl'
					id='contact'
					style={{ backgroundColor: colors.darkBg }}
				>
					<motion.div
						className='max-w-7xl mx-auto text-center'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className='text-4xl font-bold mb-4'>Contact Us</h2>
						<p className='mb-12 text-gray-400'>
							Stay up to date with the industry trends.
							<br />
							Don't worry we won't spam.
						</p>

						<div className='flex flex-col md:flex-row gap-4 max-w-xl mx-auto'>
							<input
								type='email'
								placeholder='Enter your email'
								className='px-6 py-4 rounded-md bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:border-purple-500 flex-grow text-base'
								style={{ '--tw-focus-border-color': colors.primary }}
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<motion.button
								className='text-white px-8 py-4 rounded-md text-base font-medium'
								style={{
									backgroundColor: colors.primary,
									'--tw-hover-background-color': colors.primaryDark,
								}}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Submit
							</motion.button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<footer className='py-8 px-6 md:px-12 bg-white'>
				<div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
					<div className='mb-4 md:mb-0'>
						<a
							href='mailto:info@tunery.ai'
							className='text-gray-600 transition-colors'
							style={{ '--tw-hover-color': colors.primary }}
						>
							info@tunery.ai
						</a>
					</div>

					<div className='flex items-center'>
						<img src='/tunery_nav_logo.png' alt='tunery.ai' className='h-8' />
					</div>

					<div className='mt-4 md:mt-0 text-gray-500 text-sm'>
						{new Date().getFullYear()} tunery.ai. All Rights Reserved.
					</div>
				</div>
			</footer>
		</div>
	);
};

export default TuneryLandingPage;
