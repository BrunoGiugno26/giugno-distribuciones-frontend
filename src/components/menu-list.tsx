"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const categoriasPrincipales: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Cuidado y Reventa",
    href: "/categoria/productos-de-cuidado-y-reventa",
    description:
      "Shampoos, acondicionadores, baños de crema y productos para la reventa.",
  },
  {
    title: "Accesorios Profesionales",
    href: "/categoria/accesorios-y-herramientas-profesionales",
    description:
      "Tijeras, secadores, capas y herramientas especializadas para salones.",
  },
];

export const tiposDeProducto: { title: string; href: string }[] = [
  // NOTA: El href usa el valor exacto de la Enumeración (el slug)
  { title: "Shampoos", href: "/productos/shampoo" },
  { title: "Acondicionadores", href: "/productos/acondicionador" },
  { title: "Baño de Crema", href: "/productos/bano_de_crema" },
  { title: "Tónicos Capilares", href: "/productos/tonico_capilar" },
  { title: "Tinturas", href: "/productos/tinturas" },
  { title: "Decolorantes", href: "/productos/decolorantes" },
  { title: "Ampollas", href: "/productos/ampollas" },
  { title: "Accesorios", href: "/productos/accesorios" },
  { title: "Reveladores Oxidantes", href: "/productos/revelador_antioxidantes" },
];


const MenuList: React.FC = () => {
  const { theme } = useTheme(); 

  // Clases condicionales para el contenido desplegable
  const contentBaseClasses = "border-border shadow-lg";
  const contentThemeClasses = theme === 'dark' 
    ? "bg-gray-900 text-white" 
    : "bg-white text-black";

  // Clases condicionales para los ítems individuales (ListItem)
  const itemThemeClasses = theme === 'dark' 
    ? "border-l-amber-500 bg-gray-800 shadow-xl transition-shadow duration-200 hover:shadow-2xl focus-within:shadow-2xl focus-within:ring-amber-500" 
    : "border-l-amber-400 bg-amber-50 shadow-sm transition-shadow duration-200 hover:shadow-md focus-within:shadow-md focus-within:ring-amber-300";

  // Clases condicionales para el link principal (Ventas Mayoristas)
  const linkMayoristaClasses = theme === 'dark'
    ? "bg-amber-600 hover:bg-amber-700 text-gray-900 shadow-2xl ring-amber-500"
    : "bg-amber-500 text-white shadow-lg hover:scale-[1.02] ring-amber-300";

  return (
    <NavigationMenu>
      <NavigationMenuList>
        
        {/* DESPLEGABLE 1: CUIDADO CAPILAR */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cuidado Capilar</NavigationMenuTrigger>
          <NavigationMenuContent className={`${contentBaseClasses} ${contentThemeClasses}`}>
            <ul className="grid w-60 gap-3 p-3">
              {tiposDeProducto.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  className={`border border-amber-200 border-l-4 rounded-md p-2 focus-within:ring-2 ${itemThemeClasses}`}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        {/* DESPLEGABLE 2: PARA SALONES */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Para Salones</NavigationMenuTrigger>
            <NavigationMenuContent className={`${contentBaseClasses} ${contentThemeClasses}`}>
            <ul className="grid w-full max-w-[400px] gap-3 p-3 mx-auto md:w-[500px] md:grid-cols-2">
              {categoriasPrincipales.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                href={item.href}
                className={`border border-amber-200 border-l-4 rounded-md p-2 focus-within:ring-2 ${itemThemeClasses}`}
              >
                {item.description}
              </ListItem>
              ))}

              <li className="row-span-1 md:col-span-2">
              <NavigationMenuLink asChild>
                <Link
                href="/contacto"
                className={`flex h-full w-full flex-col justify-center rounded-md p-4 no-underline outline-none transition-transform duration-150 transform hover:scale-[1.02] focus:shadow-2xl ring-2 ${linkMayoristaClasses}`}
                >
                <div className="text-lg font-bold text-center">Ventas Mayoristas</div>
                <p className="text-sm leading-tight text-center">
                  Obtén precios exclusivos para tu negocio.
                </p>
                </Link>
              </NavigationMenuLink>
              </li>
            </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
        
        {/* DESPLEGABLE 3: NOSOTROS */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent className={`${contentBaseClasses} ${contentThemeClasses}`}>
            <ul className="grid w-[300px] gap-3 p-3">
              <li key="nosotros-quienes-somos" className="row-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    href="/nosotros"
                    className="flex h-full w-full flex-col justify-end rounded-md p-4 no-underline outline-none transition-all duration-200 focus:shadow-md bg-amber-400 hover:bg-amber-300"
                  >
                    <div className="text-lg text-center font-medium text-amber-900">Giugno Distribuciones</div>
                    <p className="text-sm text-center leading-tight text-amber-700">
                      Somos líderes en la distribución de cosmética capilar profesional y accesorios en Mendoza, Argentina.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem 
                key="nosotros-tienda" 
                title="Tienda" 
                href="/shop"
                className={`border border-amber-200 border-l-4 rounded-md p-2 focus-within:ring-2 ${itemThemeClasses}`}
              >
                Accede a toda tu información, tus pedidos y mucho más.
              </ListItem>
              <ListItem 
                key="nosotros-ofertas" 
                title="Ofertas" 
                href="/offers" 
                className={`border border-amber-200 border-l-4 rounded-md p-2 focus-within:ring-2 ${itemThemeClasses}`}
              >
                Promociones y descuentos especiales
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default MenuList;

// El componente ListItem está tipado correctamente.
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link 
          href={href} 
          className="block select-none space-y-1 leading-none no-underline outline-none transition-colors"
        >
          <div className="text-sm leading-none font-medium text-foreground">{title}</div>
          {children && (
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}



