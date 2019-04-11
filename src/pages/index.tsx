import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Title of IndexPage" keywords={[`foo`, `bar`]} />
    
	<h1>Welcome</h1>

	<p>Affordable, Friendly, Open Minded Office Community in the very heart of Copenhagen</p>

	<p>We currently have</p>

	<p>1 available spot left</p>

	<p>Please let us know if you’re interested in knowing more or read our FAQ for more info test</p>
  </Layout>
)

export default IndexPage
