import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageTitle from '../components/PageTitle'
import withRoot from '../utils/withRoot'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
	contentFrameWrapper: {
		maxHeight: '485px',
		transition: 'opacity .5s ease-in-out',
		maxWidth: '90%',
		margin: '40px auto 100px auto',
		overflowY: 'scroll',
		overflowX: 'hidden',
		'-webkit-overflow-scrolling': 'touch',

		[theme.breakpoints.up('sm')]: {
			margin: '0 auto',
			maxHeight: 'none'
		}
	},
  contentFrame: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: theme.typography.fontFamily,
	fontWeight: 100,
	color: '#fff',
	lineHeight: '24px',

	[theme.breakpoints.up('sm')]: {
		top: 'auto',
		left: 'auto',
		maxHeight: 'none',
		padding: 0,
		width: '30%',
	},

	[theme.breakpoints.up('md')]: {
		width: '60%',
		margin: '0 auto'
	},

	[theme.breakpoints.up('lg')]: {
		width: '35%'
	},

	'.body--menu-open &': {
		opacity: 0
	}
  },
  noSpacing: {
	  marginBottom: 0
  },
  largeText: {
	fontSize: '24px',
	marginBottom: '10px'
  },
  link: {
	  color: '#fff'
  },
  videoWrapper: {
    padding: '40px 20px',
  },
  videoFrame: {
	boxShadow: '0 6px 5px 0px rgba(85,85,85,0.6)',

	[theme.breakpoints.up('sm')]: {
		width: '600px',
		height: '320px'
	}
  }
})

const IndexPage = ({ classes }) => (
  <Layout>
    <SEO
      title="Gasworks, kontorfællesskab på Vesterbro"
      keywords={[`kontorfællesskab`, `egen plads`, `eget skrivebord`]}
    />

	<div className={classes.contentFrameWrapper}>
    <div className={classes.contentFrame}>
    	<PageTitle title="Velkommen til Gasworks" />

      <p className={classes.noSpacing}>
        Din egen plads i kontorfællesskab i ❤️af
        København
      </p>

	  <p className={classes.largeText}>
		  2.900 DKK / måned
	  </p>

	  <p className={classes.largeText}>
		  <strong>Vi har ledige pladser!</strong>
	  </p>
	  <Link className={classes.link} to={`kontakt`}>Kontakt os her</Link>
	  <br />

	  <p>
	  	Med i den faste leje hos Gasworks hører en fast skrivebordsplads, egen nøgle til kontoret - med alle typer offentlig transport i nærheden - kaffe, the og internet ad libitum, professionel rengøring og en herlig faglig atmosfære vedligeholdt af rare mennesker.
	  </p>

      {/* <div className={classes.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/YHmPLkkpgR4?autoplay=0&showinfo=0&controls=0&autohide=1"
          className={classes.videoFrame}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div> */}

      <p>
        Lad os endelig <Link className={classes.link} to={`kontakt`}>høre fra dig</Link>, hvis du er interesseret i at vide mere.</p>
		<p>Du kan også læse mere på vores <Link className={classes.link} to={`faq`}>FAQ</Link> for mere info eller kom forbi til ☕️
      </p>
    </div>
	</div>
  </Layout>
)

export default withRoot(withStyles(styles, { withTheme: true })(IndexPage))
