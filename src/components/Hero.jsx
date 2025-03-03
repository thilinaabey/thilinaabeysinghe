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

          <div>
            <iframe src="https://www.fiverr.com/gig_widgets?id=U2FsdGVkX19qHNvrvJ1KbBps9IWZWkuMtGm7ntzOdEDMn/4fGw3mO8UbOqieSxnf4ibXXh9MZL/rO/jZuXSj6Ls1fxEfRVmjka3MSQrxumwaa/MFm8jx9bfoyKiRD2vIkdZJd53S0M3i9Kzl+2Nn+Htc0ba5jhO6qWP2O9PcXkEJhFKssVxEmg2hOOSk3qPvIvwq6X0qY4S4U7gqJ+XQl9kaDJXrSJa9CaA+CorOXa+MEgfwyBB6zrI8lGyLBwS5e7HATWj17Hn8M57ncwz7Vy1SQ+Q9iHTy/oWehJlVdTry+UuKb16ooSLdERT3Qm5QntKpvcCP/9H2nuVFhi21pYU3nhq+mkUZKufPsqNHqC3wEDwfcCrT2jKkn87XlQLsJDzBE0lKuiKNAbspp79RLH6A3oZvN4v9mlCOzxcM1LZNFne8Obn4I7rLc2GRbXQNIGA34DVPonsiNtsVzkxgm3LsE9N4BNJWkRhLYnK/7hiCK/J8D5CrbF5EYIkrOD+lfODxwXCchNzFaoTthKRn3Pg+OLWxZ3GstZ5jvGvKpFOABegISa2f+WJw8PGQWDHZ&affiliate_id=578200&strip_google_tagmanager=true" loading="lazy" data-with-title="true" class="fiverr_nga_frame" frameborder="0" height="350" width="100%" referrerpolicy="no-referrer-when-downgrade" data-mode="specific_gig" onload=" var frame = this; var script = document.createElement('script'); script.addEventListener('load', function() { window.FW_SDK.register(frame); }); script.setAttribute('src', 'https://www.fiverr.com/gig_widgets/sdk'); document.body.appendChild(script); " ></iframe>
          </div>
        
        </div>
    </div>
  )
}

export default Hero
