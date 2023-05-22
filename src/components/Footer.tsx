import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import styled from '@mui/system/styled'

const Footer = () => (
	<FooterContainer component="footer">
		<GithubLinkContainer>
			Made by
			<FooterLink
				href="https://github.com/AbrahamRivero"
				target="_blank"
				rel="noopener noreferrer"
			>
				Abraham Rivero
			</FooterLink>
		</GithubLinkContainer>
		<LinksDivider orientation="vertical" variant="fullWidth" flexItem />
		<Box>
			<FooterLink
				href="https://github.com/AbrahamRivero/tictactoetss"
				target="_blank"
				rel="noopener noreferrer"
			>
				Source😎
			</FooterLink>
		</Box>
	</FooterContainer>
)

export default Footer

const FooterContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: `${theme.spacing(1)} 0`,
	color: theme.palette.text.white,

	[theme.breakpoints.down('sm')]: {
		flexWrap: 'wrap',
	},
}))

const GithubLinkContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(0.5),
}))

const FooterLink = styled(Link)(({ theme }) => ({
	fontWeight: 'bold',
	color: theme.palette.text.white,
	textDecoration: 'none',
	textTransform: 'capitalize',

	':hover': {
		color: theme.palette.primary.main,
	},
}))

const LinksDivider = styled(Divider)(({ theme }) => ({
	borderColor: theme.palette.white,
	margin: `0 ${theme.spacing(0.5)}`,
}))
