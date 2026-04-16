import H2 from '@/components/text/h2';
import { Button } from '@/components/ui/button';

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center h-dvh gap-4 bg-fuchsia-700">
			<img src="Logo.svg" alt="Logo" className="max-w-full w-65 sm:w-120 " />
			<H2 text="Welcome to  Beer Guess" />
			<Button variant="main" size="lg">
				Start quiz
			</Button>
		</div>
	);
};

export default Home;
