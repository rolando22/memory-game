interface Props {
	moves: number
}

export function Header({ moves }: Props) {
	return (
		<header>
			<h1 className='font-bold text-3xl my-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
				Juego de Memoria
			</h1>
			<section className='flex justify-between'>
				<p>Movimientos</p>
				<p className='bg-yellow-500 py-1/2 px-2 rounded-full'>{moves}</p>
			</section>
		</header>
	);
}
