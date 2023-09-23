interface Props {
    img: string
    alt: string
}

export function Card({ img, alt }: Props) {
	return (
		<li className='drop-shadow-md flex items-center justify-center cursor-pointer h-16 w-16 hover:scale-105 rounded-lg transition-all duration-1000'>
			<figure>
				<img 
					className='w-full h-full' 
					src={img} 
					alt={alt} 
				/>
			</figure>
		</li>
	);
}
