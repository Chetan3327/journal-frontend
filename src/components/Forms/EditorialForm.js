import axios from 'axios'
import React, { useState } from 'react'
const BASE_URL = process.env.REACT_APP_BASE_URL
const EditorialForm = () => {
  const [formData, setFormData] = useState({})
  const handleInputChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    
    axios.post(`${BASE_URL}/board/editorialboard`, formData).then((response) => {
      console.log(response)
    })
    
  }
  return (
    <div>
      <div className="heading">Editorial Form</div>      
      <input type="text" name='Name' placeholder='Name' onChange={(e) => handleInputChange(e)} />
      <input type="text" name='Title' placeholder='Title' onChange={(e) => handleInputChange(e)} />
      <input type="text" name='Area_of_Specialization' placeholder='Area_of_Specialization' onChange={(e) => handleInputChange(e)} />
      <input type="text" name='Designation' placeholder='Designation' onChange={(e) => handleInputChange(e)} />
      <input type="text" name='Institute' placeholder='Institute' onChange={(e) => handleInputChange(e)} />
      <input type="text" name='Email' placeholder='Email' onChange={(e) => handleInputChange(e)} />
      <button onClick={(e) => handleSubmit(e)}>submit</button>
    </div>
  )
}

export default EditorialForm