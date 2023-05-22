import styled from '@mui/system/styled'
import Box from '@mui/material/Box'
import Head from 'next/head'

type Props = {
	pageTitle: string
	metaDescription: string
	pageHead: any
	children: any
	disablePadding: boolean
}

const Page = ({
	pageTitle,
	metaDescription,
	pageHead = null,
	children,
	disablePadding = false,
}: Props) => {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>

				{metaDescription && (
					<meta name="description" content={metaDescription} />
				)}
				{pageHead}
			</Head>
			<main>
				<PageContentWrapper disablePadding={disablePadding}>
					{children}
				</PageContentWrapper>
			</main>
		</>
	)
}

export default Page

type PageContentWrapperProps = {
	disablePadding: boolean
	children: any
}

const PageContentWrapper = styled(
	({ disablePadding, ...props }: PageContentWrapperProps) => <Box {...props} />
)(({ disablePadding, theme }) => ({
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',

	[theme.breakpoints.up('lg')]: {
		padding: disablePadding ? 0 : '15px 5% 30px',
	},
	[theme.breakpoints.only('lg')]: {
		padding: disablePadding ? 0 : '15px 10% 30px',
	},
	[theme.breakpoints.down('lg')]: {
		padding: disablePadding ? 0 : '15px 4% 20px',
	},
}))
