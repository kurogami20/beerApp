import { Card, CardContent } from './ui/card';

interface MessageAnswerProps {
	message: string;
}

const MessageAnswer = ({ message }: MessageAnswerProps) => {
	return (
		<article>
			<Card
				className={
					message === 'Correct!' ? 'bg-[#00d390] w-full' : 'bg-[#ff637d] w-full'
				}
			>
				<CardContent>
					<h1 className="text-3xl text-stroke-base text-white text-center">
						{message}
					</h1>
				</CardContent>
			</Card>
		</article>
	);
};

export default MessageAnswer;
