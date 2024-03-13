import React from 'react'
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <>
      <div className="container">
         Made With  <span className='dil'>&#9829;</span> by <span className='git'><GitHubIcon/></span> <a href="https://github.com/ankitsingh1421/Image-finder"> Ankit Singh</a> 

      </div>
    </>
  )
}

export default Footer