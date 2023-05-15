import { motion } from 'framer-motion'
import { RestartIcon, ChangePlayerIcon } from '../icons'

export default function WinnerShow({
	winner,
	handleReset,
	handleSelectPlayer,
}) {
	let message
	if (winner === '=') {
		message = "It's a tie!"
	} else {
		message = 'has won!'
	}

	return (
		<div className="w-full h-screen absolute inset-0 flex justify-center items-center select-none">
			<motion.div
				className="flex items-center justify-center px-28 py-16 bg-black bg-opacity-80 rounded-3xl max-sm:px-20"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<div className="flex flex-col gap-14 justify-center">
					<div className="flex items-center gap-1 text-6xl max-md:text-4xl max-lg:text-5xl">
						<div
							className={`bg-white bg-opacity-10 rounded-full px-3 py-1 ${
								winner === '=' ? 'hidden' : ''
							}`}
						>
							<span className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
								{winner}
							</span>
						</div>
						<h1 className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
							{message}
						</h1>
					</div>

					<div className="flex flex-col gap-3 text-lg">
						<button
							className="flex justify-center items-center gap-1 bg-neutral-800 text-white rounded-md font-medium px-4 py-2 uppercase"
							onClick={handleReset}
						>
							<RestartIcon className="fill-white w-7 h-7" />
							Restart
						</button>
						<button
							className="flex justify-center items-center gap-1 bg-neutral-800 text-white rounded-md font-medium px-4 py-2 uppercase"
							onClick={handleSelectPlayer}
						>
							<ChangePlayerIcon className="fill-white" /> Change player
						</button>
					</div>
				</div>
			</motion.div>
		</div>
	)
}
