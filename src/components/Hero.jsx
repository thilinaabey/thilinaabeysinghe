import React from 'react'
import profilepic from '../assets/my.png'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import { FaGithubSquare, FaInstagramSquare , FaLinkedin} from 'react-icons/fa'

const Hero = () => {
  return (
    <div>
        <div className='my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row  
                        justify-center align-center' id='home'>
        
        <div className=' flex-col  mx-auto max-w-[1240px] h-[65vh] items-center px-10 my-20' >
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>Hi! I am Thilina</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "UX/Ui Designer",
                1000,
                "Content Writer",
                1000,
              ]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
            </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-xl sm:text-xl text-xl font-bold text-gray-500'>
                Welcome to my portfolio! <br/>
                            Explore my work and let's collaborate to bring your ideas to life!
                </p>
            </div>
            <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600  ">
                <a target="_blank" href="https://www.linkedin.com/in/thilinaabey/"> <FaLinkedin className='h-[80px] w-[80px]'/></a>
                <a  target="_blank" href="https://www.github.com/thilinaabey/"><FaGithubSquare className='h-[80px] w-[80px]'/></a>
                <a  target="_blank" href="https://www.instagram.com/_kick_._/"><FaInstagramSquare className='h-[80px] w-[80px]'/></a>
                
            </div>
            
        </div>

        <div className='my-auto'>
          <img className=' w-[300px] sm:w-[500px] mx-auto h-auto' src={profilepic} alt="profile pic" />
        </div>

        
        </div>
    </div>
  )
}

export default Hero
