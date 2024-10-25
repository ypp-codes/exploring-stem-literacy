"use client";
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import YPPLogo from "@/public/YPP-Logo-white.webp";
import Image from 'next/image';

const LogoText = () => {
	const { scrollY } = useScroll();
	// const [scrolled, setScrolled] = useState(false);
	const [hasAnimated, setHasAnimated] = useState(false);
	const initDelay = 1.5

	// useEffect(() => {
	// 	return scrollY.onChange((latest) => {
	// 		if (latest > 0) {
	// 			setScrolled(true);
	// 		} else {
	// 			setScrolled(false);
	// 		}
	// 	});
	// }, [scrollY]);

	return (
		<div className="flex space-x-5 w-fit items-center font-display text-xl font-semibold">
				<Image
					alt="YPP logo"
					src={YPPLogo}
					height={60}
					className=""
				/>
				<div>Exploring STEM Literacy</div>
		</div>
	);
};

			// {/* Container for "Exploring" with fixed width and overflow-hidden */}
			// <div className="relative inline-block w-fit overflow-hidden">
			// 	<motion.span
			// 		initial={{ y: 0 }}
			// 		// animate={!scrolled ? { y: 100 } : { y: 0 }}
			// 		animate={{ y: 100 }}
			// 		transition={{
			// 			delay: !hasAnimated ? initDelay : 0, // Delay only on first run
			// 			duration: 0.5,
			// 			repeat: Infinity,
			// 			repeatDelay: 3,
			// 			repeatType: "reverse",
			// 			ease: "easeInOut",
			// 		}}
			// 		onAnimationComplete={() => setHasAnimated(true)} // Mark first animation as complete
			// 		className="inline-block"
			// 	>
			// 		Exploring
			// 	</motion.span>
			// </div>

			// {/* Static "STEM" word */}
			// <div className="relative inline-block w-fit overflow-hidden">
			// 	<motion.div
			// 		initial={{ y: 0 }}
			// 		// animate={!scrolled ? { y: 100 } : { y: 0 }}
			// 		animate={{ y: 100 }}
			// 		transition={{
			// 			delay: !hasAnimated ? initDelay : 0, // Delay only on first run
			// 			duration: 0.5,
			// 			repeat: Infinity,
			// 			repeatDelay: 3,
			// 			repeatType: "reverse",
			// 			ease: "easeInOut",
			// 		}}
			// 		onAnimationComplete={() => setHasAnimated(true)}
			// 		className="inline-block"
			// 	>
			// 		<span className="inline-block w-fit">ST</span>
			// 	</motion.div>
			// 	<motion.div
			// 		initial={{ y: 0 }}
			// 		// animate={!scrolled ? { y: -100 } : { y: 0 }}
			// 		animate={{ y: -100 }}
			// 		transition={{
			// 			delay: !hasAnimated ? initDelay : 0, // Delay only on first run
			// 			repeat: Infinity,
			// 			repeatDelay: 3,
			// 			repeatType: "reverse",
			// 			duration: 0.5,
			// 			ease: "easeInOut",
			// 		}}
			// 		onAnimationComplete={() => setHasAnimated(true)}
			// 		className="inline-block"
			// 	>
			// 		<span className="inline-block w-fit">EM</span>
			// 	</motion.div>
			// </div>

			// {/* Container for "Literacy" with fixed width and overflow-hidden */}
			// <div className="relative inline-block w-fit overflow-hidden">
			// 	<motion.span
			// 		initial={{ y: 0 }}
			// 		// animate={!scrolled ? { y: -100 } : { y: 0 }}
			// 		animate={{ y: -100 }}
			// 		transition={{
			// 			delay: !hasAnimated ? initDelay : 0, // Delay only on first run
			// 			duration: 0.5,
			// 			repeat: Infinity,
			// 			repeatType: "reverse",
			// 			repeatDelay: 3,
			// 			ease: "easeInOut",
			// 		}}
			// 		onAnimationComplete={() => setHasAnimated(true)}
			// 		className="inline-block"
			// 	>
			// 		Literacy
			// 	</motion.span>
			// </div>

			// {/* YPP Logo sliding in when scrolled */}
			// <motion.div
			// 	initial={{ y: -200, x: 70, opacity: 0 }} // Start off-screen above
			// 	// animate={!scrolled ? { y: -10, opacity: 1 } : { y: -200, opacity: 0 }} // Slide in when scrolled
			// 	animate={{ y: -10, opacity: 1 }} // Slide in when scrolled
			// 	transition={{
			// 		delay: !hasAnimated ? initDelay : 0, // Delay only on first run
			// 		duration: 0.5,
			// 		repeat: Infinity,
			// 		repeatType: "reverse",
			// 		repeatDelay: 3,
			// 		ease: "easeInOut",
			// 	}}
			// 	onAnimationComplete={() => setHasAnimated(true)}
			// 	className="w-fit absolute text-center"
			// >
				// <Image
				// 	alt="YPP logo"
				// 	src={YPPLogo}
				// 	height={60}
				// 	className="h-1/2"
				// />
			// </motion.div>

export default LogoText;
