import React from "react";

export default function Button({ children, ...restProps }) {
	return (
		<button
			className="bg-indigo-500 hover:bg-indigo-600 text-white text-medium font-medium rounded-md mt-2 mx-1 py-2 px-3 disabled:opacity-50"
			{...restProps}
		>
			{children}
		</button>
	);
}
