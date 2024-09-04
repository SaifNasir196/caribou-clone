'use client'
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Heart, Mountain, Bell, ArrowRight } from 'lucide-react'
import { SignInButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useUser, UserButton } from "@clerk/nextjs"
import { SignOutButton } from "@clerk/nextjs"
import { navLinks } from "@/lib/data"
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider"
import { motion } from "framer-motion";


export default function Component() {
    const { isSignedIn } = useUser()
    const { activeSection, setActiveSection, setLastClickTime } = useActiveSectionContext();
    const pathname = usePathname()
    return (
        <header className="w-full bg-background relative z-[999]">

            <div className="bg-white fixed h-[6rem] w-full flex items-center justify-between px-[18rem]">
                {/* logo */}
                <Link href="#" className="flex items-center" prefetch={false}>
                    <Mountain />
                    <span className="ml-2 text-3xl font-black">CARIBOU</span>
                </Link>

                {/* links */}
                <nav className="hidden space-x-5 font-semibold mr-3 md:flex sm:top-[1.7rem] sm:h-[initial]">

                    <ul className="space-x-1 font-sans font-medium w-full flex flex-wrap items-center justify-center">
                        {/* {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <Button variant="ghost" className={cn("text-[1.05rem] px-[0.4rem]", { "text-primary bg-white": pathname == link.href })}>
                                    {link.label}
                                </Button>
                            </Link>
                        ))} */}
                        {navLinks.map((link) => (
                            <li
                                className="h-1/3 py-4 px-1 flex items-center justify-center relative"
                                key={link.href}
                            >
                                <Link
                                    className={cn(
                                        "p-2 flex w-full items-center justify-center transition",
                                        "hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300",
                                        {
                                            "text-gray-950 dark:text-gray-200": activeSection === link.label,
                                        }
                                    )}
                                    href={link.href}
                                    onClick={() => {
                                        setActiveSection(link.label);
                                        setLastClickTime(Date.now());
                                    }}
                                >
                                    {link.label}

                                    {link.label === activeSection && (
                                        <motion.span
                                            className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                                            layoutId="activeSection"
                                            transition={{
                                                type: "spring",
                                                stiffness: 350,
                                                damping: 25,
                                            }}
                                        ></motion.span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>


                    {isSignedIn ? (
                        <UserButton />

                    ) : (
                        <SignInButton>
                            <Link href={'/sign-in'}>
                                <Button variant="outline" className="font-sans text-md py-5 my-5" > Sign in <ArrowRight className="ml-1" size={16} /> </Button>
                            </Link>
                        </SignInButton>
                    )}

                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col justify-between">
                        <div className="grid gap-4 p-4">
                            <Link href="/">
                                <Button variant="ghost" className={cn("w-full", { "bg-secondary/[0.25]": pathname == "/" })}>
                                    Home
                                </Button>
                            </Link>

                            <Link href="/explore">
                                <Button variant="ghost" className={cn("w-full", { "bg-secondary/[0.25]": pathname.includes("/explore") })}>
                                    Explore
                                </Button>
                            </Link>

                            <Link href="/about">
                                <Button variant="ghost" className={cn("w-full", { "bg-secondary/[0.25]": pathname == "/about" })}>
                                    About
                                </Button>
                            </Link>


                            <Link href="/notifications">
                                <Button variant="ghost" className={cn("w-full", { "bg-secondary/[0.25]": pathname == "/notifications" })}>
                                    Notifications
                                </Button>
                            </Link>


                        </div>
                        <div className="p-4">
                            {isSignedIn ? (
                                <SignOutButton>
                                    <Button variant="ghost" className="w-full">Sign out</Button>
                                </SignOutButton>
                            ) : (
                                <SignInButton>
                                    <Link href={'/sign-in'}>
                                        <Button className="w-full"> Get Started </Button>
                                    </Link>
                                </SignInButton>
                            )}
                        </div>

                    </SheetContent>
                </Sheet>
            </div >
        </header >
    )
}
