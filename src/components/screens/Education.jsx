"use client"

import { motion } from "framer-motion"
import { GraduationCap, Book, BadgeCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const timelineItems = [
    {
        year: "2023 - 2024",
        title: "Análise e Desenvolvimento de Sistemas",
        institution: "UNIP",
        description: "Formação superior com foco em desenvolvimento de software e sistemas computacionais.",
        icon: GraduationCap,
    },
    {
        year: "2021-2022",
        title: "Full Stack Javascript",
        institution: "ONEBITCODE",
        description: "Curso avançado de desenvolvimento web com foco em tecnologias modernas.",
        icon: BadgeCheck,
    },
    {
        year: "2020-2022",
        title: "Ensino Médio intregrado com Técnico em infomática",
        institution: "ETEC",
        description: "Ensimo médio intgerado com Técnico em informática com foco em desenvolvimento web.",
        icon: Book,
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
}

const itemVariants = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

const Education = () => {
    return (
        <section className='px-12 pb-12 flex flex-col gap-10'>
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-2xl font-bold text-primary-500 dark:text-second-200">
                            EDUCAÇÃO
                            <motion.span
                                className="absolute -bottom-1 left-0 w-[50px] bg-thirth-200 dark:bg-thirth-200 h-1"
                                initial={{ width: 0 }}
                                animate={{ width: 50 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            ></motion.span>
                        </h1>
                    </motion.div>
                    {timelineItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative pl-12 sm:pl-16"
                        >
                            {index !== timelineItems.length - 1 && (
                                <Separator orientation="vertical" className="absolute left-6 top-12 h-full" />
                            )}

                            <div className="absolute left-0 sm:left-2 top-2 w-8 h-8 rounded-full bg-thirth-200 flex items-center justify-center shadow-md">
                                <item.icon className="w-4 h-4 text-second-200 dark:text-thirth-300" />
                            </div>

                            <Card className="dark:bg-primary-400 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 bg-card">
                                <CardHeader>
                                    <Badge variant="outline" className="w-fit mb-2 text-thirth-200 dark:text-thirth-300 border-thirth-200 dark:border-thirth-300">
                                        {item.year}
                                    </Badge>
                                    <CardTitle className="text-xl font-semibold text-foreground uppercase">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-thirth-600 dark:text-thirth-400 font-medium mb-2">{item.institution}</p>
                                    <p className="text-muted-foreground text-sm">{item.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Education

