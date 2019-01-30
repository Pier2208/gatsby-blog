import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'
import { GlobalStyle } from '../styles/globalStyles'


//components
import Header from './Header'

//styled components
const Main = styled.main`
    width: 90%;
    margin: 0 auto;
    font-size: 2rem;
`

//queries
const SITE_TITLE_QUERY = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`

const Layout = ({ children }) => (
    <StaticQuery
        query={SITE_TITLE_QUERY}
        render={data => (
            <>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        { name: 'description', content: 'Web Development tutorials' },
                        { name: 'author', content: 'Pierrick Le Roy' },
                        { name: 'keywords', content: 'HTML, CSS, JavaScript, React, Redux, Gatsby, styled-components' }
                    ]}
                >
                    <html lang="en" />
                </Helmet>
                <GlobalStyle />
                <Header
                    siteTitle={data.site.siteMetadata.title}
                    siteDesc={data.site.siteMetadata.description}
                />
                <Main>
                    {children}
                </Main>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout