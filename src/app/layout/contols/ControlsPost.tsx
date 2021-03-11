import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-solid-svg-icons'

interface Props {
    
}

const Wrapper=styled.section`
    height: 40px;
    display: flex;
    align-items: center;
    /* background-color: lightpink; */
`
const Icons=styled.section`
    /* background-color: lightgreen; */
    height: 100%;
    margin-left: 10px;
    display: flex;
    align-items: center;
`
const Bookmark=styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    margin-right: 10px;
    flex-grow: 1;
    /* background-color: lightpink; */
`
const Icon=styled.span`
    margin-right: 5px;
`

export default function ControlsPost({}: Props): ReactElement {
    return (
        <Wrapper>
            <Icons>
                <Icon>
                    <FontAwesomeIcon icon={faHeart} size={'2x'} />
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faComment} size={'2x'} />
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faPaperPlane} size={'2x'} />
                </Icon>
            </Icons>
            <Bookmark>
                <FontAwesomeIcon icon={faBookmark} size={'2x'} />
            </Bookmark>
        </Wrapper>
    )
}
