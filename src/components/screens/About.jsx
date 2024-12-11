'use client'

import { Code, Database, Palette } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    const services = [
        { icon: <Code size={40} className='text-thirth-200 dark:text-thirth-100' />, title: 'Desenvolvimento Web', description: 'Criação de sites e aplicações web responsivas e modernas.' },
        { icon: <Palette size={40} className='text-thirth-200 dark:text-thirth-100' />, title: 'Design de UI/UX', description: 'Interfaces intuitivas e atraentes para melhor experiência do usuário.' },
        { icon: <Database size={40} className='text-thirth-200 dark:text-thirth-100' />, title: 'Desenvolvimento Backend', description: 'Criação de APIs robustas e eficientes para suas aplicações.' },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <motion.div
            className='px-12 flex flex-col gap-10'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className="relative" variants={itemVariants}>
                <h1 className="text-2xl font-bold text-primary-500 dark:text-second-200">
                    SOBRE MIM
                    <motion.span
                        className="absolute -bottom-1 left-0 w-[50px] bg-thirth-200 dark:bg-thirth-200 h-1"
                        initial={{ width: 0 }}
                        animate={{ width: 50 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    ></motion.span>
                </h1>
            </motion.div>

            <motion.div className="flex flex-col gap-4" variants={itemVariants}>
                <span className='text-sm text-justify text-primary-400 dark:text-second-200 font-medium'>Meu nome é <span className='text-thirth-100'>BRUNO CAMPOS</span>, tenho 20 anos. Sou <span className='text-thirth-100'>DESENVOLVEDOR FULLSTACK</span> e entusiasta da tecnologia e estou iniciando uma grande jornada como programador. Minha paixão pela área começou cedo e desde então tenho me dedicado a aprender e aprimorar minhas habilidades. Estou sempre em constante aprendizado, buscando conhecimento e explorando novas tecnologias. Acredito que a área da programação é um universo em constante evolução, e isso me motiva a me manter atualizado e acompanhar as tendências mais recentes.</span>
                <span className='text-sm text-justify text-primary-400 dark:text-second-200 font-medium'>Estou focado em desenvolver soluções inovadoras e eficientes, sempre com o objetivo de melhorar a experiência dos usuários e entregar projetos de qualidade. Além disso, acredito no poder da colaboração em equipe e na troca de conhecimento para crescer e evoluir na carreira.</span>
            </motion.div>

            <motion.div className='w-full flex flex-col gap-4' variants={itemVariants}>
                <span className='w-full text-xl font-bold text-primary-400 dark:text-second-200'>MEUS SERVIÇOS</span>

                <motion.div
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
                    variants={containerVariants}
                >
                    {services.map((element, i) => (
                        <motion.div
                            key={i}
                            className='flex flex-col justify-center items-center h-full gap-2 bg-second-300 dark:bg-gradient-to-br from-neutral-800 to-neutral-900 border rounded-xl p-4 dark:border-neutral-700'
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className='flex justify-center'
                                initial={{ rotate: 0 }}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                {element.icon}
                            </motion.div>
                            <span className='text-sm text-center font-medium text-primary-500 dark:text-second-200'>{element.title}</span>
                            <span className='text-sm text-center font-medium text-primary-100 dark:text-second-300'>{element.description}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About

