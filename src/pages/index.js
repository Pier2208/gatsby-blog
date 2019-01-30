import React from 'react'
import Layout from '../components/Layout'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

//styled components
const Post = styled.div`
    display: flex;
    flex-flow: column;
    width: 50%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 1rem 2rem;
    margin: 2rem 0;
`

const Posts = styled.section`
    display: flex;
    flex-flow: column;
`

//queries
const POSTS_QUERY = graphql`
    {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    id
                    excerpt
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`

const Index = () => (
    <Layout>
        <StaticQuery
            query={POSTS_QUERY}
            render={data =>
                <Posts>
                    <h2>Total posts: {data.allMarkdownRemark.totalCount}</h2>
                    {data.allMarkdownRemark.edges.map(({ node: post }) =>
                        <Post key={post.id}>
                            <Link to={`posts${post.fields.slug}`}>
                                <h3>{post.frontmatter.title}</h3>
                                <p>{post.excerpt}</p>
                            </Link>
                        </Post>
                    )}
                </Posts>
            }
        />
    </Layout>
)

export default Index
