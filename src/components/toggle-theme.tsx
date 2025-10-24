"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ToggleTheme = () => {
  const [mounted, setMounted] = React.useState(false); 
  const { theme, setTheme } = useTheme(); 

  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
        <Button variant="outline" size="icon" disabled className="bg-amber-800 text-white border-amber-500 hover:bg-amber-800">
            <Sun className="h-[1.2rem] w-[1.2rem] text-primary-foreground opacity-50" /> 
            <span className="sr-only">Toggle theme</span>
        </Button>
    ); 
  }

  const isLight = theme === 'light' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: light)').matches);


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={
            isLight
              ? "bg-amber-500 text-white border-amber-500 hover:bg-amber-300"
              : "bg-indigo-900 text-white border-indigo-100 hover:bg-indigo-600"
          }
        >
          {isLight ? (
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
          )}

          <span className="sr-only">Cambiar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white text-black border-border shadow-lg" align="end"> 
        <DropdownMenuItem onClick={() => setTheme("light")} className="hover:bg-amber-500 hover:text-white transition-colors cursor-pointer">
          Día 
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:bg-amber-500 hover:text-white transition-colors cursor-pointer">
          Noche
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default ToggleTheme;
