import { graphql } from 'gatsby'

export const SITE_TITLE_QUERY = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`