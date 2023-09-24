interface Props {
	moves: number
}

export function Header({ moves }: Props) {
	return (
		<header>
			<h1 className='font-bold text-2xl my-8'>
				Juego de Memoria
			</h1>
			<section className='flex justify-between'>
				<p>Movimientos</p>
				<p>{moves}</p>
			</section>
		</header>
	);
}
