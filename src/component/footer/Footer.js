import React from 'react'
import './footer.css'

const Footer = () => {
  return (

    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod lorem et neque malesuada, eu semper metus euismod.</p>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <div className="row">
              <div className="col-md-6">
              <p>Ngara, Nairobi</p>
              <p>(+254) 700654006</p>
                <p>info@mynewsapp.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer