import React from 'react'
import {Title} from './styled-components'


export default function MainTitle(props) {
    const {titleValue} = props
  return (
    <div>
        <Title>{titleValue}</Title>
    </div>
  )
}
