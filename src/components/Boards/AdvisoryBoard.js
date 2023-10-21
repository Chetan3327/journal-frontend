import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const BASE_URL = process.env.REACT_APP_BASE_URL
const AdvisoryBoard = () => {
    const navigate = useNavigate()
    const [boardMembers, setBoardMembers] = useState(null)
    const [advisoryboardMembers, setadvisoryBoardMembers] = useState(null)
    useEffect(() => {
        console.log(BASE_URL)
        axios.get(`${BASE_URL}/board/members`).then((response) => {
            console.log(response)
            setBoardMembers(response.data)
        })
        axios.get(`${BASE_URL}/board/advisoryboard`).then((response) => {
            setadvisoryBoardMembers(response.data)
            console.log(response)
        })
    }, [])

    return (
        <div>
            <div className="heading">Advisory Board</div>
            {advisoryboardMembers ? (<div className="members">
                {advisoryboardMembers.map((member, idx) => {
                    return (
                        <div className='member-card' key={idx}>
                            <span className="position">{member.position}</span>
                            <span className="member-name">{member.Name}</span>
                            <span className="Designation">{member.Designation}</span>
                            <span className="institute">{member.Institute}</span>
                        </div>
                    )
                })}
            </div>) : (<span className='loading'>Loading members...</span>)}
            <button onClick={() => navigate('/addAdvisorymember') }>Add Advisory Board Member</button>
            <div className="heading">Members</div>
            {boardMembers ? (<div className="members">
                {boardMembers.map((member, idx) => {
                    return (
                        <div className='member-card' key={idx}>
                            <div className="member-name">{member.Name}</div>
                            <span className="Designation">{member.Designation}</span>
                            <span className="institute">{member.Institute}</span>
                        </div>
                    )
                })}
            </div>) : (<span className='loading'>Loading members...</span>)}
                <button onClick={() => navigate('/addmember') }>Add Member</button>
        </div>
    )
}

export default AdvisoryBoard
