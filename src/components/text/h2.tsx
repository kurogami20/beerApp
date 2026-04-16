interface H2Props {
	text: string;
}
const H2 = (props: H2Props) => {
	return <h2 className="text-2xl sm:text-3xl font-bold mb-4">{props.text}</h2>;
};

export default H2;
