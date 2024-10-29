import CourseSidebar from "@/components/CourseSidebar";
import LoadingList from "@/components/LoadingList";
import React, { Suspense } from "react"

export interface PathData { slug: string, title: string }

interface CourseLayoutProps {
	children: React.ReactNode;
	course: "python" | "rust" | "data-science" | "cs-for-all";
}

const CourseLayout: React.FC<CourseLayoutProps> = async ({ children, course }: CourseLayoutProps) => {
	const response = await fetch(`https://api.github.com/repos/ypp-codes/exploring-stem-literacy/contents/courses/${course}`);
	const files = await response.json();

	const paths: PathData[] = files.status !== "404" ? files.map((file) => ({
		title: file.name.replace(/\.md$/, '').replace(/-/, ' '),
		slug: file.name.replace(/\.md$/, '')
	})) : [];
	paths.unshift({ title: "Course Home", slug: "" });

	return <div className="flex w-full flex-col bg-white">
		<div className="relative text-slate-700 flex max-w-8xl flex-auto justify-left sm:px-2 lg:px-8 xl:px-12">
			<div className="hidden lg:relative lg:block lg:flex-none">
				<div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50" />
				<div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800" />
				<div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
					<Suspense fallback={<LoadingList />}>
						<CourseSidebar course={course} paths={paths} />
					</Suspense>
				</div>
			</div>
			{children}
		</div>
	</div>


}

export default CourseLayout