import React, { useState } from 'react'

const PaperForm = () => {
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
                <input type="text" name='author' placeholder='author' required onChange={(e) => handleInputChange(e)}/>
                <input type="text" name='authorEmail' placeholder='authorEmail' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='Address' placeholder='Address' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='City' placeholder='City' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='Country' placeholder='Country' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='title' placeholder='title' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='area' placeholder='area' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='abstract' placeholder='abstract' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='Keywords' placeholder='Keywords' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='FirstReviewer' placeholder='FirstReviewer' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='emailFirstReviewer' placeholder='emailFirstReviewer' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='SecondReviewer' placeholder='SecondReviewer' onChange={(e) => handleInputChange(e)} />
                <input type="text" name='emailSecondReviewer' placeholder='emailSecondReviewer' onChange={(e) => handleInputChange(e)} />
                <input type="file" name='pdf' placeholder='pdf' onChange={(e) => handleInputChange(e)} />
                <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
            {errorMessage && (<p>{errorMessage}</p>)}
        </div>
    )
}

export default PaperForm
