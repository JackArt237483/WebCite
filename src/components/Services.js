import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "React/Vue",
    description: "Создание динамичных интерфейсов и компонентов с использованием React.",
    link: "Learn more"
  },
  {
    name: "HTML/CSS/JS",
    description: "Разработка адаптивных и кроссбраузерных веб-страниц с использованием HTML и CSS.",
    link: "Learn more"
  },
  {
    name: "Tailwind CSS",
    description: "Стилизация веб-страниц с использованием утилитарного CSS-фреймворка Tailwind CSS.",
    link: "Learn more"
  },
  {
    name: "PHP/Node js",
    description: "Разработка серверной логики и взаимодействие с базами данных с использованием PHP.",
    link: "Learn more"
  }
];

const Services = () => {
  return (
    <section id="services" className='section mt-[200px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>Мои навыки</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Я начинающий фронтенд-разработчик с опытом работы с различными технологиями. Вот некоторые из них:
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
