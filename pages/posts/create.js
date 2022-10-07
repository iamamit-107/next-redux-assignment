import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import { PAGE_TITLE } from "../../constant";
import Title from "../components/generic/Title";
import PostForm from "../components/PostForm";

const initialFormData = {
	title: "",
	body: "",
};

export default function CreatePost() {
	const router = useRouter();
	const [formData, setFormData] = useState(initialFormData);
	const [loading, setLoading] = useState(false);

	const handleFormFieldChange = (event) => {
		const fieldName = event.target.name;
		const fieldValue = event.target.value;

		setFormData({
			...formData,
			[fieldName]: fieldValue,
		});
	};

	const resetFormData = () => {
		setFormData(initialFormData);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		setLoading(true);
		try {
			await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			resetFormData();
			setLoading(false);
			router.push("/");
		} catch (error) {
			setLoading(false);
			alert("something went wrong");
		}
	};

	return (
		<div>
			<Head>
				<title>{PAGE_TITLE.CREATE_PAGE}</title>
			</Head>

			<Title>{PAGE_TITLE.CREATE_PAGE}</Title>

			<PostForm
				loading={loading}
				handleSubmit={handleSubmit}
				formData={formData}
				handleFormFieldChange={handleFormFieldChange}
			/>
		</div>
	);
}
