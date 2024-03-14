import React from "react";

// Images
import project1 from "../assets/web1.png"
import goodcooking from "../assets/2.jpg"
import devilsmok from "../assets/1.jpg"
import pro2 from "../assets/web2.png"
import pro3 from "../assets/web4.png"
import pro4 from "../assets/web5.png"


const Portfolio = () =>{
    return(
        <div class=" py-6 max-w mx-auto" id="portfolio">

            <div class=" mx-auto px-4 md:px-8 max-w-[1240px]">

                {/* Portfolio intro */}
                <div class=" mb-4 flex items-center justify-between gap-8">

                    <div class=" flex flex-col gap-4">

                        <h2 class=" text-2xl lg:text-3xl text-white">
                            My 
                            <span >
                                Portfolio
                            </span>

                        </h2>
                        <p className=" text-gray-500">
                            These are my latest projects for diferent clients.
                        </p>

                    </div>

                </div>



                {/* portfolio */}
                <div class=" grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

                    {/* project 01 good cooking times */}
                    <a href="/" 
                        className=" group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">

                            <img 
                            src={goodcooking} 
                            alt="" 
                            className=" h-full w-full object-cover object-center transition
                                        duration-200 group-hover:scale-110"/>

                    </a>

                    {/* project 02 */}
                    <a href="/" 
                        className=" group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">

                            <img 
                            src={pro2} 
                            alt="" 
                            className=" h-full w-full object-cover object-center transition
                                        duration-200 group-hover:scale-110"/>

                    </a>

                    {/* project 03 devil smok */}
                    <a href="/" 
                        className=" group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">

                            <img 
                            src={devilsmok} 
                            alt="" 
                            className=" h-full w-full object-cover object-center transition
                                        duration-200 group-hover:scale-110"/>

                    </a>

                    {/* project 04 */}
                    <a href="/" 
                        className=" group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">

                            <img 
                            src={pro3} 
                            alt="" 
                            className=" h-full w-full object-cover object-center transition
                                        duration-200 group-hover:scale-110"/>

                    </a>

                    {/* project 05 */}
                    <a href="/" 
                        className=" group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">

                            <img 
                            src={pro4} 
                            alt="" 
                            className=" h-full w-full object-cover object-center transition
                                        duration-200 group-hover:scale-110"/>

                    </a>
                    {/* project 06 */}
                    <a href="/" 
                        className=" group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">

                            <img 
                            src={project1} 
                            alt="" 
                            className=" h-full w-full object-cover object-center transition
                                        duration-200 group-hover:scale-110"/>

                    </a>
                    






                </div>




            </div>
            
        </div>
    )
}


export default Portfolio