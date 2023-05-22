import { colors } from '@mui/material'
// Define your color palette here
const white = '#FFFFFF'
const black = '#000000'

const palette = {
	black,
	white,
	primary: {
		contrastText: white,
		dark: '#5518dc',
		main: '#651fff',
		light: '#7940f7',
	},
	secondary: {
		contrastText: white,
		dark: '#04ba81',
		main: '#44f6be',
		light: '#36f5b9',
	},
	success: {
		contrastText: white,
		dark: '#237627',
		main: colors.green[600],
		light: colors.green[400],
		transparentBackground: 'rgba(92, 196, 107, 0.2)',
	},
	info: {
		contrastText: white,
		dark: colors.blue[900],
		main: colors.blue[600],
		light: colors.blue[400],
	},
	warning: {
		contrastText: white,
		dark: colors.orange[900],
		main: colors.orange[600],
		light: colors.orange[400],
	},
	error: {
		contrastText: white,
		dark: colors.red[900],
		main: colors.red[600],
		light: colors.red[400],
		transparentBackground: 'rgba(209, 90, 94, 0.2)',
	},
	text: {
		primary: colors.blueGrey[900],
		secondary: colors.blueGrey[600],
		light: colors.blueGrey[500],
		lightGray: '#00000061',
		white: white,
		link: colors.blue[600],
	},
	background: {
		default: '#FFFFFF',
		dark: '#1c2331',
		paper: white,
		avatar: '#F4F6F8',
	},
}

export default palette
