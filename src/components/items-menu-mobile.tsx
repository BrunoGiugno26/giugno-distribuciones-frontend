"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import * as React from "react";

const ItemsMenuMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const currentMenuRef = menuRef.current;
      if (
        isMenuOpen &&
        currentMenuRef &&
        currentMenuRef.contains &&
        !currentMenuRef.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const contentThemeClasses =
    theme === "dark"
      ? "bg-gray-900 text-white border-gray-700"
      : "bg-white text-black border-border";
  const linkHoverClasses =
    theme === "dark"
      ? "hover:bg-orange-300 hover:text-gray-900"
      : "hover:bg-orange-100 hover:text-gray-900";

  return (
    <div className="relative" ref={menuRef}>
                     
      <div
        onClick={() => setIsMenuOpen((o) => !o)}
        className="cursor-pointer p-1"
      >
        <Menu className="h-6 w-6" /> 
      </div>
           
      {isMenuOpen && (
        <div
          className={`absolute z-50 mt-2 rounded-lg border shadow-lg m-14 p-2 w-max max-w-[calc(100vw-32px)] transition-opacity duration-300 transform left-1/2 -translate-x-1/2 text-left text-nowrap ${contentThemeClasses}`}
          style={{ transformOrigin: "top center" }}
        >
                   
          <Link
            href={"/categoria/productos-de-cuidado-y-reventa"}
            className={`block w-full p-2 pl-4 rounded-md transition-colors ${linkHoverClasses}`}
          >
            Cuidado y Reventa        
          </Link>
                   
          <div className="my-1 h-px bg-gray-200 dark:bg-gray-700"></div>
          {/* Separador visual */}         
          <Link
            href={"/categoria/accesorios-y-herramientas-profesionales"}
            className={`block w-full p-2 pl-4 rounded-md transition-colors ${linkHoverClasses}`}
          >
            Accesorios Profesionales        
          </Link>
                 
        </div>
      )}
         
    </div>
  );
};
export default ItemsMenuMobile;
