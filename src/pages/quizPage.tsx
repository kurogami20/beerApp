import type { Beer } from '@/@types';
import AnswerChoice from '@/components/AnswerChoice';
import QuestionQuiz from '@/components/questionQuiz';
import H1 from '@/components/text/h1';
import { useBeers, useRandomBeer } from '@/hooks/useBeer';
import { beerToGuessAtom } from '@/storage/beerToGuess';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

const QuizPage = () => {

	useEffect(()=>{
	// on va déterminer la page des bières contenant les mauvaise réponses entre 1 et 14
	const randomPage = Math.floor(Math.random() * 14) + 1;
	
	// on va déterminer les 3 mauvaises réponses à partir de la page aléatoire
	// pour cela on va récupérer les bières de la page aléatoire et on va prendre  3  bières random parmi elles
	setrandomPage(randomPage)
	
	// en fonction du numéro de page obtenu on sélectionne des ids
	const randomIds = () => {
		const minId = (randomPage - 1) * 30 + 1;
		const maxId = Math.min(randomPage * 30, 415);
		return Array.from(
			{ length: 3 },
			() => Math.floor(Math.random() * (maxId - minId + 1)) + minId,
		);
	};
	setrandomIds(randomIds())
    
	// on va mélanger la réponse aux fausses réponses pour ne pas toujours avoir la réponse à la même position dans un tableau de 4 éléments
	
	
	
	}, [])
	const useBeerToGuess = useAtomValue(beerToGuessAtom);
	// On récupère les données de la bière à deviner de manière aleatoire
	const { data, status } = useRandomBeer();
	
	const [randomIds, setrandomIds]=useState<number[]>()
	
	const [randomPage, setrandomPage] = useState<number>()
	
	console.log(data);

	const { data: beersData, status: beersStatus } = useBeers({
		page: randomPage,
		ids: randomIds,
	});

	const answers = beersData
		? [...beersData, useBeerToGuess].sort(() => Math.random() - 0.5)
		: [];

	return (
		<div className="flex flex-col items-center justify-start h-dvh gap-4 mx-5">
			<H1 text="Guess the Beer" />
			{status === 'pending' && <p>Loading question...</p>}
			{status === 'error' && <p>Error fetching question data.</p>}
			{status === 'success' && data && <QuestionQuiz data={data} />}

			{beersStatus === 'pending' && <p>Loading answers...</p>}
			{beersStatus === 'error' && <p>Error fetching answers data.</p>}
			{beersStatus === 'success' && answers && (
				<AnswerChoice answers={answers} />
			)}
			{answers! && <p>erreur</p>}
		</div>
	);
};

export default QuizPage;
