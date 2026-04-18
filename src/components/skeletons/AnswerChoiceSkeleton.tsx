import React from 'react';
import { Skeleton } from '../ui/skeleton';

const AnswerChoiceSkeleton = () => {
	return (
		<div className="flex flex-col items-center w-full gap-4 z-2 overflow-auto">
			<Skeleton className="h-17 w-full bg-(--purple2) " />
			<Skeleton className="h-17 w-full bg-(--purple2)" />
			<Skeleton className="h-17 w-full bg-(--purple2)" />
			<Skeleton className="h-17 w-full bg-(--purple2)" />
		</div>
	);
};

export default AnswerChoiceSkeleton;
