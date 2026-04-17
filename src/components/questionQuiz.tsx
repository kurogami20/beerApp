import type { Beer } from '@/@types';
import { Card, CardContent } from './ui/card';
import { beerToGuessAtom } from '@/storage/beerToGuess';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

interface QuestionQuizProps {
	data: Beer;
	// status: 'pending' | 'success' | 'error';
}

const QuestionQuiz = ({ data }: QuestionQuizProps) => {
	const setBeerToGuess = useSetAtom(beerToGuessAtom);
	useEffect(() => {
		setBeerToGuess(data);
	}, [data, setBeerToGuess]);
	return (
		<Card className="bg-(--main)/50">
			<CardContent>
				<p>{data.description}</p>
			</CardContent>
		</Card>
	);
};

export default QuestionQuiz;
