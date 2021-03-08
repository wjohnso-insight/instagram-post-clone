import React, { ReactElement } from 'react'
import styled from 'styled-components'

const AppWrapper = styled.div`
  //* iPhone 11 Max Aspect Ratio
  height: 896px;
  width: 414px;
  background-color: lightpink;
`

export default function App(): ReactElement {
  return (
    <AppWrapper>
      App Works
    </AppWrapper>
  )
}
