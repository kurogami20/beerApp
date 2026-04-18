import type { Beer } from '@/@types';
import { Card, CardContent, CardFooter } from './ui/card';
import { beerToGuessAtom } from '@/storage/beerToGuess';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './ui/accordion';

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
		<Card className="bg-(--yellow2) w-full h-fit overflow-auto z-2 ">
			<CardContent>
				<Accordion
					type="single"
					collapsible
					className="w-full "
					defaultValue="description"
				>
					<AccordionItem
						value="description"
						className="border-b border-black/20"
					>
						<AccordionTrigger className="w-full text-left text-normal font-bold">
							Description of the beer :
						</AccordionTrigger>
						<AccordionContent>
							<p className="text-sm">{data.description}</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						className="border-b border-black/20"
						value="food-pairing"
					>
						<AccordionTrigger className="w-full text-left text-normal font-bold">
							This is a beer that goes well with :
						</AccordionTrigger>
						<AccordionContent>
							{data.food_pairing.map((food) => (
								<ul key={food} className="text-sm list-disc pl-5">
									<li>{food}</li>
								</ul>
							))}
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="Ingredients">
						<AccordionTrigger className="w-full text-left text-normal font-bold">
							This a beer that is made with the following ingredients :
						</AccordionTrigger>
						<AccordionContent>
							<span className="font-semibold ">Malt :</span>
							<ul className="text-sm list-disc pl-5 mt-2 mb-2">
								{data.ingredients.malt.map((malt, index) => (
									<li key={malt.name}>{malt.name}</li>
								))}
							</ul>
							<span className="font-semibold ">Hops :</span>
							<ul className="text-sm list-disc pl-5 mt-2">
								{/* suprimmer les doublons */}
								{data.ingredients.hops
									.filter(
										(hop, index, self) =>
											index === self.findIndex((h) => h.name === hop.name),
									)
									.map((hop) => (
										<li key={hop.name}>{hop.name}</li>
									))}
							</ul>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</CardContent>
			<CardFooter className="">
				Can you guess the name of this beer ?
			</CardFooter>
		</Card>
	);
};

export default QuestionQuiz;
