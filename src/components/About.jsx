import React, { useState } from "react";
import AboutImg from "../assets/my 3.jpg"
import CountUp from "react-countup";
import scrollTrigger from "react-scroll-trigger";


const About = () =>{
    const [ counterOn, setCunterOn] = useState(false);
    return(
        <scrollTrigger onEnter={() => setCunterOn(true) }>
        <div className=" py-10 text-white bg-[#232325] h-auto  items-center" id="about">

            <div className=" flex sm:flex-row flex-col-reverse items-center max-w-[1240px] 
                md:gap-6 gap-12 px-10 mx-auto ">


                <div>
                    <div className=" w-[400px] h-full items-center">
                        <img 
                        src={AboutImg} 
                        alt=""
                        className=" object-cover bg-gray-700 rounded-xl
                            h-[300px] filter grayscale brightness-50" />

                    </div>
                </div>

                <div>
                    <div className=" p-2 ">
                        <div className=" text-gray-300 my-3">
                            <h3 className=" text-4xl font-semibold mb-5">
                                About 
                                <span className=" primary-text">
                                    Me

                                </span>

                            </h3>

                            <p className=" text-justify  leading-7 w-11/12 mx-auto ">
                            Hi! I am Thilina Abeysinghe from Sri Lanka.  🇱🇰 <br/>
                            I turn your ideas into real life sites with great attention to detail and elegant animations. 
                             Additionally, 
                            I offer consulting services during your design phase with my experience in UI/UX and animation.

                            </p>

                                {/* More About details */}

                            <div className=" flex mt-10 items-center gap-7">

                                {/* projects */}
                                <div className=" bg-[#333333]/40 p-5 rounded-lg  max-h-[20vh] max-w-[200px]s">

                                    <h3 className=" md:text-4xl text-2xl font-semibold text-white">
                                        11
                                        {counterOn && <CountUp  start={1} end={11 } duration={3}/>  }
                                        

                                        
                                        <span className="primary-text">
                                            +
                                        </span>
                                        

                                    </h3>
                                    <p>
                                        <span className=" md:text-base text-xs">
                                            projects completed

                                        </span>
                                    </p>

                                </div>

                                {/* Years of experience */}
                                <div className=" bg-[#333333]/40 p-5 rounded-lg max-h-[20vh] max-w-[200px]">

                                    <h3 className=" md:text-4xl text-2xl font-semibold text-white">
                                        4
                                        <span className="primary-text">
                                            +
                                        </span>
                                        

                                    </h3>
                                    <p>
                                        <span className=" md:text-base text-xs">
                                            years experience

                                        </span>
                                    </p>

                                </div>

                                {/* Cliants */}
                                <div className=" bg-[#333333]/40 p-5 rounded-lg max-h-[20vh] max-w-[200px]">

                                    <h3 className=" md:text-4xl text-2xl font-semibold text-white">
                                        7
                                        <span className="primary-text">
                                            +
                                        </span>
                                        

                                    </h3>
                                    <p>
                                        <span className=" md:text-base text-xs">
                                            happy clients

                                        </span>
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>

        </scrollTrigger>
    )
}

export default About