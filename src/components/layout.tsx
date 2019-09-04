import React from 'react'
import Grid from '@material-ui/core/Grid'
import SiteNavigation from './SiteNavigation'
import { withStyles } from '@material-ui/core/styles'
import wallpaper from '../images/office/new-office-01.jpg'

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
    paddingBottom: '80px',
    margin: 0,

    [theme.breakpoints.up('sm')]: {
      marginTop: '200px',
	  height: 'auto',
	  paddingBottom: 0
    },
  },

	wallpaperBg: {
		position: 'fixed',
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		width: '100%',
		height: '100%',
		background: `url(${wallpaper})`,
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
		filter: 'grayscale(100%) contrast(50%) brightness(40%)',
		zIndex: 1
	},

	content: {
		position: 'relative',
		zIndex: 2
	}
})

const Layout = ({ children, classes }) => (
	<React.Fragment>
		{Boolean(typeof location !== 'undefined') && Boolean(location) && Boolean(location.pathname === '/') && (
			<div className={classes.wallpaperBg} />
		)}
		<div className={classes.content}>
			<SiteNavigation bright={Boolean(typeof location !== 'undefined') && Boolean(location) && Boolean(location.pathname === '/')} />
			<Grid container>
				<Grid item xs={12}>
					<div className={classes.pageContainer}>
						<main>{children}</main>
					</div>
				</Grid>
			</Grid>
		</div>
	</React.Fragment>
)

export default withStyles(styles)(Layout)
