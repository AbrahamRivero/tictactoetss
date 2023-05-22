import { LazyMotion, domAnimation, m } from 'framer-motion'
import Page from '@/components/Page/Page'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Footer from '@/components/Footer'
import useGame from '@/components/hooks/useGame'
import styled from '@mui/system/styled'

const HomePage = () => {
	const { handleSelectStart, startPlayer, status, renderSquare } = useGame()

	return (
		<Page
			disablePadding
			pageTitle="Tic Tac Toe"
			metaDescription=" Un juego de Tic Tac Toe hecho en TypeScript con fines didacticos"
			pageHead={null}
		>
			<GeneralContainer>
				<GameTitleContainer>
					<GameTitle variant="h1">Tic Tac Toe</GameTitle>
				</GameTitleContainer>
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
						<LazyMotionStatusContainer>
							<StatusContainer>{status}</StatusContainer>
							<LazyMotion features={domAnimation}>
								<MContainer
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5 }}
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
								</MContainer>
							</LazyMotion>
						</LazyMotionStatusContainer>
					)}
				</Box>
				<Footer />
			</GeneralContainer>
		</Page>
	)
}

export default HomePage

const GeneralContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-between',
	minHeight: '100vh',
	backgroundColor: 'rgb(0 0 0)',
	opacity: 0.9,
	textAlign: 'center',
}))

const GameTitleContainer = styled(Box)(({ theme }) => ({
	width: 'auto',
	margin: `${theme.spacing(2.5)} 0 ${theme.spacing(3.5)} 0`,
}))

const GameTitle = styled(Typography)(({ theme }) => ({
	textAlign: 'center',
	fontWeight: 900,
	color: 'rgba(38, 38, 83, 0)',
	fontSize: '3.75rem',
	lineHeight: '3rem',
	backgroundClip: 'text',
	backgroundImage: `linear-gradient(to right,${theme.palette.primary.main},#ea580c)`,
}))

const LazyMotionStatusContainer = styled(Box)(({ theme }) => ({
	width: 'auto',
	backgroundColor: '#0000008f',
	borderRadius: theme.spacing(0.75),
	padding: theme.spacing(4),
}))

const MContainer = styled(m.div)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
	justifyContent: 'center',
}))

const StatusContainer = styled(Box)(({ theme }) => ({
	fontWeight: 'bold',
	fontSize: '1.5rem',
	lineHeight: '2rem',
	marginBottom: theme.spacing(2),
	color: theme.palette.text.white,
	textAlign: 'center',
}))

const SelectPlayerContainer = styled(Box)(({ theme }) => ({
	backgroundColor: '#26262661',
	borderRadius: theme.spacing(0.75),
	padding: theme.spacing(5),
}))

const SelectPlayerContainerTitle = styled(Typography)(({ theme }) => ({
	fontSize: '1.5rem',
	lineHeight: '2rem',
	marginBotton: theme.spacing(2),
	color: theme.palette.text.white,
	textTransform: 'uppercase',
	fontWeight: 500,
	textAlign: 'center',
}))

const SelectPlayerButtonContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	fontSize: '1.25rem',
	lineHeight: '1.75rem',
	gap: theme.spacing(2),
	marginTop: theme.spacing(2),
}))

const SelectPlayerButton = styled(Button)(({ theme }) => ({
	backgroundColor: '#1a1919dc',
	color: theme.palette.white,
	borderRadius: theme.spacing(0.75),
	padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
	fontWeight: 'bold',
	textTransform: 'uppercase',
	fontSize: '1.15rem',
}))

const SquareContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	gap: theme.spacing(2),
}))
