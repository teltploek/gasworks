import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageTitle from '../components/PageTitle'
import injectSheet from 'react-jss'

const styles = theme => ({
  '@global': {
    p: {
	  margin: 0,
	  fontWeight: 100
	},
	h3: {
		fontSize: '16px',
		fontWeight: 400
	},
	'.content-wrapper': {
		padding: '20px'
	},
    '.image__caption': {
      fontWeight: 300,
      padding: '20px',
      margin: 0,
    },
  },
  contentWrapper: {
    marginBottom: '100px',
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

export default injectSheet(styles)(ContentPage)

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
