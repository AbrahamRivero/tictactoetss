import { createTheme } from '@mui/material/styles'
import palette from './palette'
import components from './components'
import typography from './typography'

export const theme = createTheme({
	palette,
	components,
	typography,
	breakpoints: {
		// Define your screen sizes here
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
})
