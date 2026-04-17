import type { Beer } from '@/@types';
import AnswerCard from './AnswerCard';

interface AnswerChoiceProps {
	answers: Beer[];
	// status: 'pending' | 'success' | 'error';
}

const AnswerChoice = ({ answers }: AnswerChoiceProps) => {
	return (
		<div className="flex flex-col items-center w-full gap-4 ">
			{answers.map((answer) => (
				<AnswerCard key={answer.id} data={answer} />
			))}
		</div>
	);
};

export default AnswerChoice;
