import * as React from 'react'
import injectSheet, { StyleSheetThemed } from 'react-jss'

const styles: StyleSheetThemed = (theme: any) => ({
  '@global': {
    html: {
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      // Change from `box-sizing: content-box` so that `width`
      // is not affected by `padding` or `border`.
      boxSizing: 'border-box',
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0, // Remove the margin in all browsers.
      backgroundColor: theme.colors.neutralGrey5,
	  fontFamily: theme.typography.fontPrimary,
	  
      '@media print': {
        // Save printer ink.
        backgroundColor: '#fff',
      },
    },
    p: {
      marginBottom: theme.base * 2,
    },
  },
})

class CssBaseline extends React.Component {
  public render() {
    return this.props.children
  }
}

export default injectSheet(styles)(CssBaseline)
