import axios from 'axios'
import React, { useState } from 'react'
const BASE_URL = process.env.REACT_APP_BASE_URL
const ContactForm = () => {
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState("")
  const handleInputChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
    setErrorMessage("")
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    
    axios.post(`${BASE_URL}/contacts`, formData).then((response) => {
      console.log(response)
    })
    
  }
  return (
    <div>
      <div className="heading">Contact Form</div>      
      <input type="text" name='Name' placeholder='Name' onChange={(e) => handleInputChange(e)} />
      <input type="text" name='Title' placeholder='Title' onChange={(e) => handleInputChange(e)} />
      <input type="text" name='Bodh' placeholder='Bodh' onChange={(e) => handleInputChange(e)} />
      <input type="text" name='Designation' placeholder='Designation' onChange={(e) => handleInputChange(e)} />
      <input type="text" name='Email' placeholder='Email' onChange={(e) => handleInputChange(e)} />
      <input type="text" name='Phone' placeholder='Phone' onChange={(e) => handleInputChange(e)} />
      <button onClick={(e) => handleSubmit(e)}>submit</button>
    </div>
  )
}

export default ContactForm
