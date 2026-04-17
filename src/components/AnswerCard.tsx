import type { Beer } from '@/@types';

import { Card, CardContent } from '@/components/ui/card';

interface AnswerCardProps {
	data: Beer;
}

const AnswerCard = ({ data }: AnswerCardProps) => {
	return (
		<Card className="bg-fuchsia-700/50">
			<CardContent>
				<p>{data?.name}</p>
			</CardContent>
		</Card>
	);
};

export default AnswerCard;
