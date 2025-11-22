import React, { useEffect } from 'react'
import { gsap } from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from 'framer-motion'
import Header from './Header'
import Earth from '../Images/Earth.jpg'
import '../Style/HomePage.css'
gsap.registerPlugin(ScrollTrigger)


const HomePage = () => {
  let mm = gsap.matchMedia()
    useEffect(() => {
       mm.add("(min-width:1024px)", () =>{ 
        gsap.to(".Earth", {
          scrollTrigger: {
            trigger: ".Earth",
            start: "+=300 top",
            end: "+=100",
            scrub: 1,
            pin: true,
          },
          scale: 0.5,
          y: 70,
          x: 350,
          rotation: 100,
          delay: 1,
        })});
      }, []); 
  return (
    <div className='h-fit w-screen flex flex-col justify-center items-center bg-black overflow-hidden '>
     <Header />
     <img src={Earth} alt="Earth"  className='Earth h-[190vh] max-lg:h-[110vh] max-md:h-[85vh] max-sm:h-[70vh] w-screen mt-80 z-0'/>
     <div className='absolute h-70 w-100 top-60 z-10 text-center items-center flex flex-col'>
        <p className='font-Alumi  text-xl text-white font-light'>Start-up that helps the farmers</p>
        <h1 className='font-Alumi text-7xl text-white font-bold tracking-widest'>Skylitix: <br /> <span className='font-normal tracking-wide text-nowrap max-md:text-5xl'>Satellites In Agronomia</span> </h1>
        <button className="cta ml-3 mt-7">
            <span className="hover-underline-animation text-white font-Alumi font-bold"> Explore </span>
            <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                stroke='white'
                fill='white'
                width="30"
                height="10"
                viewBox="0 0 46 16"
            >
                <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
                ></path>
            </svg>
        </button>
     </div>
     <motion.div 
     initial={{ opacity:0 ,x:-100 }}
     whileInView={{ opacity:1, x:0}}
     transition={{ duration: 2 }}
     className='absolute max-md:relative h-screen w-[60vw] top-[140vh] max-md:top-30 max-sm:top-50 max-md:text-center max-md:items-center max-md:text-nowrap max-md:w-screen left-4 max-md:left-0 z-20 text-start flex flex-col '>
      <h1 className='text-9xl text-white font-Alumi font-bold'>Skylitix</h1>
      <p className='text-xl text-wrap max-w-[40vw] max-md:max-w-full  text-white font-Alumi font-light'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam rem minus ex eius, nemo voluptate sit quibusdam illum excepturi cumque neque, praesentium reprehenderit eos quam sint adipisci ratione consectetur. Tempora.
      </p>
     </motion.div>
     <div className='h-screen w-screen -mt-40 max-lg:mt-100 max-md:-mt-20 max-sm:mt-20 mb-5 text-center items-center justify-center flex flex-col'>
     
      <motion.h1 
      initial={{opacity:-10, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:2}}
      className='text-9xl text-white font-Alumi font-bold tracking-wider'>Services</motion.h1>
     
      <motion.p 
      initial={{opacity:-10 , y:-100}}
      whileInView={{opacity:1 , y:0}}
      transition={{duration:3}}
      className='text-xl text-wrap max-w-[60vw] text-white font-Alumi font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus enim quas a, corporis dignissimos ratione, alias perspiciatis qui similique laborum est voluptatem. Dignissimos tenetur expedita optio a. Molestiae, neque corporis qui praesentium nemo esse saepe earum deserunt beatae modi dignissimos a enim culpa illum, mollitia harum itaque eveniet sint at?</motion.p>
      
      <motion.div className='w-screen h-fit gap-30 max-md:gap-10 mt-20 items-center justify-center flex'>
        <div className='h-100 w-50 bg-yellow-400 rounded-3xl grayscale hover:grayscale-0 hover:transition-all'></div>
        <div className='h-100 w-50 bg-yellow-400 rounded-3xl grayscale hover:grayscale-0'></div>
        <div className='h-100 w-50 bg-yellow-400 rounded-3xl grayscale hover:grayscale-0'></div>
      </motion.div>

    </div>
    </div>
  )
}

export default HomePage