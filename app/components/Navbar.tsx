"use client"
import { SignedOut, UserButton } from "@clerk/clerk-react";
import { ClerkLoaded, ClerkLoading, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    return (<div className="flex h-24 items-center justify-between">
        {/* Left */}
        <div className="md:hidden lg:block w-[20%]">
            <Link href="/" className="font-bold text-xl text-blue-200">BuzzEcho</Link>
        </div>
        {/* Center */}
        <div className="hidden md:flex w-[50%] text-small">
            <div className="flex gap-6 text-gray-600">
                <Link href="/" className="flex gap-2 items-center">
                    <Image src="/home.png" alt="Homepage" width={16} height={16} className="w-4 h-4" />
                    <span>Home</span>
                </Link>
                <Link href="/" className="flex gap-2">
                    <Image src="/friends.png" alt="Friends" width={16} height={16} className="w-4 h-4" />
                    <span>Friends</span>
                </Link>
                <Link href="/" className="flex gap-2">
                    <Image src="/stories.png" alt="Stories" width={16} height={16} className="w-4 h-4" />
                    <span>Stories</span>
                </Link>
            </div>
        </div>
        {/* Right */}
        <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
            <ClerkLoading>
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    ></span>
                </div>
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    <div className="cursor-pointer">
                        <Image src="/people.png" alt="" width={20} height={20} />
                    </div>
                    <div className="cursor-pointer">
                        <Image src="/message.png" alt="" width={20} height={20} />
                    </div>
                    <div className="cursor-pointer">
                        <Image src="/notifications.png" alt="" width={20} height={20} />
                    </div>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <div className="flex items-center gap-2 text-sm">
                        <Image src="/login.png" alt="" width={20} height={20} />
                        <Link href="/sign-in">Login/Register</Link>
                    </div>
                    Sign Out
                </SignedOut>
            </ClerkLoaded>
            <MobileMenu />
        </div>
    </div >);
}

export default Navbar;