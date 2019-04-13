import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageTitle from '../components/PageTitle'
import withRoot from '../utils/withRoot'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  contentFrame: {
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: theme.typography.fontFamily,
	fontWeight: 100,
	
	[theme.breakpoints.up('sm')]: {
		padding: 0
	}
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
  },
})

const IndexPage = ({ classes }) => (
  <Layout>
    <SEO
      title="Gasworks, kontorfællesskab på Vesterbro"
      keywords={[`kontorfællesskab`, `egen plads`, `eget skrivebord`]}
    />

    <PageTitle title="Velkommen til Gasworks" />

    <div className={classes.contentFrame}>
      <p>
        Din egen plads i kontorfællesskab til en overkommelig pris i hjertet af
        København
      </p>

      <div className={classes.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/YHmPLkkpgR4?autoplay=0&showinfo=0&controls=0&autohide=1"
          className={classes.videoFrame}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <p>
        Lad os endelig høre fra dig, hvis du er interesseret i at vide mere. Læs
        vores <Link to={`faq`}>FAQ</Link> for mere info eller kom forbi til at kop kaffe
      </p>
    </div>
  </Layout>
)

export default withRoot(withStyles(styles, { withTheme: true })(IndexPage))
