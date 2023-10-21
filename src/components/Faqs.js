import axios from 'axios'
import React, { useEffect, useState } from 'react'
const BASE_URL = process.env.REACT_APP_BASE_URL
const Faqs = () => {
  const [faqs, setFaqs] = useState(null)
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState("")
  useEffect(() => {
    axios.get(`${BASE_URL}/faq`).then((response) => {
      setFaqs(response.data)
      console.log(response)
    })
  }, [])
  const handleInputChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
    setErrorMessage("")
    console.log(formData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!formData.Que || !formData.Ans) {
      setErrorMessage("Please fill All required fields!")
      return ;
    }
    console.log('submi')
    axios.post(`${BASE_URL}/faq`, formData).then((response) => {
      console.log(response)
      console.log('submitted')
      setErrorMessage("Faq submitted")
    })
  }
  const deleteFaq = (id) => {
    console.log(id)
    axios.delete(`${BASE_URL}/faq/${id}`).then((response) => {
      console.log(response)
    })
  }
  return (
    <div>
      <div className="heading">FAQ's</div>
      {faqs ? (<div className='faqDisplay'>
        {faqs.map((faq, idx) => {
          return (<div className='faq' key={idx}>
            <b>{faq.Que}</b> <br />
            <p>{faq.Ans}</p>
            <button onClick={() => deleteFaq(faq._id)}>Delete</button>
          </div>)
        })}
      </div>) : (<p className='loading'>Loading Faqs...</p>)}

      <div className="upload-faq">
        <input type="text" placeholder='question' name='Que' onChange={(e) => handleInputChange(e)}/>
        <input type="text" placeholder='answer' name='Ans' onChange={(e) => handleInputChange(e)}/>
        <button type="submit" onClick={(e) => handleSubmit(e)}>Add Faq</button>
        {errorMessage && (<p className='error'>{errorMessage}</p>)}
      </div>
    </div>
  )
}

export default Faqs
