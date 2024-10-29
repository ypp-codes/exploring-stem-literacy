import MdxLayout from "@/components/MdxLayout";
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';

export async function getStaticParams() {
	const response = await fetch(`https://api.github.com/repos/ypp-codes/exploring-stem-literacy/contents/courses/data-science`);
	const files = await response.json();
	return files.map((file) => ({
		lesson: file.name.replace(/\.md$/, ''),
	}));
}

export default async function Page({ params }) {
	const { lesson } = await params
	const response = await fetch(`https://raw.githubusercontent.com/ypp-codes/exploring-stem-literacy/main/courses/data-science/${lesson}.md`);
	const markdown = await response.text()
	const { data: frontmatter, content } = matter(markdown);
	return <MdxLayout>
		<MDXRemote source={content} />
	</MdxLayout>
}