// import React from 'react'
// import '../App.css'
// import Home from '../screens/Home'
// import About from '../screens/About'
// import Contact from '../screens/Contact'
// import { motion } from 'framer-motion'


// const Navbar = () => {
//   return (
//     <>
//       <motion.nav
//         initial={{ y: -150 }}
//         animate={{ y: -5 }}
//         transition={{ delay: 1 }}
//       >
//         <a href="Home.jsx"><li>Home</li></a>
//         <a href="#about"><li>About me</li></a>
//         <li>Skills</li>
//         <li>Resume</li>
//         <a href="#contact"><li>Contact me</li></a>
//       </motion.nav>
//       <div id="home"><Home /></div>
//       <div id="about"><About /></div>
//       <div id="contact"><Contact /></div>
//     </>
//   )
// }

// export default Navbar


import '../App.css'
import Home from '../screens/Home'
import About from '../screens/About'
import Contact from '../screens/Contact'
import Skills from '../screens/Skills'
import Resume from '../screens/Resume'


const Navbar = () => {


  return (
    <>
      <nav>
        <div className="navbar">
          <a href="#home"><li>Home</li></a>
          <a href="#about"><li>About me</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#resume"><li>Resume</li></a>
          <a href="#contact"><li>Contact me</li></a>
        </div>
      </nav>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="resume"><Resume /></div>
      <div id="contact"><Contact /></div>
    </>
  )
}

export default Navbar