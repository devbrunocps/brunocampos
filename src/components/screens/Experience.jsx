"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: "Suporte de TI / Desenvolvedor Full Stack",
    company: "Predilecta Alimentos LTDA",
    location: "Matão, SP - Brasil",
    startDate: "Jan 2024",
    endDate: "Present",
    description: [
      "Led a team of 5 developers in redesigning the company's flagship product, resulting in a 40% increase in user engagement",
      "Implemented a new component library using React and Styled Components, improving development efficiency by 30%",
      "Optimized application performance, reducing load times by 50% and improving Lighthouse scores across all metrics"
    ],
    skills: ["React", "TypeScript", "Next.js", "Styled Components", "GraphQL", "Jest"]
  },
  {
    id: 2,
    title: "Estagiário de TI",
    company: "Predilecta Alimentos LTDA",
    location: "Matão, SP - Brasil",
    startDate: "Mar 2018",
    endDate: "Dec 2020",
    description: [
      "Developed and maintained multiple client-facing web applications using React and Redux",
      "Collaborated with UX designers to implement responsive designs, ensuring seamless experiences across devices",
      "Introduced unit testing with Jest and React Testing Library, increasing code coverage from 20% to 80%"
    ],
    skills: ["React", "Redux", "JavaScript", "SASS", "Webpack", "Jest"]
  },
  {
    id: 3,
    title: "Aprendiz de TI",
    company: "Predilecta Alimentos LTDA",
    location: "Matão, SP - Brasil",
    startDate: "Jun 2016",
    endDate: "Feb 2018",
    description: [
      "Assisted in the development of responsive websites for small to medium-sized businesses",
      "Implemented pixel-perfect designs from Photoshop mockups using HTML, CSS, and JavaScript",
      "Gained experience with version control using Git and collaborated with team members using Agile methodologies"
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Git"]
  }
]

export default function ExperienceSection() {
  return (
    <section className="px-12 pb-12 flex flex-col gap-10" id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-primary-500 dark:text-second-200">
            EXPERIÊNCIA
            <motion.span
              className="absolute -bottom-1 left-0 w-[50px] bg-thirth-200 dark:bg-thirth-200 h-1"
              initial={{ width: 0 }}
              animate={{ width: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.span>
          </h1>
        </motion.div>
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} isLast={index === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience, isLast }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: experience.id * 0.2 }}
      className="mb-8 mt-8"
    >
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div className="w-4 h-4 bg-thirth-200 rounded-full" />
          {!isLast && <div className="w-1 h-full bg-thirth-100 mt-2" />}
        </div>
        <div className="flex-grow">
          <div className="bg-white dark:bg-primary-500 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold dark:text-second-100 uppercase">{experience.title}</h3>
                <p className="text-sm font-medium dark:text-second-300 uppercase">{experience.company}</p>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary hover:text-primary-dark transition-colors"
                aria-expanded={isExpanded}
                aria-controls={`experience-details-${experience.id}`}
              >
                {isExpanded ? <ChevronUp size={24} className='text-thirth-200' /> : <ChevronDown size={24} className='text-thirth-200' />}
              </button>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar size={16} className="mr-2 text-thirth-100" />
              <span>{experience.startDate} - {experience.endDate}</span>
              <MapPin size={16} className="ml-4 mr-2 text-thirth-100" />
              <span>{experience.location}</span>
            </div>
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
              id={`experience-details-${experience.id}`}
            >
              <ul className="list-disc list-inside mb-4 text-gray-700">
                {experience.description.map((item, index) => (
                  <li key={index} className="mb-2 dark:text-second-200 text-sm text-justify">{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 dark:border-thirth-200 dark:bg-transparent dark:border-[1px] dark:text-thirth-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

