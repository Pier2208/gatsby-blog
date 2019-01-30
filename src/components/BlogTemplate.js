import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

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

const Pages = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
`

export default ({ data, pageContext }) => {

    const { isFirstPage, isLastPage, currentPage } = pageContext
    const nextPage = `/blog/${String(currentPage + 1)}`
    const prevPage = currentPage -1 === 1 ? '/blog' : `/blog/${String(prevPage - 1)}`

    return (
        <Posts>
            {
                data.allMarkdownRemark.edges.map(({ node: post }) =>
                    <Post key={post.id}>
                        <Link to={`posts${post.fields.slug}`}>
                            <h3>{post.frontmatter.title}</h3>
                            <h5>By {post.frontmatter.author} - {post.frontmatter.date}</h5>
                            <p>{post.excerpt}</p>
                        </Link>
                    </Post>
                )
            }
            <Pages>
                {
                    !isFirstPage ? <Link to={prevPage}>Previous Page</Link> : 'Previous Page'
                }
                {
                    !isLastPage ? <Link to={nextPage}>Next Page</Link> : 'Next Page'
                }
            </Pages>
        </Posts>
    )
}

export const query = graphql`
    query ($limit: Int!, $skip: Int!) {
        allMarkdownRemark(limit: $limit, skip: $skip) {
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
                    author
                    date
                    }
                }
            }
        }
    }
    `


