import React from 'react'
import Layout from './Layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'

//components
import Archives from './Archives'

//styled components
const Container = styled.div`
margin: 0 auto;
    width: 90%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 10rem;
`


export default ({ data: post }) => (
    <Layout>
        <Container>
            <div>
                <h1 style={{color: '#BF1363'}}>{post.markdownRemark.frontmatter.title}</h1>
                <h5>By {post.markdownRemark.frontmatter.author} - {post.markdownRemark.frontmatter.date}</h5>
                <div dangerouslySetInnerHTML={{
                    __html: post.markdownRemark.html
                }} />
            </div>
            <Archives />
        </Container>
    </Layout>
)

export const pageQuery = graphql`
    query ($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                date(formatString: "MMMM DD YYYY")
                author
            }
        }
    }
`