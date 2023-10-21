import React, { useState } from 'react'
import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BASE_URL
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const handleInputChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setLoginData({...loginData, [name]: value})
    }
    const handleSubmit = () => {
        axios.post(`${BASE_URL}/login`).then((response) => {
            console.log(response)
        })
    }
    return (
        <div>
        <form>
            <input type="text" name='username' />
            <input type="password" name='password' />
        </form>
        </div>
    )
}

export default Login
