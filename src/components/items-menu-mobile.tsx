import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return ( 
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent className="bg-white">
                <Link href={"/categoria/productos-de-cuidado-y-reventa"} className="block">Cuidado y Reventa</Link>
                <Link href={"/categoria/accesorios-y-herramientas-profesionales"} className="block">Accesorios Profesionales</Link>
            </PopoverContent>
        </Popover>
     );
}
 
export default ItemsMenuMobile;