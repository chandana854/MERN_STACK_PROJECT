import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Event's planner</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>Plan Events</label>
          <div>
            <input type="text" placeholder="E-mail"/>
            <button>Sign up</button>
          </div>
          <p>Sign up with your email address to receive news! and updates</p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
