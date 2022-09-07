import React from 'react'
import {useInfoContext} from './InfoContext'

export default function ShowInfo(props) {
    const {male, female} = useInfoContext()
    const {gender} = props
    
  return (
    <div>
        {gender === "male" && male.map((each, index) => {
            return ( 
                <ul key={index}>
                    <li>{each.name}</li>
                    <li>{each.gender}</li>
                    <li>{each.description}</li>
                </ul>
            )
        })}
        {gender === "female" && female.map((each, index) => {
            return (
                <ul key={index}>
                    <li >{each.name}</li>
                    <li>{each.gender}</li>
                    <li>{each.description}</li>
                </ul>
            )
        })}
    </div>
  )
}
