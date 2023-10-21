import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    const [dropdownVisible, setDropDownVisible] = useState(false)
    const handleDropdownClick = () => {
        setDropDownVisible(!dropdownVisible);
    };
    const [authordropdownVisible, setAuthorDropDownVisible] = useState(false)
    const AuthorhandleDropdownClick = () => {
        setAuthorDropDownVisible(!dropdownVisible);
    };
    const [ReviewDropdownVisible, setReviewDropDownVisible] = useState(false)
    const ReviewhandleDropdownClick = () => {
        setReviewDropDownVisible(!dropdownVisible);
    };
    return (
        <div>
            <span className="link" onClick={() => navigate('/')}>Home</span>
            <div className="dropdown" onClick={handleDropdownClick}>
                Boards
                {dropdownVisible && (
                    <div className="dropdown-content">
                        <span className="link" onClick={() => navigate('/AdvisoryBoard')}>AdvisoryBoard</span>
                        <span className="link" onClick={() => navigate('/EditorialBoard')}>EditorialBoardBoard</span>
                    </div>
                )}
            </div>
            <span className="link" onClick={() => navigate('/Aim')}>Aim</span>
            <div className="dropdown" onClick={AuthorhandleDropdownClick}>
                Authors
                {authordropdownVisible && (
                    <div className="dropdown-content">
                        <span className="link" onClick={() => navigate('/submitManuscript')}>Submit Manuscript</span>
                        <span className="link" onClick={() => navigate('/guidelines')}>Authors Guidelines</span>
                    </div>
                )}
            </div>
            <span className="link" onClick={() => navigate('/Policy')}>Policy</span>
            <span className="link" onClick={() => navigate('/Faqs')}>FAQ'S</span>   
            <span className="link" onClick={() => navigate('/contact')}>Contact Us</span>   
            <div className="dropdown" onClick={ReviewhandleDropdownClick}>
                Peer Reviews
                {ReviewDropdownVisible && (
                    <div className="dropdown-content">
                        <span className="link" onClick={() => navigate('/PeerReview')}>Peer Review Process</span>
                        <span className="link" onClick={() => navigate('/joinReviewer')}>Join as Reviewer</span>
                    </div>
                )}
            </div>
            <span className="link" onClick={() => navigate('/login')}>Admin Login</span>   
        </div>
    )
}

export default NavBar
