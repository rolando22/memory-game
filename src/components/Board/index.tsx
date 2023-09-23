import { Card } from '..';
import type { Card as CardType } from '../../types/card';

interface Props {
	cards: CardType[]
}

export function Board({ cards }: Props) {
	return (
		<section className='px-3 py-5 my-3'>
			<ul className='grid grid-cols-4 content-center justify-center'>
				{cards.map(card => 
					<Card 
						key={card.id} 
						img={card.img}
						alt={card.alt}
					/>
				)}
			</ul>
		</section>
	);
}
