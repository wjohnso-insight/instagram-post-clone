import React, { ReactElement } from 'react'
import styled from 'styled-components'

//TODO: [] Refactor to use image from global state

export enum Types{
    small = "small",
    large = "large"
}
interface Props {
   userId: number,
   type: Types 
}

const Wrapper = styled.div<{ size: string}>`
    height: ${(props) => props.size };
    width: ${(props) => props.size};
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    clip-path: circle(50% at 50% 50%);

    background-image: url('https://picsum.photos/200/300');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export default function ProfilePhoto({ userId, type }: Props): ReactElement {
    return (
        <Wrapper size={(type === "large" ? "50px" : "25px")} />
    )
}
