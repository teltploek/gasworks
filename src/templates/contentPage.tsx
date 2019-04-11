import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageTitle from '../components/PageTitle'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'

const styles = theme => ({
  '@global': {
    p: {
      margin: 0,
      fontWeight: 100,
      fontFamily: theme.typography.fontFamily,
    },
    h3: {
      marginTop: '40px',
      fontSize: '16px',
      fontWeight: 400,
      fontFamily: theme.typography.fontFamily,

      '&:first-of-type': {
        marginTop: '16px',
      },
    },
    '.content-wrapper': {
      padding: '20px',
    },
    '.image__caption': {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 300,
      padding: '20px',
      margin: 0,
    },
  },
  contentWrapper: {
	fontFamily: theme.typography.fontFamily,
    margin: '0 auto 140px auto',
	display: 'flex',
	flexDirection: 'column',

    [theme.breakpoints.up('sm')]: {
      maxWidth: '50vw',
    },
  },
})

const ContentPage = ({ data, classes }) => (
  <Layout>
    <SEO
      title="Billeder fra kontoret - Gasworks, kontorfælleskab på Vesterbro"
      keywords={[`kontorfælleskab`, `egen plads`, `eget skrivebord`]}
    />

    <PageTitle title={data.markdownRemark.frontmatter.title} />

    <div
      className={classes.contentWrapper}
      dangerouslySetInnerHTML={{
        __html: data.markdownRemark.html,
      }}
    />
  </Layout>
)

export default withRoot(withStyles(styles)(ContentPage))

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
