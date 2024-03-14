import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'


const Contact = () => {
    return(
        <div className=" flex justify-center my-5 h-full sm:h-[70vh] items-center " id="contact">

            <div className=" max-w-[1200px] mx-auto">

                <div className=" grid-flow-col-dense md:grid-cols-2 md:flex mt-10 items-center lg:flex bg-gray-800 rounded-xl ">


                    <div className=" p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">

                        <h1 className="text-4xl sm:text-5xl text-white">
                            Contact 
                            <span>
                                Me
                            </span>

                        </h1>

                        <p className=" text-normal text-lg font-medium text-gray-400 mt-2">
                            Let's connected via LinkedIn <br/> or send me an e-mail
                        </p>

                        <div className=" flex items-center mt-2 text-gray-400">

                            {/* linkedIn icon */}
                            <a   target="_blank" href="https://www.linkedin.com/in/thilinaabey/"><AiFillLinkedin className="h-[40px] w-[40px]"/></a>
                            
                            

                            {/* my Name */}
                            <div className=" ml-4 text-md tracking-wide w-40">
                                <p> <a target="_blank" href="https://www.linkedin.com/in/thilinaabey/">Thilina Abeysinghe</a></p>

                            </div>

                        </div>

                    </div>

                    <form action="https://getform.io/f/pamzqyyb" method="POST" className=" p-6 flex flex-col justify-center mx-w-[700px]">

                        <div className=" flex flex-col">
                            <input type="text" name="name" id="name" placeholder="Full Name" 
                            className=" w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white" />

                        </div>

                        <div className=" flex flex-col">
                            <input type="email" name="email" id="email" placeholder="Email" 
                            className=" w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white" />

                        </div>

                        <div className=" flex flex-col">
                            <textarea type="text" name="message" id="message" placeholder="Your Message" 
                            className=" w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white" >
                            
                            </textarea>

                        </div>

                        
                        <button type="submit" 
                        className=" md:w-32 bg-primary-color text-white py-3 px-6 rounded-lg mt-3" >
                            Submit
                        
                        </button>

                        


                    </form>





                </div>

            </div>
            
        </div>
    )
    
}

export default Contact