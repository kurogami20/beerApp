import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import H2 from '@/components/text/h2';

const Home = () => {
	const navigate = useNavigate();
	const beginQuiz = () => {
		document.getElementById('home')?.classList.add('animate-ping');
		setTimeout(() => {
			navigate('/quiz');
		}, 250);
	};
	return (
		<div
			id="home"
			className="flex flex-col items-center justify-center h-dvh gap-4 bg-fuchsia-700   relative overflow-hidden"
		>
			<img
				src="Frame_2.svg"
				alt=""
				className="absolute z-1 opacity-60 h-dvh scale-800  sm:scale-200  animate-(--animate-move) repeat-infinite"
			/>

			<img src="Logo.svg" alt="Logo" className="max-w-full w-65 sm:w-120 z-2" />
			<H2 className="z-2" text="Welcome to  Beer Guess" />
			<Button variant="main" size="default" className="z-2" onClick={beginQuiz}>
				Start quiz
			</Button>
		</div>
	);
};

export default Home;
