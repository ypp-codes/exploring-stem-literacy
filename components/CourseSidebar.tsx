"use client"
import { PathData } from "@/app/courses/python/layout"
import { usePathname } from "next/navigation"
import Link from "next/link"
import React from "react"
import clsx from "clsx"

interface CourseSidebarProps {
	children?: React.ReactNode
	paths?: PathData[]
	course: "python" | "rust" | "data-science"
	className?: string
}

const CourseSidebar: React.FC<CourseSidebarProps> =
	({ paths, course, className }: CourseSidebarProps) => {
		const pathname = usePathname()
		return <>
			<nav className={clsx('text-base lg:text-sm', className)}>
				<ul
					role="list"
					className="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200"
				>
					{paths.map((path) => (
						<li key={path.slug} className="relative capitalize">
							<Link
								href={`/courses/${course}/${path.slug}`}
								className={clsx(
									'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full hover:before:opacity-100 before:transition',
									`/courses/${course}/${path.slug}` === pathname
										|| path.slug === "" && pathname == `/courses/${course}`
										? 'font-semibold text-primary before:bg-primary'
										: 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block',
								)}
							>
								{path.title}
							</Link>
						</li>
					))
					}
				</ul>
			</nav>
		</>
	}

export default CourseSidebar