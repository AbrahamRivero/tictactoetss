import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../theme'
import Footer from '@/components/Footer'

const HomePage = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Footer />
			</ThemeProvider>
		</>
	)
}

export default HomePage
