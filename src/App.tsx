import { useEffect, useState } from 'react';
import { Board, Header } from './components';
import type { Card } from './types/card';
import { imgs } from './utils/data';

export function App() {
	const [cards, setCards] = useState<Card[]>([]);

	useEffect(() => {
		(() => {
			const newCards: Card[] = imgs
				.flatMap(img => {
					const duplicate = {
						...img,
						id: img.id + imgs.length,
					};
					return [img, duplicate];
				}).map(img => ({
					...img,
					flipped: false,
					matched: false,
				}));
			setCards(newCards);
		})();
	}, []);

	return (
		<div className='grid content-center justify-center p-8'>
			<Header />
			<main>
				<Board cards={cards} />
			</main>
		</div>
	);
}
