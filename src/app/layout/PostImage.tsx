import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

interface Props {
    postId: number
}

interface ImageResponse {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

const Wrapper=styled.section`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`

export default function PostImage({ postId }: Props): ReactElement {
    
    const [ imageData, setImageData ] = useState<ImageResponse | undefined>(undefined);

    useEffect(() => {
        const photoUrl = `https://jsonplaceholder.typicode.com/photos/${postId}`;
        axios.get(photoUrl).then(response => setImageData(response.data));
    })

    if(imageData === undefined){
        return (
            <Wrapper>
                Loading
            </Wrapper>
        )
    }else{
        return (
            <Wrapper>
                <Image src={imageData.url} alt={imageData.title} /> 
            </Wrapper>
        )
    }
 
}
