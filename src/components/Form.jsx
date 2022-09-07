import React, {useState} from 'react'
import {Button} from './styled-components'
import {useInfoContext} from './InfoContext'


export default function Form() {
    const {setForMale,setForFemale} = useInfoContext()

    const initialForm = {
        name: "",
        gender: "",
        description: ""
    }
    const [formData, setFormData] = useState(initialForm)


    const changeHandle = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        
    }

    const submitHandle = (event) => {
        event.preventDefault()
        console.log(formData)
        if (formData.gender === "male") {
            setForMale(formData)
            
        }else if (formData.gender === "female") {
            setForFemale(formData)

        }
    }
    
    return (
        <div id="form-container" >
            <form onSubmit={submitHandle}>
                <label>Name:</label>
                <br />
                <input name="name" type="text" placeholder="insert name..." onChange={changeHandle} />
                <br />
                <input name="gender" type="radio" value="male" onChange={changeHandle} />Male
                <input name="gender" type="radio" value="female" onChange={changeHandle} />Female
                
                <br />
                <label>Introduce yourself:</label>
                
                <br />
                <textarea name="description" placeholder="insert description..." onChange={changeHandle} />
                <br />
                <br />
                <Button>Submit</Button>
            </form>
        </div>
  )
}
