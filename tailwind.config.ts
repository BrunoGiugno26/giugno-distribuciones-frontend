import { type Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"; // 🛑 Usamos import en lugar de require()

const config: Config = {
  // Asegúrate de que darkmode esté configurado para clases
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Importante para proyectos con src/
  ],
  theme: {
    container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
    },
    extend: {
      colors: {
        // Mapeamos TODAS las variables del globals.css usando hsl(var(--nombre))
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        'card-foreground': "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        'popover-foreground': "hsl(var(--popover-foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // Añade tus colores de chart si los vas a usar
        'chart-1': "hsl(var(--chart-1))",
        'chart-2': "hsl(var(--chart-2))",
        // ... (Añadir los demás colores de chart si es necesario)
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // AGREGAMOS TUS FUENTES PERSONALIZADAS AQUÍ
        sans: ["var(--font-geist-sans)", "sans-serif"],
        heading: ["var(--font-oswald)", "sans-serif"], 
      },
    },
  },
  // 🛑 Usamos la variable importada en lugar de require()
  plugins: [tailwindcssAnimate],
};

export default config;
