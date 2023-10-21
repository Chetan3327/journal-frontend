import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const BASE_URL = process.env.REACT_APP_BASE_URL
const Contact = () => {
  const navigate = useNavigate()
  const [contacts, setContacts] = useState(null)
  useEffect(() => {
    axios.get(`${BASE_URL}/contacts`).then((response) => {
      setContacts(response.data)
      console.log(response)
    })
  }, [])
  return (
    <div>
      <div className="heading">Contact Us</div>
      Published by

      {contacts ? (<div className="contacts">
        {contacts.map((contact) => {
          return(
            <div className="contactCard">
              <div className='contact-name'>{contact.Name}</div>
              <div className="Title">{contact.Title}</div>
              <div className="Bodh">{contact.Bodh}</div>
              <div className='Designation'>{contact.Designation}</div>
              <div className='Email'>{contact.Email}</div>
              <div className='Phone'>{contact.Phone}</div>
            </div>
          )
        })}
      </div>): (<span className='loading'>Loading contacts...</span>)}

        <button onClick={() => navigate('/addContact')}>Add Contacts</button>
    </div>
  )
}

export default Contact
