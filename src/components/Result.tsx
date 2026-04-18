import type { Beer } from '@/@types';
import CorrectBeer from './correctBeer';
import MessageAnswer from './MessageAnswer';

interface ResultProps {
	message: string;
	beer: Beer;
}

const Result = ({ message, beer }: ResultProps) => {
	return (
		<div className="flex flex-col gap-4 w-full z-4 absolute top-0 left-0 p-5  ">
			<MessageAnswer message={message} />
			<CorrectBeer beer={beer} />
		</div>
	);
};

export default Result;
