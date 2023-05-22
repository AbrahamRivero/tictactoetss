import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../theme'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import CssBaseline from '@mui/material/CssBaseline'

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement!.removeChild(jssStyles)
		}
	}, [])
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
			<Analytics />
		</ThemeProvider>
	)
}
