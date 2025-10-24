"use client";

import * as React from "react";
import Link from "next/link";
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
  return (
    <NavigationMenu>
      <NavigationMenuList>
        
        {/* DESPLEGABLE 1: CUIDADO CAPILAR */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cuidado Capilar</NavigationMenuTrigger>
          <NavigationMenuContent className="border-amber-700 bg-white text-black">
            <ul className="grid w-[240px] gap-3 p-3"> {/* Aumentado gap para el estilo ámbar */}
              {tiposDeProducto.map((item) => (
                <ListItem
                  key={item.title} // Usamos title como key (es único)
                  title={item.title}
                  href={item.href}
                  // Estilo ÁMBAR aplicado directamente
                  className="border border-amber-200 border-l-4 border-l-amber-400 rounded-md p-2 bg-amber-50 shadow-sm transition-shadow duration-200 hover:shadow-md focus-within:shadow-md focus-within:ring-2 focus-within:ring-amber-300"
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        {/* DESPLEGABLE 2: PARA SALONES */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Para Salones</NavigationMenuTrigger>
            <NavigationMenuContent className="text-black bg-white">
            <ul className="grid w-full max-w-[400px] gap-3 p-3 mx-auto md:w-[500px] md:grid-cols-2">
              {categoriasPrincipales.map((item) => (
              <ListItem
                key={item.title} // Usamos title como key
                title={item.title}
                href={item.href}
                // Estilo ÁMBAR aplicado directamente
                className="border border-amber-200 border-l-4 border-l-amber-400 rounded-md p-2 bg-amber-50 shadow-sm transition-shadow duration-200 hover:shadow-md focus-within:shadow-md focus-within:ring-2 focus-within:ring-amber-300"
              >
                {item.description}
              </ListItem>
              ))}

              {/* Call-to-action de Ventas Mayoristas (más destacado y ocupa toda la fila en md) */}
              <li className="row-span-1 md:col-span-2">
              <NavigationMenuLink asChild>
                <Link
                href="/contacto"
                // CTA más destacado: color más fuerte, texto claro, mayor sombra y efecto hover
                className="flex h-full w-full flex-col justify-center rounded-md p-4 no-underline outline-none transition-transform duration-150 transform bg-amber-500 text-white shadow-lg hover:scale-[1.02] focus:shadow-2xl ring-2 ring-amber-300"
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
          <NavigationMenuContent className=" bg-white text-black">
            <ul className="grid w-[300px] gap-3 p-3">
              <li key="nosotros-quienes-somos" className="row-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    href="/nosotros"
                    // Estilo ÁMBAR similar al del CTA
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
                className="border border-amber-200 border-l-4 border-l-amber-400 rounded-md p-2 bg-amber-50 shadow-sm transition-shadow duration-200 hover:shadow-md focus-within:shadow-md focus-within:ring-2 focus-within:ring-amber-300"
              >
                Accede a toda tu información, tus pedidos y mucho más.
              </ListItem>
              <ListItem 
                key="nosotros-ofertas" 
                title="Ofertas" 
                href="/offers" 
                className="border border-amber-200 border-l-4 border-l-amber-400 rounded-md p-2 bg-amber-50 shadow-sm transition-shadow duration-200 hover:shadow-md focus-within:shadow-md focus-within:ring-2 focus-within:ring-amber-300"
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


// -------------------------------------------------------------
// COMPONENTE AUXILIAR: ListItem (Requerido para la navegación)
// -------------------------------------------------------------
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  // NOTA: Las clases originales de shadcn han sido MOVVIDAS a la prop className,
  // para que el estilo AMBAR que pasas desde MenuList se aplique.
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link 
          href={href} 
          // 🛑 Aquí se aplican las clases de estilo AMBAR pasadas desde el padre
          className="block select-none space-y-1 leading-none no-underline outline-none transition-colors"
        >
          {/* El div interno necesita las clases de texto */}
          <div className="text-sm leading-none font-medium text-foreground">{title}</div>
          {/* La descripción usa texto secundario */}
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


