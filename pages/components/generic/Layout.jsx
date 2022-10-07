export default function Layout({ children }) {
	return (
		<>
			<main className="container p-4 mx-auto text-center rounded mt-12">
				{children}
			</main>
		</>
	);
}
