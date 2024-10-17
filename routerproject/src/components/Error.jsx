import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
  return (
    <div className='error' > 
      <h3>An error occured</h3>
          <p>{error.message}</p>
          <button onClick={()=>navigate('/')} >Go to Home</button>
    </div>
  )
}
export default Error