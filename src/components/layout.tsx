import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'react-jss'
import injectSheet from 'react-jss'
import AppShell from './AppShell'
import { Grid } from '@material-ui/core'
import SiteNavigation from './SiteNavigation'

type ILayoutProps = {
  children: React.ReactChildren
  classes: any
}

const styles = theme => ({
  pageContainer: {
    padding: 0,
    background: '#fff',
    height: 'calc(100vh - 100px)',
    margin: 0,
  },
})

const Layout = ({ children, classes }: ILayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <AppShell>
        <ThemeProvider theme={{}}>
          <>
            <SiteNavigation />
            <Grid container>
              <Grid item xs={12}>
                <div className={classes.pageContainer}>
                  <main>{children}</main>
                </div>
              </Grid>
            </Grid>
          </>
        </ThemeProvider>
      </AppShell>
    )}
  />
)

export default injectSheet(styles)(Layout)
