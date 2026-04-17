import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '@/pages/Home';
import QuizPage from './pages/quizPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const rootElement = document.getElementById('root');
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<div id="wrapper" className="">
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/quiz" element={<QuizPage />} />
						</Routes>
					</BrowserRouter>
				</div>
			</QueryClientProvider>
		</StrictMode>,
	);
}
