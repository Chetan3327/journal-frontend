import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const BASE_URL = process.env.REACT_APP_BASE_URL
const EditorialBoard = () => {
  const navigate = useNavigate()
  const [editorialMembers, setEditorialMembers] = useState(null)
  useEffect(() => {
    axios.get(`${BASE_URL}/board/editorialboard`).then((response) => {
      setEditorialMembers(response.data)
    })
  }, [])
  return (
    <div>
      <div className="heading">Editorial Board</div>
      {editorialMembers ? (<div className="members">
        {editorialMembers.map((member, idx) => {
          return(
            <div className="editorial-member-card" key={idx}>
              <div className="Title">{member.Title}</div>
              <div className="Name">{member.Name}</div>
              <div className="Area_of_Specialization">{member.Area_of_Specialization}</div>
              <div className="Designation">{member.Designation}</div>
              <div className="Institute">{member.Institute}</div>
              <div className="Email">{member.Email}</div>
            </div>
          )
        })}
      </div>) : (<p className='loading'>Loading members...</p>)}
      <button onClick={() => navigate('/addEditorialmember') }>Add Editorial Board Member</button>

    </div>
  )
}

export default EditorialBoard
