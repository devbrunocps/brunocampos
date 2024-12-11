'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Code2, Brain, Workflow, Database, Palette, Server } from 'lucide-react'
import { motion } from 'framer-motion'

const Skills = () => {
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
        <section className='px-12 pb-12 flex flex-col gap-10'>
            <div className="container px-4 md:px-6">
                <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-2xl font-bold text-primary-500 dark:text-second-200">
                        HABILIDADES
                        <motion.span 
                            className="absolute -bottom-1 left-0 w-[50px] bg-thirth-200 dark:bg-thirth-200 h-1"
                            initial={{ width: 0 }}
                            animate={{ width: 50 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        ></motion.span>
                    </h1>
                </motion.div>

                <motion.div 
                    className="grid gap-8 md:grid-cols-2 mt-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Card className="rounded-xl overflow-hidden">
                        <CardContent className="p-6 rounded-xl bg-white dark:bg-primary-400 shadow transition-colors duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Hard Skills</h3>
                            <motion.div className="grid gap-4" variants={containerVariants}>
                                {[
                                    { icon: Code2, title: "Desenvolvimento Frontend", desc: "React, Next.js, TypeScript, Tailwind CSS" },
                                    { icon: Server, title: "Desenvolvimento Backend", desc: "Node.js, Express, API REST" },
                                    { icon: Database, title: "Banco de Dados", desc: "MongoDB, PostgreSQL, MySQL" },
                                    { icon: Palette, title: "UI/UX Design", desc: "Figma, Design Responsivo, Prototipagem" }
                                ].map((skill, index) => (
                                    <motion.div key={index} className="flex items-center gap-4 text-gray-600 dark:text-gray-300" variants={itemVariants}>
                                        <skill.icon className="bg-thirth-200/10 p-2 text-purple-500 rounded-md" size={35} />
                                        <div>
                                            <h4 className="font-medium">{skill.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{skill.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-xl overflow-hidden">
                        <CardContent className="p-6 rounded-xl bg-white dark:bg-primary-400 shadow transition-colors duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Soft Skills</h3>
                            <motion.div className="grid gap-4" variants={containerVariants}>
                                {[
                                    { icon: Brain, title: "Resolução de Problemas", desc: "Análise crítica e soluções criativas" },
                                    { icon: Workflow, title: "Trabalho em Equipe", desc: "Colaboração e comunicação efetiva" },
                                    { icon: Brain, title: "Aprendizado Contínuo", desc: "Adaptabilidade e curiosidade" },
                                    { icon: Workflow, title: "Gestão de Tempo", desc: "Organização e cumprimento de prazos" }
                                ].map((skill, index) => (
                                    <motion.div key={index} className="flex items-center gap-4 text-gray-600 dark:text-gray-300" variants={itemVariants}>
                                        <skill.icon className="bg-thirth-200/10 p-2 text-purple-500 rounded-md" size={35} />
                                        <div>
                                            <h4 className="font-medium">{skill.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{skill.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills;

