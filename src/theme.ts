import {
    createMuiTheme
} from '@material-ui/core/styles';

// Create a theme with Gatsby brand colors. You can choose your own
const theme = createMuiTheme({
    typography: {
		useNextVariants: true,
		fontFamily: [
			'europa',
			'sans-serif'
		].join(',')
    }
});

export default theme;