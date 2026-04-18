import type { Beer } from '@/@types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { beerToGuessAtom } from '@/storage/beerToGuess';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router';
import displayResultAtom from '@/storage/displayResult';

interface CorrectBeerProps {
	beer: Beer;
}

const CorrectBeer = ({ beer }: CorrectBeerProps) => {
	const setBeerToGuess = useSetAtom(beerToGuessAtom);
	const setDisplayResult = useSetAtom(displayResultAtom);
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center gap-6">
			<Card className="bg-white! w-full border-(--main) border-2 flex flex-col items-center justify-center gap-4 ">
				<CardHeader className="border-b-2 border-(--main)  w-full text-center pb-6">
					<CardTitle>The Correct Beer was {beer.name}</CardTitle>
				</CardHeader>
				<CardContent>
					<img
						src={`https://punkapi-alxiw.amvera.io/v3/images/${beer.id}.png`}
						alt={beer.name}
						className="h-64 w-auto object-contain"
					/>
				</CardContent>
			</Card>

			<Button
				onClick={() => {
					setBeerToGuess(null);
					setDisplayResult(false);
					navigate(0);
				}}
				className="text-lg p-6"
				variant="main"
			>
				Next Beer
			</Button>
		</div>
	);
};

export default CorrectBeer;
