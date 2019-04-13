import React from 'react'
import Grid from '@material-ui/core/Grid'
import SiteNavigation from './SiteNavigation'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  '@global': {
    body: {
      background: `${theme.palette.common.white} !important`,
      fontFamily: theme.typography.fontFamily,
    }
  },
  pageContainer: {
    padding: 0,
    background: 'transparent',
    paddingBottom: '100px',
    margin: 0,

    [theme.breakpoints.up('sm')]: {
      marginTop: '200px',
	  height: 'auto',
	  paddingBottom: 0
    },
  },
})

class Layout extends React.Component {
  render() {
    const { children, classes } = this.props
    return (
      <div>
        <SiteNavigation />
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.pageContainer}>
              <main>{children}</main>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Layout)
