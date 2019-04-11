import {
    createMuiTheme
} from '@material-ui/core/styles';

// Create a theme with Gatsby brand colors. You can choose your own
const theme = createMuiTheme({
    typography: {
		useNextVariants: true,
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'europa',
			'sans-serif'
		].join(',')
    }
});

export default theme;