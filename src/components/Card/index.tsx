interface Props {
    id: number
    img: string
    alt: string
    flipped: boolean
	matched: boolean
	cardFlip: (id: number) => void
}

export function Card({ id, img, alt, flipped, matched, cardFlip }: Props) {

	const handleOnClickCardFlip = () => cardFlip(id);

	return (
		<button 
			className={`drop-shadow-md flex items-center justify-center ${flipped ? '[transform:rotateY(10deg)]' : 'bg-white'} cursor-pointer h-16 w-16 hover:scale-105 rounded-lg transition-all duration-1000`}
			onClick={handleOnClickCardFlip}
			disabled={flipped || matched}
		>
			<figure>
				<img 
					className={`w-full h-full ${!flipped ? '[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000' : ''}`} 
					src={img} 
					alt={alt} 
				/>
			</figure>
		</button>
	);
}
