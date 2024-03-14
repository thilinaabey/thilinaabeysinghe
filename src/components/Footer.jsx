import React from "react"
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

import { FaGithubSquare, FaInstagramSquare , FaLinkedin} from 'react-icons/fa'


const Footer = () => {
    return (
        <div className=" mt-12 w-max-[800px] border-t border-gray-500 text-center py-5 bg-[#232325]">

            <p className="my-5 text-gray-500 ">
            © 2024 Thilina Abeysinghe. All rights reserved.
            </p>

            <div className=" inline-flex text-gray-500 gap-4 text-3xl">



                <a target="_blank" href="https://www.linkedin.com/in/thilinaabey/"> <FaLinkedin className='h-[60px] w-[60px]'/></a>
                <a  target="_blank" href="https://www.github.com/thilinaabey/"><FaGithubSquare className='h-[60px] w-[60px]'/></a>
                <a  target="_blank" href="https://www.instagram.com/_kick_._/"><FaInstagramSquare className='h-[60px] w-[60px]'/></a>

                
                
            </div>
        </div>
    )
}


export default Footer