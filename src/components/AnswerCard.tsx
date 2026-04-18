import type { Beer } from '@/@types';

import { Card, CardContent } from '@/components/ui/card';

interface AnswerCardProps {
	data: Beer;
}

const AnswerCard = ({ data }: AnswerCardProps) => {
	return (
		<Card className="bg-(--purple2) w-full ">
			<CardContent>
				<p>{data?.name}</p>
			</CardContent>
		</Card>
	);
};

export default AnswerCard;
