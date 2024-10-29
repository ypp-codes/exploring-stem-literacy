"use client"

import LogoText from "./LogoText"
import { React, useState, useEffect } from "react";
import Link from "next/link";
import Hexagons from "@/public/hexagons.svg"
import Image from "next/image"
import { motion } from "framer-motion"
import { Bars3Icon, MinusSmallIcon, PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
	ArrowPathIcon,
	CheckIcon,
	CloudArrowUpIcon,
	Cog6ToothIcon,
	FingerPrintIcon,
	LockClosedIcon,
	ServerIcon,
} from '@heroicons/react/20/solid'
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel
} from '@headlessui/react'

import { usePathname } from 'next/navigation'

const navigation = [
	{ name: 'About', href: '/' },
	{ name: 'CS For All', href: '/courses/cs-for-all' },
	{ name: 'Python', href: '/courses/python' },
	{ name: 'Rust', href: '/courses/rust' },
	{ name: 'Data Science', href: '/courses/data-science' },
]

const Header: React.FC<HeaderProps> = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const isHomePage = usePathname() === '/';


	return <>
		<header
			className={`${isHomePage ? "absolute inset-x-0 top-0 z-50 bg-gradient-to-b from-slate-950 to-transparen" : "relative"}`}
		>
			<nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<LogoText />
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item, index) => {
						if (item.name !== "spacer") return (
							<a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
								{item.name}
							</a>
						)
						return <span className="select-none text-slate-400" key={`${item.name} + ${index}`}>|</span>
					})}
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				transition
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-50" />
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-900 bg-opacity-80 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<LogoText />
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-slate-200"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-300/70">
							<div className="space-y-2 py-6">
								{navigation.map((item) => {
									if (item.name !== "spacer")
										return (
											<Link
												key={item.name}
												href={item.href}
												className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-slate-700"
											>
												{item.name}
											</Link>
										)
								})}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
			{
				!isHomePage && (
					<div className="absolute -z-10 inset-0 w-full object-cover overflow-hidden bg-slate-900">
						<Image
							alt=""
							src={Hexagons} // generated with https://www.fffuel.co/gggyrate/
							className="w-screen"
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900" />
					</div>
				)
			}
		</header>
	</>
}

export default Header