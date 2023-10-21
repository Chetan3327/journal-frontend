import React, { useState } from 'react'

const ReviewerForm = () => {
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState("")
    const handleInputChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
        console.log(formData)
        setErrorMessage("")
    }    
    const handleSubmit = (e) => {
        e.preventDefault();
        const requiredFields = ['author', 'title', 'abstract', 'Keywords'];
        const missing = requiredFields.filter((field) => !formData[field]);

        if (missing.length === 0) {
        // All required fields are filled, you can submit the form
        console.log('Form submitted:', formData);
        } else {
        // Some fields are missing, update the missingFields state
        setErrorMessage(missing + "are missing");
        }
    }
    return (
        <div>
            <div className="heading">Submit Manuscript</div>
            <form>
                <input type="text" name='email' placeholder='email' required onChange={(e) => handleInputChange(e)}/>
                <input type="text" name='fullname' placeholder='fullname' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='Designation' placeholder='Designation' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='number' placeholder='number' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='area' placeholder='area' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='Institute' placeholder='Institute' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='InstituteWebsite' placeholder='InstituteWebsite' onChange={(e) => handleInputChange(e)} />
                <input type="file" name='cv' placeholder='cv' onChange={(e) => handleInputChange(e)} />
                <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
            {errorMessage && (<p>{errorMessage}</p>)}
        </div>
    )
}

export default ReviewerForm
