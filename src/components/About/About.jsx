import React from 'react'
import imgabout from '../../assets/images/about.png'
import aboutcard from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom';

const About = () => {
   return (
      <section>
         <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

               {/*---about img---*/}
               <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                  <img src={imgabout} alt="" />
                  <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%]
                  lg:right-[22%]">
                     <img src={aboutcard} alt="" />
                  </div>
               </div>


               {/*---about content---*/}
               <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                  <h2 className='heading'>
                  Privileged to be among the nation's finest.
                  </h2>
                  <p className='text__para'>
                  I am truly grateful for the privilege of being a part of this exceptional medical team. The collective dedication to patient care and the unwavering commitment to excellence in our practice are what make this experience so rewarding. Working alongside highly professional doctors who share the same passion for healing and improving lives .
                  </p>
                  <p className="text__para mt-[30px]">
                  Together, we strive to provide the highest standard of care, and I am honored to contribute to this mission. The collaborative spirit, continuous learning, and patient-centered focus of this team inspire me daily, reinforcing my belief in the transformative power of healthcare.
                  </p>
                  <Link to='/'>
                     <button className='btn'>Learn More</button>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About