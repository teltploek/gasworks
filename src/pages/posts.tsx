import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }) => {
	return (
		<Layout>
			<SEO title="posts" keywords={[`foo`, `bar`]} />
			<ul>
			{data.allMarkdownRemark.edges.map(({ node, index }) => (
				<li key={index}>
					<Link to={node.fields.slug}> {node.frontmatter.title}</Link>
				</li>
			))}
			</ul>
		</Layout>
  )
}

export const query = graphql`
  query {
	allMarkdownRemark(
		filter: { fileAbsolutePath: {regex : "\/posts/"} }
	  ) {
		edges {
		  node {
			id
			frontmatter {
			  title
			}
			fields {
			  slug
			}
		  }
		}
	  }
  }
`