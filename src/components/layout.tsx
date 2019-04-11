import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import SiteNavigation from './SiteNavigation'

type ILayoutProps = {
  children: any
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
    )}
  />
)

export default withStyles(styles)(Layout)
