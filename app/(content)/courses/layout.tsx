import React from "react"

export default function CourseLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className="bg-white text-black">
			{children}
		</section>
	);
}