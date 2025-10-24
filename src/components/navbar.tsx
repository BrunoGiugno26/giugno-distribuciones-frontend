"use client";
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="border-b border-gray-200"> 
      <div className="flex items-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-6xl lg:max-w-7xl">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
          
          <div className="relative h-10 w-10 md:h-12 md:w-12">
            <Image 
              src={"https://ik.imagekit.io/fefgntjox/Giugno%20Distribuciones/Logo%20GiugnoDistribuciones.jpeg?updatedAt=1761093393800"} 
              alt="Logo" 
              fill 
              className="object-contain"
            />
          </div>
      
          <h1 className="text-xl md:text-2xl font-normal hidden sm:block"> 
            Giugno
            <span className="font-bold">Distribuciones</span>
          </h1>
        </div>
     

        
        <div className="items-center justify-center hidden lg:flex grow">
          <MenuList />
        </div>
        
       
        <div className="flex lg:hidden">
          <ItemsMenuMobile/>
        </div>
        
        
        <div className="flex items-center justify-between gap-3 md:gap-5">
          <ShoppingCart
            strokeWidth={1}
            className="cursor-pointer h-6 w-6" 
            onClick={() => router.push("/cart")}
          />
          <Heart
            strokeWidth={1}
            className="cursor-pointer h-6 w-6" 
            onClick={() => router.push("/loved-products")}
          />
          <User strokeWidth={1} className="cursor-pointer h-6 w-6" />

          <ToggleTheme/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
