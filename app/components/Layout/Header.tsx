"use client";

import { useState } from "react";
import Logo from "@/app/Assets/Images/logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 bg-white">
            <div className="flex justify-between items-center px-6 lg:px-10 h-[90px]">

                {/* LOGO */}
                <Link href="/">
                    <Image src={Logo} alt="logo" width={150} height={200} />
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden lg:flex gap-8 text-primary items-center">
                    <ul className="flex gap-8">
                        <li>
                            <Link href="/Pages/About">About</Link>
                        </li>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <li className="cursor-pointer">
                                    Services
                                </li>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>Travel</DropdownMenuLabel>
                                    <DropdownMenuItem>Vip Service</DropdownMenuItem>
                                    <DropdownMenuItem>LifeStyle</DropdownMenuItem>
                                    <DropdownMenuItem>Shopping</DropdownMenuItem>
                                    <DropdownMenuItem>Wellness</DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <li>
                            <Link href="/Pages/Contact">Contact</Link>
                        </li>
                    </ul>

                    <Button className="inline-flex gap-2 border !rounded-2xl bg-white !py-2 !px-4">
                        Eng
                        <RiArrowDropDownLine size={24} />
                    </Button>
                </div>

                {/* MOBILE HAMBURGER */}
                <div className="lg:hidden">
                    {open ? (
                        <HiOutlineX
                            size={30}
                            className="cursor-pointer"
                            onClick={() => setOpen(false)}
                        />
                    ) : (
                        <HiOutlineMenu
                            size={30}
                            className="cursor-pointer"
                            onClick={() => setOpen(true)}
                        />
                    )}
                </div>
            </div>

            {/* MOBILE MENU PANEL */}
            {open && (
                <div className="absolute top-20 left-0 w-full bg-white  text-primary shadow-lg flex flex-col items-center gap-6 py-6 lg:hidden">
                    <Link href="/Pages/About" onClick={() => setOpen(false)}>
                        About
                    </Link>

                    <Link href="/Pages/Services" onClick={() => setOpen(false)}>
                        Services
                    </Link>

                    <Link href="/Pages/Contact" onClick={() => setOpen(false)}>
                        Contact
                    </Link>

                    <Button className="w-full border !rounded-xl bg-white !py-2">
                        Eng
                    </Button>
                </div>
            )}
        </div>
    );
}