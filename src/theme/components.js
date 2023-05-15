import { MOBILE_MEDIA_QUERY } from './constants'

// Define your MUI Components rewrites here
const components = {
	MuiOutlinedInput: {
		styleOverrides: {
			root: {
				fontSize: '16px',
				[MOBILE_MEDIA_QUERY]: {
					fontSize: '16px',
				},
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				textTransform: 'capitalize',
			},
		},
		variants: [
			{
				props: { variant: 'action' },
				style: {
					textTransform: 'uppercase',
					borderRadius: '20px',
					padding: '10px 18px',
					backgroundColor: '#651FFF',
					color: '#FFFFFF',
					boxShadow: `
                        0px 2px 1px -1px rgb(0 0 0 / 20%),
                        0px 1px 1px 0px rgb(0 0 0 / 14%),
                        0px 1px 3px 0px rgb(0 0 0 / 12%)
                    `,

					'&:hover': {
						backgroundColor: '#651FFF',
						boxShadow: `
                            0px 3px 3px -2px rgb(0 0 0 / 20%),
                            0px 3px 4px 0px rgb(0 0 0 / 14%),
                            0px 1px 8px 0px rgb(0 0 0 / 12%)
                        `,
					},
				},
			},
		],
	},
}

export default components
