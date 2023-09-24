import { useEffect, useState } from 'react';
import { Board, Header } from './components';
import type { Card } from './types/card';
import { imgs } from './utils/data';

export function App() {
	const [cards, setCards] = useState<Card[]>([]);
	const [moves, setMoves] = useState(0);
	const [isDisabled, setIsDisabled] = useState(false);
	const [flippedCards, setFlippedCards] = useState<number[]>([]);
	const [gameOver, setGameOver] = useState(false);

	useEffect(() => {
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
	}, []);

	const cardFlip = (id: number) => {
		if (isDisabled) return;
		const newCards = structuredClone(cards);
		const currentCardIndex = newCards.findIndex(card => card.id === id);
		if (!newCards[currentCardIndex].flipped && !newCards[currentCardIndex].matched) {
			newCards[currentCardIndex].flipped = true;
			const newFlippedCards = [...flippedCards, currentCardIndex];
			setFlippedCards(newFlippedCards);
			if (newFlippedCards.length === 2) {
				setIsDisabled(true);
				const [indexFirstCard, indexSecondCard] = newFlippedCards;
				if (newCards[indexFirstCard].alt === newCards[indexSecondCard].alt) {
					newCards[indexFirstCard].matched = true;
					newCards[indexSecondCard].matched = true;
					setIsDisabled(false);
				} else {
					setTimeout(() => {
						newCards[indexFirstCard].flipped = false;
						newCards[indexSecondCard].flipped = false;
						setCards(newCards);
						setIsDisabled(false);
					}, 1000);
				}
				setFlippedCards([]);
				setMoves(moves + 1);
			}
			setCards(newCards);
		}
		if (cards.every(card => card.matched)) {
			setGameOver(true);
			setIsDisabled(true);
		}
	};

	return (
		<div className='grid content-center justify-center p-8'>
			<Header />
			<main>
				<Board 
					cards={cards} 
					cardFlip={cardFlip}
				/>
			</main>
		</div>
	);
}
