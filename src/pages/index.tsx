import React from 'react'
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
  },
})

const IndexPage = ({ classes }) => (
  <Layout>
    <SEO
      title="Gasworks, kontorfælleskab på Vesterbro"
      keywords={[`kontorfælleskab`, `egen plads`, `eget skrivebord`]}
    />

    <PageTitle title="Velkommen" />

    <div className={classes.contentFrame}>
      <p>
        Venligt indstillet, åbensindet, kontorfælleskab til en overkommelig pris
        i hjertet af København
      </p>

      <p>Vi har i øjeblikket</p>

      <p>1 ledig plads tilbage</p>

      <p>
        Lad os endelig høre fra dig, hvis du er interesseret i at vide mere. Læs
        vores FAQ for mere info eller kom forbi til at kop kaffe
      </p>
    </div>
  </Layout>
)

export default withRoot(withStyles(styles, { withTheme: true })(IndexPage))
