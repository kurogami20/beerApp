import type { Beer } from '@/@types';
import AnswerCard from './AnswerCard';

interface AnswerChoiceProps {
	answers: Beer[];
	// status: 'pending' | 'success' | 'error';
}

const AnswerChoice = ({ answers }: AnswerChoiceProps) => {
	return (
		<div className="flex flex-col items-center w-full gap-4 z-2 overflow-auto">
			{answers.map((answer, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <Pas idéal mais ça permet d'éviter une erreur de lecture d'id, fix temporaire>
				<AnswerCard key={index} data={answer} />
			))}
		</div>
	);
};

export default AnswerChoice;
