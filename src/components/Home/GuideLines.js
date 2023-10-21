import React from 'react'
import { useNavigate } from 'react-router-dom'
const GuideLines = () => {
    const navigate = useNavigate()
    return (
        <div>
        <div className="heading">GuideLines</div>
        <div className="content">
        Authors are invited to submit original and unpublished 6-page papers in IEEE double column format in MS Word document formats (.doc or.docx) to be considered for publication as a regular paper in future issues of this journal. Authors can submit their manuscripts through email or submit online at the website of this journal mentioned below.
        </div>
        <div className="link" onClick={() => navigate('/guidelines')}> check guidelines here! </div>
        </div>
    )
}

export default GuideLines
