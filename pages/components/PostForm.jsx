import { BUTTONS } from "../../constant";
import Button from "./generic/Button";

export default function PostForm(props) {
	const { handleSubmit, formData, handleFormFieldChange, loading } = props;

	const isButtonDisbale = () => {
		for (const key in formData) {
			if (formData[key] === "") return true;
		}

		return false;
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				class="shadow form-textarea mt-1 block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
				rows="5"
				placeholder="Title"
				type="text"
				name="title"
				value={formData.title}
				onChange={handleFormFieldChange}
				required
			/>
			<textarea
				class="shadow form-textarea mt-1 block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				rows="5"
				placeholder="Details"
				name="body"
				value={formData.body}
				onChange={handleFormFieldChange}
				required
			/>

			<Button type="submit" disabled={isButtonDisbale()}>
				{loading ? BUTTONS.SUBMITTING : BUTTONS.SUBMIT}
			</Button>
		</form>
	);
}
