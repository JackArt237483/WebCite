import React from 'react';
import CountUp from "react-countup"
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
import {fadeIn} from "../variants"
import { Link } from 'react-scroll';

const About = () => {
  const [ref,inView] = useInView({
     threshold: 0.5,
  })

  return(
  <section id="about" className='section mt-[100px]' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div
         variants={fadeIn("right", 0.4)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount: 0.3}}
        className='flex-1 bg-about bg-contain  h-[540px]
        mix-blend-lighten bg-top rounded-[100%]'>
        </motion.div>
        <motion.div
         variants={fadeIn("left", 0.5)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>Обо мне</h2>
            <h3 className='h3 mb-4'>Я начинающий фронтенд-разработчик с годом опыта</h3>
            <p className='mb-6'>
              В течение последнего года я активно развиваюсь в сфере веб-разработки, работая над различными проектами, которые помогают мне совершенствовать свои навыки. 
            </p>
          <div className='flex'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient
              mb-2'>
                {
                  inView ? < CountUp  start={0} end={1} duration={3}/> :
                  null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Год<br/>
                Опыта
              </div>
            </div>
            <div className='ml-8'>
              <div className='text-[40px] font-tertiary text-gradient
              mb-2'>
                {
                  inView ? < CountUp start={0} end={10} duration={3}/> :
                  null}
                  шт
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Проектов<br/>
                Закончил
              </div>
            </div>
          </div>
          <Link
           activeClass="active"
           smooth={true}
           spy={true}
           offset={-200}
           to="contact"
          >
           <div className='flex mt-12 gap-x-8 items-center'>
              <button className='btn btn-lg'>Связаться со мной</button>
            </div>
          </Link>  
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
