import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost/sites/Send%20data/data.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <section id="contact" className='py-16 lg:section mt-[200px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>

                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 flex justify-center'>
                        <div>
                            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Связаться</h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                                Давайте работать <br /> вместе
                            </h2>
                        </div>
                    </motion.div>

                    <motion.form
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 border rounded-2xl flex flex-col gap-y-0 pb-24 p-6 items-start'
                        onSubmit={handleSubmit}
                    >
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                            type="text"
                            name="name"
                            placeholder='Ваше имя'
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                            type="text"
                            name="email"
                            placeholder='Ваш email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                            name="message"
                            placeholder='Ваше сообщение'
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <button className='btn btn-lg' type="submit">Отправить сообщение</button>
                    </motion.form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
