import type { Beer } from '@/@types';

import { Card, CardContent } from '@/components/ui/card';
import { beerChosenAtom } from '@/storage/beerChosen';
import { useSetAtom } from 'jotai';

interface AnswerCardProps {
	data: Beer;
}

const AnswerCard = ({ data }: AnswerCardProps) => {
	const setBeerChosen = useSetAtom(beerChosenAtom);
	return (
		<Card
			onClick={() => setBeerChosen(data)}
			className="bg-(--purple2) w-full  cursor-pointer hover:bg-(--purple2)/50 transition-colors duration-300"
		>
			<CardContent>
				<p>{data?.name}</p>
			</CardContent>
		</Card>
	);
};

export default AnswerCard;
