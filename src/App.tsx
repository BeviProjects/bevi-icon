import { BvIcon } from '../lib'

const App = () => {
	return (
		<div>
			<h1>
				Bevi Icon -{' '}
				<BvIcon
					name='cube'
					size={2}
					variant='duo'
					title='Cube'
					className='bv-icon'
				/>
			</h1>
		</div>
	)
}

export default App
