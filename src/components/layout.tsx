import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import SiteNavigation from './SiteNavigation'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../getPageContext'
import theme from '../theme'

type ILayoutProps = {
  children: any
  classes: any
}

export interface ILayoutState {
  muiPageContext: any
}

const styles = {
  '@global': {
    body: {
      background: theme.palette.common.white,
      fontFamily: theme.typography.fontFamily,
	},
	'.wf-loading *': {
		opacity: 0
	},
	'.wf-active *, .wf-inactive *': {
		transition: 'opacity .5s ease-out'
	}
  },
  pageContainer: {
    padding: 0,
    background: '#fff',
    height: 'calc(100vh - 100px)',
    margin: 0,
  },
}

class Layout<T extends ILayoutProps> extends React.Component<T, ILayoutState> {
  public state: ILayoutState

  constructor(props) {
    super(props)
    this.state = {
      muiPageContext: getPageContext(),
    }
  }

  /* componentDidMount() {
	  // Remove the server-side injected CSS.
	  const jssStyles = document.querySelector('#jss-server-side')
	  if (jssStyles && jssStyles.parentNode) {
		jssStyles.parentNode.removeChild(jssStyles)
	  }
	} */

  render() {
    return (
      <JssProvider
        generateClassName={this.state.muiPageContext.generateClassName}
      >
        {/* MuiThemeProvider makes the theme available down the React
				  tree thanks to React context. */}
        <MuiThemeProvider
          theme={this.state.muiPageContext.theme}
          sheetsManager={this.state.muiPageContext.sheetsManager}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <SiteNavigation />
          <Grid container>
            <Grid item xs={12}>
              <div className={this.props.classes.pageContainer}>
                <main>{this.props.children}</main>
              </div>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </JssProvider>
    )
  }
}

export default withStyles(styles)(Layout)
