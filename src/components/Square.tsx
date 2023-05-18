import { motion } from 'framer-motion'
import styled from '@mui/system/styled'

type Props = { value: string | null; onClick: () => void }

const Square = ({ value, onClick }: Props) => (
	<MotionButton
		onClick={onClick}
		whileHover={{ scale: 1.1 }}
		whileTap={{ scale: 1 }}
		animate={{
			rotate: [0, 0, 270, 270, 0],
			borderRadius: ['20%', '20%', '50%', '50%', '20%'],
		}}
	>
		{value}
	</MotionButton>
)

export default Square

const MotionButton = styled(motion.button)(({ theme }) => ({
	width: theme.spacing(16),
	height: theme.spacing(16),
	backgroundColor: '#262626',
	opacity: 0.5,
	borderRadius: theme.spacing(1.5),
	border: theme.spacing(0.125),
	borderColor: '#6969697a',
	fontWeight: 500,
	fontSize: '6rem',
	lineHeight: 1,
	color: theme.palette.white,
	textAlign: 'center',

	[theme.breakpoints.down('sm')]: {
		width: theme.spacing(10),
		height: theme.spacing(10),
		fontSize: '3.75rem',
		lineHeight: 1,
	},
	[theme.breakpoints.down('md')]: {
		width: theme.spacing(12),
		height: theme.spacing(12),
		fontSize: '4.5rem',
		lineHeight: 1,
	},
	[theme.breakpoints.down('lg')]: {
		width: theme.spacing(14),
		height: theme.spacing(14),
		fontSize: '6rem',
		lineHeight: 1,
	},
}))
