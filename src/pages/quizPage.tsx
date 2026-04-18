import type { Beer } from '@/@types';
import AnswerChoice from '@/components/AnswerChoice';
import QuestionQuiz from '@/components/questionQuiz';
import H1 from '@/components/text/h1';
import { useBeers, useRandomBeer } from '@/hooks/useBeer';
import { beerChosenAtom } from '@/storage/beerChosen';
import { beerToGuessAtom } from '@/storage/beerToGuess';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const QuizPage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const randomIds = () => {
			const minId = 1;
			const maxId = 415;
			return Array.from(
				{ length: 3 },
				() => Math.floor(Math.random() * (maxId - minId + 1)) + minId,
			);
		};
		setrandomIds(randomIds());
	}, []);
	const useBeerToGuess = useAtomValue(beerToGuessAtom);
	// On récupère les données de la bière à deviner de manière aleatoire
	const { data, status } = useRandomBeer();

	const [randomIds, setrandomIds] = useState<number[]>();

	const { data: beersData, status: beersStatus } = useBeers({
		page: 1,
		ids: randomIds,
	});

	// on va mélanger la réponse aux fausses réponses pour ne pas toujours avoir la réponse à la même position dans un tableau de 4 éléments
	const answers = beersData
		? [...beersData, useBeerToGuess].sort(() => Math.random() - 0.5)
		: [];

	const beerChosen = useAtomValue(beerChosenAtom);

	if (beerChosen) {
		// on affiche une alerte pour dire si la réponse est bonne ou pas
		if (beerChosen.id === useBeerToGuess?.id) {
			alert('Correct !');
			if (window.confirm('Do you want to play again ?')) {
				navigate(0);
			} else {
				navigate('/');
			}
		} else {
			alert(`Wrong ! The correct answer was ${useBeerToGuess?.name}`);
			if (window.confirm('Do you want to play again ?')) {
				navigate(0);
			} else {
				navigate('/');
			}
		}
	}

	return (
		<div className="relative max-h-dvh w-full flex items-center justify-center overflow-hidden">
			<img
				src="Frame_2.svg"
				alt=""
				className="absolute z-1 opacity-60 h-dvh scale-800  sm:scale-200  invert-50"
			/>
			<div className="flex flex-col items-center justify-start h-dvh gap-4 mx-5  z-2 sm:mx-50 overflow-auto  mt-10 w-full">
				<H1 className="z-2" text="Guess the Beer" />
				{status === 'pending' && <p>Loading question...</p>}
				{status === 'error' && <p>Error fetching question data.</p>}
				{status === 'success' && data && <QuestionQuiz data={data} />}

				{beersStatus === 'pending' && <p>Loading answers...</p>}
				{beersStatus === 'error' && <p>Error fetching answers data.</p>}
				{beersStatus === 'success' && answers && (
					<AnswerChoice answers={answers} />
				)}
				{!answers && <p>erreur</p>}
			</div>
		</div>
	);
};

export default QuizPage;
