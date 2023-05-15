import { MOBILE_MEDIA_QUERY } from './constants'

const typography = {
	htmlFontSize: 16,
	fontFamily: ['"Plus Jakarta Sans"', 'sans-serif'].join(','),
	h1: {
		fontSize: '2.125rem',
		fontWeight: 400,
		[MOBILE_MEDIA_QUERY]: {
			fontSize: '1.65rem',
		},
	},
	h2: {
		fontSize: '1.5rem',
		fontWeight: 500,
		[MOBILE_MEDIA_QUERY]: {
			fontSize: '1.275rem',
		},
	},
	h3: {
		fontSize: '1.2rem',
		fontWeight: 600,
		[MOBILE_MEDIA_QUERY]: {
			fontSize: '1rem',
		},
	},
	h4: {
		fontSize: '1.05rem',
		fontWeight: 600,
		[MOBILE_MEDIA_QUERY]: {
			fontSize: '0.9rem',
		},
	},
	h5: undefined,
	h6: undefined,
	body1: {
		fontSize: '1.0rem',
		fontWeight: 300,
		[MOBILE_MEDIA_QUERY]: {
			fontSize: '0.9rem',
		},
	},
	caption: {
		fontSize: '12.5px',
	},
}

export default typography
