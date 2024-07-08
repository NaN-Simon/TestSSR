import { MenuIcon, ShirtIcon } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
// import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import SheetMenu from "./SheetMenu"
import ThemeSwitcher from "./ThemeSwitcher"
import { useEffect, useState } from "react"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
]

const Header = () => {
    const [theme, setTheme] = useState(false);
    const [color, setColor] = useState("white");
    useEffect(() => {
        setTheme(window.localStorage.getItem('theme') === 'dark')
        setColor(window.localStorage.getItem('theme') === 'dark' ? 'black' : 'white')
    }, [])
    return (
        <header className="fixed inset-x-0 w-full z-[9999] transition-all duration-500">
            <div className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-white dark:bg-black">
                <SheetMenu />

                <a href="#" className="mr-6 hidden lg:flex">
                    <ShirtIcon className="h-6 w-6" color={color} />
                    <span className="sr-only">ShadCN</span>
                </a>
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        {navLinks.map((link) => (
                            <NavigationMenuLink key={link.name} asChild>
                                <a
                                    href={link.href}
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"

                                >
                                    {link.name}
                                </a>
                            </NavigationMenuLink>
                        ))}

                    </NavigationMenuList>
                </NavigationMenu>
                <div className="ml-auto flex gap-2">
                    <ThemeSwitcher>Переключить тему</ThemeSwitcher>
                    <ul className="flex gap-2">
                        <li id="telegram" className="flex justify-center items-center w-full">
                            <Button variant={"ghost"} size="icon" className="w-full min-w-16 hover:bg-slate-600">
                                <a href='asd' className="flex justify-center items-center text-white text-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="38px" height="38px"><path fill="#e8eaed" d="M32,10c12.15,0,22,9.85,22,22s-9.85,22-22,22s-22-9.85-22-22S19.85,10,32,10z M39.589,40.968	c0.404-1.241,2.301-13.615,2.534-16.054c0.071-0.738-0.163-1.229-0.619-1.449c-0.553-0.265-1.371-0.133-2.322,0.21	c-1.303,0.47-17.958,7.541-18.92,7.951c-0.912,0.388-1.775,0.81-1.775,1.423c0,0.431,0.256,0.673,0.96,0.924	c0.732,0.261,2.577,0.82,3.668,1.121c1.05,0.29,2.243,0.038,2.913-0.378c0.709-0.441,8.901-5.921,9.488-6.402	c0.587-0.48,1.056,0.135,0.576,0.616c-0.48,0.48-6.102,5.937-6.844,6.693c-0.901,0.917-0.262,1.868,0.343,2.249	c0.689,0.435,5.649,3.761,6.396,4.295c0.747,0.534,1.504,0.776,2.198,0.776C38.879,42.942,39.244,42.028,39.589,40.968z" /></svg>
                                </a>
                            </Button>
                        </li>
                        <li id="telegram" className="flex justify-center items-center w-full">
                            <Button variant={"ghost"} size="icon" className="w-full min-w-16 hover:bg-slate-600">
                                <a href='mailto:asd@gmail.com' className="flex justify-center items-center text-white text-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-405 172-597v345h353v126H172q-53 0-89.5-36.5T46-252v-456q0-53 36.5-89.5T172-834h616q53 0 89.5 36.5T914-708v303H788v-192L480-405Zm0-110 308-193H172l308 193ZM775-2l-69-70 53-54H605v-100h154l-54-54 70-70 174 174L775-2ZM172-597v443-251 1-304 111Z" /></svg>
                                </a>
                            </Button>
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    )
}



export default Header