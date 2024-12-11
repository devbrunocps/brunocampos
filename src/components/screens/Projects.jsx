'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const projects = [
  {
    id: 1,
    title: "HEALTHTRACK",
    description: "Aplicativo de monitoramento de saúde e bem-estar com integração a dispositivos wearables.",
    logo: "/1.png",
    images: [
      "/1.png",
      "/2.png",
      "/3.png",
      "/3.png",
      "/3.png",
      "/3.png",
    ],
    date: new Date('2023-12-14'),
    technologies: ["Flutter", "Firebase", "TensorFlow Lite", "HealthKit"]
  },
  {
    id: 2,
    title: "RAPIDEATS",
    description: "Aplicativo de delivery que conecta restaurantes locais aos clientes com rastreamento em tempo real.",
    logo: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    date: new Date('2023-11-27'),
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"]
  },
  {
    id: 3,
    title: "TASKFLOW",
    description: "Sistema de gerenciamento de projetos com recursos avançados de produtividade.",
    logo: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    date: new Date('2023-12-01'),
    technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"]
  }
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const previousProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

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
            PROJETOS
            <motion.span
              className="absolute -bottom-1 left-0 w-[50px] bg-thirth-200 dark:bg-thirth-200 h-1"
              initial={{ width: 0 }}
              animate={{ width: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.span>
          </h1>
        </motion.div>

        <div className="relative">
          <button onClick={previousProject} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10" aria-label="Projeto anterior">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button onClick={nextProject} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10" aria-label="Próximo projeto">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="dark:bg-primary-400 shadow-xl border bg-neutral-100 rounded-xl mt-12 overflow-hidden"
            >
              <div className="flex gap-8 p-8">
                <div className="aspect-video w-3/5 relative border border-neutral-700 bg-[#232323] rounded-2xl overflow-hidden">
                  <img src={currentProject.logo} alt={currentProject.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-sm pb-1 uppercase dark:text-gray-400">
                    {format(currentProject.date, "dd MMMM yyyy", { locale: ptBR })}
                  </p>
                  <h2 className="text-2xl font-bold dark:text-white mb-4">
                    {currentProject.title}
                  </h2>
                  <p className="text-sm dark:text-gray-400 mb-8">
                    {currentProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 dark:bg-purple-500/20 dark:text-purple-300 text-purple-600 border border-purple-600 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white text-xs flex justify-center items-center">
                        VER PROJETO <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-screen-xl flex flex-col justify-center items-center">
                      <div className='w-full flex flex-col font-mont gap-1'>
                        <span className='text-xl font-bold dark:text-second-200'>IMAGENS DO PROJETO</span>
                        <span className='text-sm font-medium dark:text-second-400'>VEJA ABAIXO AS IMAGENS DO PROJETO</span>
                      </div>
                      <div className="grid grid-cols-3 p-4 gap-4">
                        {currentProject.images.map((image, index) => (
                          <div className='relative max-w-xs border rounded-lg hover:scale-[1.02] transition-all duration-500'>
                            <a href={image} target='_blank' className="absolute inset-0 flex items-center justify-center z-50">
                              <ExternalLink className="w-5 h-5 cursor-pointer" />
                            </a>
                            <img
                              key={index}
                              src={image}
                              alt={`${currentProject.title} screenshot ${index + 1}`}
                              className="w-96 border aspect-video object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer opacity-55"
                              onClick={() => setSelectedImageIndex(index)}
                            />
                          </div>
                        ))}
                      </div>
                      <div className='flex w-full justify-between dark'>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <button className='bg-thirth-200/50 hover:bg-thirth-200 dark:bg-thirth-100 dark p-2 rounded-md'><Github size={20} /></button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div className='text-xs font-mont uppercase'>Veja o código-fonte do projeto no GitHub.</div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <button className='bg-thirth-200/50 hover:bg-thirth-200 dark:bg-thirth-100 dark p-2 rounded-md'><ExternalLink size={20} /></button>
                            </TooltipTrigger>
                            <TooltipContent>
                            <div className='text-xs font-mont uppercase'>VISITE O SITE.</div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-2 rounded-full transition-all duration-300",
                  currentIndex === index
                    ? "w-8 bg-purple-600"
                    : "bg-gray-600 hover:bg-gray-500"
                )}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

