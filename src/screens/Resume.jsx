import cv from './cv2.pdf'

const Resume = () => {

  return (
    <>
      <div id='resume'>
        <h1>Resume</h1>
        <div className="div">
          <div className="div2">
            <h2>
              Get In Touch
            </h2>
            <h3>Email: </h3><span>aman22verma10@gmail.com</span><br />
            <h3>Mobile number: </h3><span>8188878968</span><br />
            <h2>Address</h2>
            <span>Vidhayak Road, Jairam Nagar, Fatehpur</span>
            <br />
            <br />
            <a href={cv} download><button className="btn">Download C.V</button></a>


          </div>
        </div>
      </div>
    </>
  )
};

export default Resume
