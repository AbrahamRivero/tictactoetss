import { LazyMotion, domAnimation, m } from 'framer-motion'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Footer from '@/components/Footer'
import useGame from '@/components/hooks/useGame'
import styled from '@mui/system/styled'

const HomePage = () => {
	const {
		handleClick,
		handleReset,
		handleSelectPlayer,
		handleSelectStart,
		isBoardFull,
		startPlayer,
		renderSquare,
	} = useGame()

	return (
		<div className="flex flex-col items-center justify-between min-h-screen bg-black bg-opacity-90 text-center">
			<div className="w-auto mb-5 mt-7">
				<GameTitle variant="h1">Tic Tac Toe</GameTitle>
			</div>
			<Box>
				{startPlayer === null ? (
					<SelectPlayerContainer>
						<SelectPlayerContainerTitle variant="h2">
							Select start Player
						</SelectPlayerContainerTitle>
						<SelectPlayerButtonContainer>
							<SelectPlayerButton onClick={() => handleSelectStart('X')}>
								X
							</SelectPlayerButton>
							<SelectPlayerButton onClick={() => handleSelectStart('O')}>
								O
							</SelectPlayerButton>
						</SelectPlayerButtonContainer>
					</SelectPlayerContainer>
				) : (
					<div className="w-auto bg-neutral-800 bg-opacity-30 rounded-md p-8">
						<div className="font-bold text-2xl mb-4 text-white text-center">
							{status}
						</div>
						<LazyMotion features={domAnimation}>
							<m.div
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5 }}
								className="flex flex-col space-y-4 justify-center"
								variants={{
									open: {
										clipPath: 'inset(0% 0% 0% 0% round 10px)',
										transition: {
											type: 'spring',
											bounce: 0,
											duration: 0.7,
											delayChildren: 0.3,
											staggerChildren: 0.05,
										},
									},
								}}
							>
								<SquareContainer>
									{renderSquare(0)}
									{renderSquare(1)}
									{renderSquare(2)}
								</SquareContainer>
								<SquareContainer>
									{renderSquare(3)}
									{renderSquare(4)}
									{renderSquare(5)}
								</SquareContainer>
								<SquareContainer>
									{renderSquare(6)}
									{renderSquare(7)}
									{renderSquare(8)}
								</SquareContainer>
							</m.div>
						</LazyMotion>
					</div>
				)}
			</Box>
			<Footer />
		</div>
	)
}

export default HomePage

const GameTitle = styled(Typography)(({ theme }) => ({
	textAlign: 'center',
	fontWeight: 900,
	color: 'rgba(38, 38, 83, 0)',
	fontSize: '3.75rem',
	lineHeight: '1rem',
	backgroundClip: 'text',
	backgroundImage: `linear-gradient(to right,${theme.palette.primary.main},#ea580c)`,
}))

const SelectPlayerContainer = styled(Box)(({ theme }) => ({
	backgroundColor: '#262626',
	opacity: 0.3,
	borderRadius: theme.spacing(0.75),
	padding: theme.spacing(5),
}))

const SelectPlayerContainerTitle = styled(Typography)(({ theme }) => ({
	fontSize: '1.5rem',
	lineHeight: '2rem',
	marginBotton: theme.spacing(2),
	color: theme.palette.white,
	textTransform: 'uppercase',
	fontWeight: 500,
	textAlign: 'center',
}))

const SelectPlayerButtonContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	fontSize: '1.25rem',
	lineHeight: '1.75rem',
	marginLeft: theme.spacing(2),
}))

const SelectPlayerButton = styled(Button)(({ theme }) => ({
	backgroundColor: '#525252',
	color: theme.palette.white,
	borderRadius: theme.spacing(0.75),
	padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
	fontWeight: 'bold',
}))

const SquareContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	marginLeft: theme.spacing(2),
}))
