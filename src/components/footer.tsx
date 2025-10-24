import Link from "next/link";

const dataFooter = [
  {
    id: 1,
    name: "Sobre nosotros",
    link: "#",
  },
  {
    id: 2,
    name: "Productos",
    link: "#",
  },
  {
    id: 3,
    name: "Mi cuenta",
    link: "#",
  },
  {
    id: 4,
    name: "Política de privacidad",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span className="font-bold">Giugno</span>
            Distribuciones
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {dataFooter.map((data) => (
              <li key={data.id}>
                <Link href={data.link} className="hover:underline me-4 md:me-6">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-6 w-full h-px bg-gray-300 dark:bg-gray-700 lg:my-8"></div>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><Link href="#"> &copy;2025 Giugno Distribuciones todos los derechos reservados</Link></span>
      </div>
    </footer>
  );
};

export default Footer;
