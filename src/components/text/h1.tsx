interface H1Props {
	text: string;
	className?: string;
}
const H1 = ({ text, className }: H1Props) => {
	return (
		<h1 className={`text-2xl sm:text-4xl font-bold ${className || ''}`}>
			{text}
		</h1>
	);
};

export default H1;
