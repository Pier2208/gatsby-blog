import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import { StaticQuery } from 'gatsby'
import { GlobalStyle } from '../styles/globalStyles'

//queries
import { SITE_TITLE_QUERY } from '../queries'


const Layout = ({ children }) => (
    <StaticQuery
        query={SITE_TITLE_QUERY}
        render={({ site }) => (
            <>
                <Helmet
                    title={site.siteMetadata.title}
                    meta={[
                        { name: 'description', content: 'Web Development tutorials' },
                        { name: 'author', content: 'Pierrick Le Roy' },
                        { name: 'keywords', content: 'HTML, CSS, JavaScript, React, Redux, Gatsby, styled-components' },
                        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
                    ]}
                >
                    <html lang="en" />
                </Helmet>
                <GlobalStyle />
                <Header
                    siteTitle={site.siteMetadata.title}
                    siteDesc={site.siteMetadata.description}
                />
                <main>
                    {children}
                </main>
            </>
        )}
    />
)

export default Layout