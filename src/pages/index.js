import * as React from "react"
import { Link } from 'gatsby'
import { Button, Container, Grid } from '@material-ui/core/';
import style from './index.module.css'
import Layout from '../components/Layout'
import {showBlog} from '../components/Firebaseauth'
import Firebaseauth from '../components/Firebaseauth'
export default ({ data }) => {
  console.log(showBlog,"blogtype")
  const posts = data.allContentfulBlogPost.edges;
  console.log(posts)
  let twoBlogs=posts.slice(0,2);
  if(showBlog){
    twoBlogs=posts;
  }
  return (
    <div>
    <Layout>
      
        {
          twoBlogs.map((post,key) => {
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
      </Layout>
      <Firebaseauth />
      </div>
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



