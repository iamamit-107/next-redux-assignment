import Head from "next/head";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { BUTTONS, PAGE_TITLE } from "../constant";
import Button from "./components/generic/Button";
import PostList from "./components/PostList";
import { setAllPosts } from "./redux/feature/postSlice";

export default function Home({ posts }) {
	const dispatch = useDispatch();

	dispatch(setAllPosts(posts));

	const renderPostList = () => {
		return posts.map((post) => <PostList key={post.id} post={post} />);
	};

	const renderCreateButton = () => {
		return (
			<Link href="/posts/create">
				<a className="bg-indigo-500 hover:bg-indigo-600 text-white text-medium font-medium rounded-md mx-1 py-2 px-3 mb-3">
					{BUTTONS.CREATE}
				</a>
			</Link>
		);
	};

	return (
		<div>
			<Head>
				<title>{PAGE_TITLE.ALL_POST}</title>
			</Head>
			{renderCreateButton()}
			{renderPostList()}
		</div>
	);
}

export async function getStaticProps(context) {
	const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
	const posts = await result.json();

	return {
		props: { posts },
	};
}
