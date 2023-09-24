import { Card } from '..';
import type { Card as CardType } from '../../types/card';

interface Props {
	cards: CardType[]
	cardFlip: (id: number) => void
}

export function Board({ cards, cardFlip }: Props) {
	return (
		<section className='grid grid-cols-4 content-center justify-center gap-2 py-5'>
			{cards.map(card => 
				<Card 
					key={card.id} 
					id={card.id}
					img={card.img}
					alt={card.alt}
					flipped={card.flipped}
					matched={card.matched}
					cardFlip={cardFlip}
				/>
			)}
		</section>
	);
}
