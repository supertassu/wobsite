import Typography from 'typography';

const typography = new Typography({
	baseFontSize: '18px',
	baseLineHeight: 1.45,
	headerFontFamily: [
		'Inter UI',
		'sans-serif'
	],
	bodyFontFamily: ['Inter UI', 'sans-serif']
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
	typography.injectStyles();
}

export default typography;
export const {rhythm, scale} = typography;