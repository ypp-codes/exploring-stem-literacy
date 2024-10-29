import CourseLayout from "@/components/CourseLayout"
import React from "react"

interface LayoutProps {
	children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> =
	(props: LayoutProps) => {
		return <CourseLayout course="rust">
			{props.children}
		</CourseLayout>
	}

export default Layout