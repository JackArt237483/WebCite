import React from 'react';
import Image from "../assets/My_bro.jpg"
import {FaGithub,FaYoutube,FaTelegram} from "react-icons/fa"
import {TypeAnimation} from "react-type-animation"
import {motion} from "framer-motion"
import {fadeIn} from "../variants"
import { Link } from 'react-scroll';

const Banner = () => {
  return(
    <section id="home" className='min-h-[85vh] lg:min-h-[78vh] flex items-center mt-[100px]'>
      <div className='container mx-auto pt-[150px]'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
             variants={fadeIn('up', 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}}
            className="text-[55px] font-bold leading-[0.8] first-letter:
            lg:text-[95px]">АРТЕМ <span> ХАРЧЕНКО</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white text-[40px]'>Я</span>
              <TypeAnimation
                sequence={[
                  "Веб-разработчик",
                  2000,
                  "В поисках знаний",
                  2000,
                  "Стремлюсь к совершенству",
                  2000,
                ]}
                speed={60}
                className='text-accent text-[29px]'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>Я начинающий разработчик с более чем полтора года опыта в создании веб-приложений и разработке пользовательских интерфейсов. В своей работе я сосредоточен на применении современных технологий и подходов для решения задач и создания эффективных решений. 
            </motion.p>
            <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12
            mx-auto lg:mx-0'>
              <Link
               activeClass="active"
               smooth={true}
               spy={true}
               offset={-200}
               to="contact"
              >
              <button className='btn btn-lg'>Связаться со мной</button>
              </Link>
            </motion.div>
            <motion.div
            variants={fadeIn('down', 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0'>
              <a href="#">
                <FaYoutube/>
              </a>
              <a href="#">
                <FaGithub/>
              </a>
              <a href="#">
                <FaTelegram  />
              </a>
            </motion.div>
          </div>
            <motion.div
              variants={fadeIn('down', 0.5)}
              initial="hidden"
              whileInView={"show"}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]
            '>
              <img src={Image} alt="" className="rounded-[100%]"/>
            </motion.div>
        </div>
      </div>
    </section>
  );

};

export default Banner;
