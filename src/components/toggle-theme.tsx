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
  
  // Usamos el tema actual (o el del sistema) para determinar el estado de "Light"
  const isLight = theme === 'light' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: light)').matches);

  if (!mounted) {
    return (
        <Button variant="outline" size="icon" disabled className="bg-amber-800 text-white border-amber-500 hover:bg-amber-800">
            <Sun className="h-[1.2rem] w-[1.2rem] text-primary-foreground opacity-50" /> 
            <span className="sr-only">Toggle theme</span>
        </Button>
    ); 
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={
            isLight
              ? "bg-amber-500 text-white border-amber-500 hover:bg-amber-300 hover:text-gray-800"
              : "bg-gray-800 text-white border-gray-600 hover:bg-gray-600" // Ajustado para Dark Mode
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
      {/* Clases condicionales para el contenido del Dropdown */}
      <DropdownMenuContent 
        className={isLight ? "bg-white text-black border-border shadow-lg" : "bg-gray-800 text-white border-gray-700 shadow-lg"} 
        align="end"
      > 
        {/* Clases condicionales para el hover de los ítems */}
        <DropdownMenuItem 
          onClick={() => setTheme("light")} 
          className={isLight ? "hover:bg-orange-100 transition-colors cursor-pointer" : "hover:bg-amber-600 hover:text-black transition-colors cursor-pointer"}
        >
          Día 
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")} 
          className={isLight ? "hover:bg-orange-100 transition-colors cursor-pointer" : "hover:bg-amber-600 hover:text-black transition-colors cursor-pointer"}
        >
          Noche
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default ToggleTheme;
