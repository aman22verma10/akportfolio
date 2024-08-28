import React, { useEffect, useState } from 'react'
import image from './hh.png'
import cv from './cv2.pdf'

const text = ['Programmer', 'Frontend Developer', 'Tech Enthusiastic'];
const Home = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % text.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='home'>
      <div className="img">
        <img src={image} alt=" here is a photoes of owner" />
      </div>
      <div className="txt">


        <h1>Hello, it's me <br />Aman Kumar Verma</h1><h2>And I'm a {/*<span className="trans">Fullstack Developer</span>*/}
          <section className="animated">
            {text.map((text, i) => (
              <span key={i} style={{ opacity: i === index ? 1 : 0 }}>
                {text}
              </span>
            ))}
          </section>
        </h2>
        <p>"Hello! I'm Aman Kumar Verma, a passionate and skilled full stack developer.I'm thriving on turning ideas into innovative and user friendly web application and mobile application</p>


        <div className="social">
          <a href="https://www.instagram.com/aman_verma.2210//"><img src="https://images.template.net/76885/free-new-instagram-logo-vector-edit-online.jpg" alt="" className="media" /></a>
          <a href="https://www.linkedin.com/in/aman-kumar-verma-262095222/"><img src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg" alt="" className='media' /></a>
          <a href="https://x.com/AmanKumarV29416">
            <img src="https://banner2.cleanpng.com/20240119/bkq/transparent-x-icon-black-and-white-x-in-the-1710889063979.webp" alt="" className="media" />
          </a>
          <a href="https://www.facebook.com/a6388"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZVMWY4NGQ7O_aYRQGUnKKXZ5Q7JPrerBdA&s" alt="" className="media" /></a>
        </div>

        <div className="download" >
          <a href={cv} download><button className="btn">Download C.V</button></a>
          <a href="https://github.com/aman22verma10"><button className="btn">Visit Github</button></a>
        </div>
      </div>
    </div>
  )
}

export default Home