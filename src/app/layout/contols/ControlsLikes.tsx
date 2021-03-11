import React, { ReactElement } from 'react'
import styled from 'styled-components'

import ProfilePhoto, { Types }  from '../../layout/ProfilePhoto'

interface Props {
    
}

const Wrapper=styled.section`
    height: 40px;
    /* background-color: lightgreen; */
    display: flex;
`
const UserPhoto=styled.section`
    /* background-color: lightpink; */
    display: flex;
    justify-content: center;
    align-items: center;
`
const Info=styled.section`
    /* background-color: lightgray; */
    padding-left: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
`

const BoldText=styled.span`
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 700;
`

export default function ControlsLikes({}: Props): ReactElement {
    return (
        <Wrapper>
            <UserPhoto>
                <ProfilePhoto type={Types.small} userId={2} /> 
            </UserPhoto>
            <Info>
                Liked by <BoldText>{`{ user }`}</BoldText> and <BoldText>{` {post.likes.count} `}</BoldText>
            </Info>
        </Wrapper>
    )
}
