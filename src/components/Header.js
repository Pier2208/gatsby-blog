import React from 'react'
import styled from 'styled-components'
import { primaryColor, lightColor } from '../styles/colors'

//styled components
const HeaderWrapper = styled.header`
    width: 100%;
    height: 13rem;
    background-color: ${primaryColor};
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 100%;
    margin: 0 auto;
`

const HeaderTitleWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
`

const HeaderTitle = styled.h1`
    margin: 0;
    font-size: 4.5rem;
    color: ${lightColor};
`

const Tagline = styled.h3`
    margin: 0;
    font-size: 2.3rem;
    font-weight: 300;
    color: ${lightColor};
`

const Header = ({ siteTitle, siteDesc }) => (
    <HeaderWrapper>
        <HeaderContainer>
            <HeaderTitleWrapper>
                <HeaderTitle>
                    {siteTitle}
                </HeaderTitle>
                <Tagline>
                    {siteDesc}
                </Tagline>
            </HeaderTitleWrapper>
        </HeaderContainer>
    </HeaderWrapper>
)

export default Header
