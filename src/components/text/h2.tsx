interface H2Props {
	text: string;
	className: string;
}
const H2 = ({ text, className }: H2Props) => {
	return (
		<h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${className}`}>
			{text}
		</h2>
	);
};

export default H2;
