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


export default function Component() {
    const { isSignedIn } = useUser()
    const pathname = usePathname()
    return (
        <header className="w-full bg-background px-4 py-4 shadow-sm md:px-8 lg:px-12">
            <div className=" md:mx-[15rem] my-3 flex items-center justify-between">
                {/* logo */}
                <Link href="#" className="flex items-center" prefetch={false}>
                    <Mountain />
                    <span className="ml-2 text-3xl font-black">CARIBOU</span>
                </Link>

                {/* links */}
                <nav className="hidden space-x-5 md:flex font-semibold mr-3">
                    <div className="space-x-1 font-sans font-semibold">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <Button variant="ghost" className={cn("text-[1.05rem] px-[0.4rem]", { "text-primary bg-white": pathname == link.href })}>
                                    {link.label}
                                </Button>
                            </Link>
                        ))}
                    </div>


                    {isSignedIn ? (
                        <UserButton />

                    ) : (
                        <SignInButton>
                            <Link href={'/sign-in'}>
                                <Button variant="outline" className="font-sans text-md py-5" > Sign in <ArrowRight className="ml-1" size={16} /> </Button>
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
