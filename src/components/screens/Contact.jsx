'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "brunocps04@gmail.com",
      link: "mailto:brunocps04@gmail.com"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "devbrunocps",
      link: "https://github.com/devbrunocps"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "Bruno Campos",
      link: "https://linkedin.com/in/bruno-campos"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "WhatsApp",
      value: "+55 16 99425-1058",
      link: "https://wa.me/5516994251058"
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Add your form submission logic here
    setTimeout(() => setIsSubmitted(false), 3000)
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
            CONTATO
            <motion.span
              className="absolute -bottom-1 left-0 w-[50px] bg-thirth-200 dark:bg-thirth-200 h-1"
              initial={{ width: 0 }}
              animate={{ width: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className='w-full mt-4'
        >
          <Card className="w-full max-h-96 flex flex-col rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-3 dark:bg-gradient-to-br uppercase from-neutral-800 to-neutral-900 border dark:border-neutral-700 p-6 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-transparent">
                <div className="space-y-1 bg-transparent">
                  <label className="text-sm font-medium text-foreground">
                    Nome
                  </label>
                  <Input
                    placeholder="Seu nome"
                    required
                    className="bg-transparent"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="bg-transparent"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-foreground">
                  Assunto
                </label>
                <Input
                  placeholder="Como posso ajudar?"
                  required
                  className="bg-transparent"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Sua mensagem..."
                  required
                  className="min-h-[150px] bg-transparent"
                />
              </div>
              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-500 text-center"
                  >
                    Mensagem enviada com sucesso!
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white text-xs flex justify-center items-center uppercase"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Card>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact;
