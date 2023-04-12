import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
  return (
    <div className='container'>
        <div className='not-found'>
            <div className='text-center mb-4'><h1>404 Page Not Found</h1></div>
            <div className='d-flex justify-content-center'>
                <button className='button' onClick={() => navigate('/')}>Got To home</button>
            </div>
        </div>
    </div>
  )
}

export default NotFound