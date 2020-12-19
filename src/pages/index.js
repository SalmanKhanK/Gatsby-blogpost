import * as React from "react"
import { Link } from 'gatsby'
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Button, Container, Grid } from '@material-ui/core/';
import style from './index.module.css'
import Layout from '../components/Layout'
const options = {
  //   renderMark: {
  //     [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  //   },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        )
      },
    },
  }
export default ({ data }) => {
  const posts = data.allContentfulBlogPost.edges;
  
  return (
    <Layout>
      <div>
        {
          posts.map((post,key) => {
            const text=renderRichText(post.node.body,options)
            return (
              <Container maxWidth="sm" key={key}>
                <Grid item xs={12}>
                  <h1 className={style.heading}>{post.node.title}</h1>
                  <img src={`${post.node.image.fluid.src}`} className={style.img} />
                  <br />
                  <p>{post.node.excerpt.excerpt}</p>
                  <Link to={`/${post.node.slug}/`} className={style.linkStyle}>
                    <Button variant="contained">Read Moreee</Button>
                  </Link>
                </Grid>
              </Container>
            )
          })
        }
      </div>
      </Layout>
  )
}
export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          slug
          subtitle
          title
          body {
            raw
          }
          excerpt {
            excerpt
          }
          image {
            fluid {
                src
            }
          }
        }
      }
    }
  }
`



