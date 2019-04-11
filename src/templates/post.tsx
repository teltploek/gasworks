import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
	const post = data.markdownRemark
	return (
		<Layout>
			<h1>{post.title}</h1>
			<div  dangerouslySetInnerHTML={{ __html: post.html }}></div>
		</Layout>
	)
}

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