import { Card, CardContent, CardFooter } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const QuestionQuizSkeleton = () => {
	return (
		<Card className="bg-(--yellow2) w-full h-xl overflow-auto z-2 ">
			<CardContent>
				<Skeleton className="h-30 w-full" />
				<Skeleton className="h-10 w-full mt-2" />
				<Skeleton className="h-10 w-full mt-2" />
			</CardContent>
			<CardFooter className="">
				<Skeleton className="h-7 mt-3 w-full" />
			</CardFooter>
		</Card>
	);
};

export default QuestionQuizSkeleton;
