import { AnimationProps, MotionProps, motion } from 'framer-motion'
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ScrollyImageProps {
	src: string | StaticImageData;
	width?: number | `${number}` | undefined;
	height?: number | `${number}` | undefined;
	className?: string;
	filters?: string;
	transition?: AnimationProps["transition"];
	initial?: AnimationProps["initial"];
	animate?: AnimationProps["animate"];
	whileInView?: MotionProps["whileInView"];
	viewport?: MotionProps["viewport"];
	alt?: string;
}

const ScrollyImage: React.FC<ScrollyImageProps> = ({
	src,
	alt = "",
	width,
	height,
	filters = "",
	className = "",
	transition = { duration: 0.6, ease: "easeOut" },
	initial = { opacity: 0, scale: 0.95 },
	whileInView = { opacity: 1, scale: 1 },
	viewport = { once: true, amount: 0.5 },
}: ScrollyImageProps) => {
	const rotation = className.split(" ").filter(c => c.match(/-?rotate-.*/)).join(" ")
	const notRotation = className.split(" ").filter(c => !c.match(/-?rotate-.*/)).join(" ")
	return (
		<motion.div
			initial={initial}
			whileInView={whileInView}
			transition={transition}
			viewport={viewport}
			className={`relative min-w-[380px] ${notRotation}`}
		>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={`w-full h-auto rounded-xl ${rotation} filter ${filters}`}
				priority
			/>
		</motion.div>
	);
};

export default ScrollyImage;