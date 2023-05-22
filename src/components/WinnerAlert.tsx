import { motion } from 'framer-motion'
import styled from '@mui/system/styled'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import RestartAltOutlined from '@mui/icons-material/RestartAltOutlined'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'

type Props = {
	winner: string
	handleReset: () => void
	handleSelectPlayer: () => void
}

const WinnerAlert = ({ winner, handleReset, handleSelectPlayer }: Props) => {
	let message: string
	if (winner === '=') {
		message = "It's a tie!"
	} else {
		message = 'has won!'
	}
	return (
		<AlertContainer>
			<MotionContainer
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<WinnerMessageActionsContainer>
					<MessageContainer>
						<WinnerContainer winner={winner}>
							<WinnerMessage variant="h1">{winner}</WinnerMessage>
						</WinnerContainer>
						<MessageText variant="h1">{message}</MessageText>
					</MessageContainer>

					<ActionsContainer>
						<ActionButton
							variant="contained"
							onClick={handleReset}
							startIcon={<RestartAltOutlined />}
						>
							Restart
						</ActionButton>
						<ActionButton
							variant="contained"
							onClick={handleSelectPlayer}
							startIcon={<Person2OutlinedIcon />}
						>
							Change player
						</ActionButton>
					</ActionsContainer>
				</WinnerMessageActionsContainer>
			</MotionContainer>
		</AlertContainer>
	)
}

export default WinnerAlert

const AlertContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '100vh',
	position: 'absolute',
	inset: 0,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	userSelect: 'none',
}))

const WinnerMessageActionsContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: theme.spacing(7),
}))

const MessageContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(0.5),
	fontSize: '3.75rem',
	lineHeight: 1,

	[theme.breakpoints.down('lg')]: {
		fontSize: '3rem',
		lineHeight: 1,
	},

	[theme.breakpoints.down('md')]: {
		fontSize: '2.25rem',
		lineHeight: '2.5rem',
	},
}))

type WinnerContainerProps = {
	winner: string
	children: any
}

const WinnerContainer = styled(({ winner, ...props }: WinnerContainerProps) => (
	<Box {...props} />
))(({ winner, theme }) => ({
	backgroundColor: '#ffffff1a',
	borderRadius: '100%',
	padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
	display: winner === '=' ? 'none' : '',
}))

const WinnerMessage = styled(Typography)(({ theme }) => ({
	textAlign: 'center',
	fontWeight: 700,
	color: 'transparent',
	backgroundClip: 'text',
	backgroundImage: `linear-gradient(to right, #f97316,#ea580c)`,
}))

const MessageText = styled(Typography)(({ theme }) => ({
	textAlign: 'center',
	fontWeight: 700,
	color: 'transparent',
	backgroundClip: 'text',
	backgroundImage: `linear-gradient(to right,#ea580c,${theme.palette.primary.main})`,
}))

const ActionsContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(1.5),
	fontSize: '1.125rem',
	lineHeight: '1.75rem',
}))

const ActionButton = styled(Button)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: theme.spacing(0.5),
	backgroundColor: 'rgb(38 38 38)',
	color: theme.palette.text.white,
	borderRadius: theme.spacing(0.75),
	fontWeight: 500,
	padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
	textTransform: 'uppercase',
}))

const MotionContainer = styled(motion.div)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: `${theme.spacing(8)} ${theme.spacing(14)}`,
	backgroundColor: 'rgba(0 0 0 /0.9)',

	borderRadius: theme.spacing(3),

	[theme.breakpoints.down('sm')]: {
		paddingLeft: theme.spacing(7),
		paddingRight: theme.spacing(7),
	},
}))
