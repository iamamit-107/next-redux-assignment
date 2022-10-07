import Head from "next/head";
import Title from "../../components/generic/Title";

export default function PostDetails({ post }) {
	const { title, body } = post;

	const renderDetails = () => {
		return (
			<div>
				<Title>{title}</Title>
				<p>{body}</p>
			</div>
		);
	};

	return (
		<>
			<Head>
				<title>{post.title}</title>
			</Head>

			{renderDetails()}
		</>
	);
}

export async function getStaticPaths() {
	const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
	const posts = await result.json();

	const paths = posts.map((post) => ({
		params: { id: post.id.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { id } = params;

	const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
	const post = await result.json();

	return {
		props: { post },
	};
}
