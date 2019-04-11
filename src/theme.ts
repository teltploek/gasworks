import createBreakpoints from './breakpoints';

export interface ITheme {
	base: number;
	spacing: any;
	grid;
	typography;
	borderRadius;
	shadow;
	colors;
	breakpoints;
}

const Theme: ITheme = {
	base: 16,
	spacing: '1rem',
	grid: {
		columns: 12,
		gutterWidth: '20px'
	},
	typography: {
		fontPrimary: "'Europa', sans-serif",
		fontRegular: "'Europa-Regular', sans-serif",
		fontBold: "'Europa-Bold', sans-serif",
	},
	borderRadius: {
		main: '5px'
	},
	shadow: {
		box: '0 4px 10px 0 rgba(0,0,0,0.1)',
		main: '0 0 10px 0 rgba(0,0,0,0.1)',
		hover: '0 0 20px 0 rgba(0,0,0,0.1)'
	},
	colors: {
		brandPrimary:       'hsl(223, 86%, 43%)',   // #0F46CD
		brandPrimaryDark:   'hsl(212, 100%, 20%)',  // #003067
		brandSecondary:     'hsl(177, 100%, 34%)',  // #00aea5
		brandTertiary:      'hsl(0, 0%, 13%)',      // #212121

		neutralGrey80:      'hsl(0, 0%, 20%)',      // #333333
		neutralGrey60:      'hsl(0, 0%, 40%)',      // #666666
		neutralGrey40:      'hsl(0, 0%, 60%)',      // #999999
		neutralGrey30:      'hsl(0, 0%, 70%)',      // #bdbdbd
		neutralGrey20:      'hsl(0, 0%, 80%)',      // #cccccc
		neutralGrey10:      'hsl(0, 0%, 90%)',      // #e5e5e5
		neutralGrey5:       'hsl(0, 0%, 95%)',      // #f2f2f2

		ctaGreen:           'hsl(177, 100%, 35%)',  // #00b0a8

		neutralWhite:       '#ffffff',
		neutralBlack:       '#000000',

		neutralError:       'hsl(356, 100%, 61%)', // #FF3945

		linkHover:			'hsl(223, 86%, 43%);'
	},
	breakpoints: createBreakpoints({
		xs: '0',
		sm: '576px',
		md: '768px',
		lg: '992px',
		xl: '1200px'
	})
};

export default Theme;