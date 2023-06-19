import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        // data.allFile.nodes.map(item => (
        //   <li key={item.name}>
        //     {item.name}
        //   </li>
        // ))
        data.allMdx.nodes.map((item) => (
            <article key={item.id}>
              <h2>
                <Link to={`/blog/${item.frontmatter.slug}`}>
                  {item.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {item.frontmatter.date}</p>
              {/* <p>{item.excerpt}</p> */}
            </article>
          ))
      }
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allFile {
//       nodes {
//         name
//       }
//     }
//   }
// `

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage