import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { PAGE_TITLE } from "../../../constant";
import Title from "../../components/generic/Title";
import PostForm from "../../components/PostForm";
import { getSelectedPost } from "../../redux/feature/postSlice";

export default function edit() {
	const router = useRouter();
	const { id } = router.query;

	const post = useSelector(getSelectedPost);

	const [formData, setFormData] = useState({
		title: "",
		body: "",
	});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!post) {
			router.push("/");
		}

		if (post) {
			setFormData({
				title: post.title,
				body: post.body,
			});
		}
	}, [post]);

	const handleFormFieldChange = (event) => {
		const fieldName = event.target.name;
		const fieldValue = event.target.value;

		setFormData({
			...formData,
			[fieldName]: fieldValue,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		setLoading(true);
		try {
			await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			setLoading(false);
			router.push(`/posts/${id}`);
		} catch (error) {
			setLoading(false);
			alert("something went wrong");
		}
	};

	return (
		<div>
			<Head>
				<title>{PAGE_TITLE.EDIT_PAGE}</title>
			</Head>

			<Title>{PAGE_TITLE.EDIT_PAGE}</Title>

			<PostForm
				loading={loading}
				handleSubmit={handleSubmit}
				formData={formData}
				handleFormFieldChange={handleFormFieldChange}
			/>
		</div>
	);
}
