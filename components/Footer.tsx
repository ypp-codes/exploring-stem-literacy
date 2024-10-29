import React from "react"
import Image from "next/image"
import Hexagons from "@/public/hexagons.svg"

interface FooterProps {
	children?: React.ReactNode
}

const Footer: React.FC<FooterProps> =
	(props: FooterProps) => {
		return <footer className="text-white py-12 text-center relative overflow-hidden">
			<div className="mt-6 z-10 space-x-4">
				&copy; The Young People's Project {new Date().getFullYear()}.
			</div>
			<div className="absolute bottom-0 -z-10 w-full object-cover overflow-hidden bg-slate-900">
				<Image
					alt=""
					src={Hexagons} // generated with https://www.fffuel.co/gggyrate/
					className="w-screen"
				/>
			</div>
		</footer>
	}

export default Footer