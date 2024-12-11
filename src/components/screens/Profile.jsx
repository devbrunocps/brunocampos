'use client'

import React from 'react'
import { Separator } from '../ui/separator'
import { GithubIcon, Linkedin, Mail } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion'

const Profile = () => {
    const infos = [
        { icon: <GithubIcon className='text-thirth-200 dark:text-thirth-100' />, title: "GITHUB", value: "devbrunocps", url: "https://github.com/devbrunocps" },
        { icon: <Linkedin className='text-thirth-200 dark:text-thirth-100' />, title: "LINKEDIN", value: "Bruno Campos", url: "https://www.linkedin.com/in/bruno-campos-015606240/" },
        { icon: <FaWhatsapp className='text-[25px] text-thirth-200 dark:text-thirth-100' />, title: "WHATSAPP", value: "+55 16 99425-1058", url: "https://wa.me/5516994251058" },
        { icon: <Mail className='text-thirth-200 dark:text-thirth-100' />, title: "E-MAIL", value: "brunocps04@gmail.com", url: "mailto:brunocps04@gmail.com" }
    ]

    return (
        <motion.div
            className="w-full flex flex-col p-12 gap-8 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                className="flex flex-col w-full items-center gap-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                <motion.div
                    className='w-[60%] shadow-lg bg-second-400 rounded-full dark:bg-primary-100'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img className='h-full w-full rounded-full' src="../../profile.jpeg" alt="" />
                </motion.div>
                <div className='flex flex-col w-full items-center gap-2'>
                    <motion.span
                        className='text-xl font-bold text-neutral-900 uppercase dark:text-second-200'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        Bruno Campos
                    </motion.span>
                    <motion.span
                        className='text-xs text-center text-thirth-200 font-semibold uppercase bg-second-100 shadow-xl dark:bg-primary-100 rounded-lg dark:text-thirth-100 p-2'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                    >
                        Desenvolvedor FullStack
                    </motion.span>
                </div>
            </motion.div>
            <Separator className="w-full h-[1px] bg-neutral-400 dark:bg-neutral-500" />
            <motion.div
                className='flex flex-col gap-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
            >
                {infos.map((element, i) => {
                    return (
                        <motion.a
                            href={element.url}
                            target='_blank'
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="flex flex-row gap-2 items-center hover:bg-thirth-200/10 rounded-lg p-1 cursor-pointer">
                                <div className='bg-thirth-100/10 flex justify-center p-2 rounded-lg'>{element.icon}</div>
                                <div className='flex flex-col'>
                                    <span className='text-xs text-thirth-200 dark:text-second-300'>{element.title}</span>
                                    <span className='text-xs text-primary-500 dark:text-second-100'>{element.value}</span>
                                </div>
                            </div>
                        </motion.a>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}

export default Profile

