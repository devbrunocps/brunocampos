import About from '@/components/screens/About'
import Contact from '@/components/screens/Contact'
import Education from '@/components/screens/Education'
import Experience from '@/components/screens/Experience'
import Profile from '@/components/screens/Profile'
import Projects from '@/components/screens/Projects'
import Skiils from '@/components/screens/Skiils'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { useTheme } from '@/hooks/useTheme'
import { Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'

const Initial = () => {
  const { theme, setTheme } = useTheme();
  const [screen, setScreen] = useState(1)

  return (
    <div className='bg-second-300 dark:bg-primary-400 flex gap-8 p-14 justify-center items-center w-screen h-screen font-mont overflow-y-auto overflow-x-hidden scroll-style'>
      <div className="w-1/4 h-full bg-second-100 rounded-xl dark:bg-primary-300 shadow-lg">
        <Profile />
      </div>

      <div className="w-3/4 h-full bg-second-100 rounded-xl p-1 dark:bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-lg overflow-y-auto overflow-x-hidden scroll-style">
        <nav className='flex justify-end'>
          <ul className='flex items-center bg-neutral-300 dark:bg-primary-200 dark:text-second-300 text-primary-500 font-medium text-xs px-4 py-2 gap-4 rounded-lg shadow-md'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className='bg-transparent dark:bg-transparent'>
                  <NavigationMenuTrigger className="bg-transparent p-0 focus:bg-transparent hover:bg-transparent dark:bg-transparent data-[state=open]:bg-transparent">
                    <li onClick={() => setScreen(1)} className={`text-xs cursor-pointer transition-colors ${screen == 1 ? "text-thirth-200 dark:text-thirth-100" : "hover:text-neutral-600 dark:hover:text-second-100"}`}>SOBRE MIM</li>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col gap-0 p-[3px]">
                    <li onClick={() => setScreen(2)} className={`hover:bg-second-200 dark:hover:bg-primary-200 rounded-sm py-2 px-2 cursor-pointer transition-colors ${screen == 2 ? "text-thirth-200 dark:text-thirth-100" : "hover:text-neutral-600 dark:hover:text-second-100"}`}>EDUCAÇÃO</li>
                    <li onClick={() => setScreen(3)} className={`hover:bg-second-200 dark:hover:bg-primary-200 rounded-sm py-2 px-2 cursor-pointer transition-colors ${screen == 3 ? "text-thirth-200 dark:text-thirth-100" : "hover:text-neutral-600 dark:hover:text-second-100"}`}>EXPERIÊNCIA</li>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <li onClick={() => setScreen(4)} className={`cursor-pointer transition-colors ${screen == 4 ? "text-thirth-200 dark:text-thirth-100" : "hover:text-neutral-600 dark:hover:text-second-100"}`}>HABILIDADES</li>
            <li onClick={() => setScreen(5)} className={`cursor-pointer transition-colors ${screen == 5 ? "text-thirth-200 dark:text-thirth-100" : "hover:text-neutral-600 dark:hover:text-second-100"}`}>PROJETOS</li>
            <li onClick={() => setScreen(6)} className={`cursor-pointer transition-colors ${screen == 6 ? "text-thirth-200 dark:text-thirth-100" : "hover:text-neutral-600 dark:hover:text-second-100"}`}>CONTATO</li>
            <Separator orientation="vertical" className="bg-primary-500 dark:bg-second-500 h-1/2" />
            {theme === "light" && <Moon onClick={() => setTheme("dark")} size={20} className='dark:text-second-100 text-primary-500' />}
            {theme === "dark" && <Sun onClick={() => setTheme("light")} size={20} className='dark:text-second-100 text-primary-500' />}
          </ul>
        </nav>

        {screen === 1 && <About />}
        {screen === 2 && <Education />}
        {screen === 3 && <Experience />}
        {screen === 4 && <Skiils />}
        {screen === 5 && <Projects />}
        {screen === 6 && <Contact />}


      </div>
    </div>
  )
}

export default Initial