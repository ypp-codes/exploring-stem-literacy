import Link from "next/link";
import React from "react";

interface CourseCardProps {
	children?: React.ReactNode;
	name?: string;
	icon?: React.ElementType;
	href?: string;
}

const CourseCard: React.FC<CourseCardProps> = (props: CourseCardProps) => {
	return (
		<Link href={props.href || "#"} className="rounded-lg" passHref>
			<div className="text-center hover:cursor-pointer border border-slate-50 hover:border hover:border-slate-200 bg-slate-50 rounded-lg py-2 transition">
				<h2 className="m-0 text-lg flex items-center justify-center gap-2 px-2">
					{props.icon && <props.icon className="text-2xl" />}
					{props.name}
				</h2>
				{props.children}
			</div>
		</Link>
	);
}

export default CourseCard;
