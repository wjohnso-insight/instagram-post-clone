import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Header = styled.header<{ fontSize: string}>`
    font-family: 'Grand Hotel', cursive;
    font-size: ${(props) => props.fontSize};
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
interface Props{
    fontSize: string
}

export default function Banner({ fontSize }: Props): ReactElement {
    return (
        <Header fontSize={fontSize}>
            Insightgram
        </Header>
    )
}
 