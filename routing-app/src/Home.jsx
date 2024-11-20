import React from 'react'

const Home = () => {
  return (
    <div><div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://plus.unsplash.com/premium_photo-1675198764382-94d5c093df30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RpbGxuZXNzfGVufDB8fDB8fHww" className="d-block w-100" alt="img1"/>
      </div>
      <div className="carousel-item">
        <img src="https://plus.unsplash.com/premium_photo-1667126444822-94fb21279436?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVhdHVyZWR8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="img2"/>
      </div>
      <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1461696114087-397271a7aedc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxDOFNKOE16ak1mZ3x8ZW58MHx8fHx8" className="d-block w-100" alt="img3"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}

export default Home