// src/hooks/use-mobile.ts

import { useState, useEffect } from 'react';

/**
 * Hook para detectar si la pantalla actual es de tamaño móvil (<= 768px, el breakpoint 'md' de Tailwind).
 * @returns {boolean} True si es móvil, false si no lo es.
 */
export const useIsMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // Revisa si el ancho de la ventana es menor o igual al breakpoint (e.g., 768px)
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // 1. Ejecutar la comprobación inmediatamente al montar el componente
    checkIsMobile();

    // 2. Añadir listener para comprobar al cambiar el tamaño de la ventana
    window.addEventListener('resize', checkIsMobile);

    // 3. Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
};