import React from 'react'
import "../App.css"
const footer = () => {
  return (
    <>
     <div className="footer">
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="https://instagram.com/ssdc.sliet?igshid=OGQ5ZDc2ODk2ZA=="><i className='fa-brands fa-instagram'></i></a>
          <a href="https://www.linkedin.com/company/sliet-software-developement-club/"><i className='fa-brands fa-linkedin'></i></a>
          <a href="https://github.com/SSDC-SLIET"><i class="fa-brands fa-github"></i></a>
          <a href="https://twitter.com/home"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.youtube.com/@slietsoftwaredevelopmentcl9221"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div className="ContactUs">
        <h5>For queries, Contact:</h5>
          <h6><span className='designer'>Harsh Sonkar</span>: 9888982877</h6>
        </div>
        
      </div>
      <div className="footerBottom">
          <p style={{marginBottom: "0"}}>Copyright &copy; <span className='designer'>SSDC</span> 2023</p>
        </div>
      </div>
    </>
  )
}

export default footer