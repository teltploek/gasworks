import React from 'react'
import Grid from '@material-ui/core/Grid'
import SiteNavigation from './SiteNavigation'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  '@global': {
    body: {
      background: `${theme.palette.common.white} !important`,
      fontFamily: theme.typography.fontFamily,
    },
    '.wf-loading *': {
      opacity: 0,
    },
    '.wf-active *, .wf-inactive *': {
      transition: 'opacity .5s ease-out',
    },
  },
  pageContainer: {
    padding: 0,
    background: '#fff',
    height: 'calc(100vh - 100px)',
    margin: 0,

    [theme.breakpoints.up('sm')]: {
      marginTop: '200px',
      height: 'calc(100vh - 200px)',
    },
  },
})

class Page extends React.Component {
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

export default withStyles(styles)(Page)
