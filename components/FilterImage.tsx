import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface FilterImageProps {
	src: string | StaticImageData;
	width?: number;
	height?: number;
	className?: string;
	bgClasses?: string;
	alt?: string;
}

const FilterImage: React.FC<FilterImageProps> = ({ src, width, height, className = "grayscale bg-transparent", bgClasses = "", alt = "" }) => {
	return (
		<div className={className}>
			<Image
				alt={alt}
				width={width}
				height={height}
				src={src}
				className={className}
			/>
			<div className={bgClasses} />
			{/* <div className="absolute h-full w-full inset-0 bg-accent object-cover opacity-30 mix-blend-multiply pointer-events-none"></div> */}
		</div>
	)
};

export default FilterImage;