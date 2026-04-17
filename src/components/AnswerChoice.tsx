import type { Beer } from '@/@types';
import AnswerCard from './AnswerCard';

interface AnswerChoiceProps {
	answers: Beer[];
	// status: 'pending' | 'success' | 'error';
}

const AnswerChoice = ({ answers }: AnswerChoiceProps) => {
	return (
		<div>
			{answers.map((answer) => (
				<AnswerCard key={answer.id} data={answer} />
			))}
		</div>
	);
};

export default AnswerChoice;
