import Link from "next/link";
import { useDispatch } from "react-redux";

import { BUTTONS } from "../../constant";
import { updateSelectedPost } from "../redux/feature/postSlice";
import Button from "./generic/Button";
import Title from "./generic/Title";

export default function PostList({ post }) {
	const { title, body, id } = post;
	const { DETAILS, EDIT } = BUTTONS;
	const dispatch = useDispatch();

	const editButtonClickHandler = () => {
		dispatch(updateSelectedPost(post));
	};

	return (
		<div className="p-10 m-4 bg-blue-100 rounded">
			<Title>{title}</Title>
			<p>{body}</p>

			<Link href={`/posts/${id}`}>
				<a>
					<Button>{DETAILS}</Button>
				</a>
			</Link>

			<Link href={`/posts/${id}/edit`}>
				<a>
					<Button onClick={editButtonClickHandler}>{EDIT}</Button>
				</a>
			</Link>
		</div>
	);
}
