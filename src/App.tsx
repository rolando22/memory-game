import { Board, Header } from './components';

export function App() {
	return (
		<div className='grid content-center justify-center p-8'>
			<Header />
			<main>
				<Board />
			</main>
		</div>
	);
}
