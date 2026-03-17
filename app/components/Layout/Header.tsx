"use client";
import Logo from "@/app/Assets/Images/logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Header() {
    return (
        <div>
            <div className="sticky flex justify-between items-center px-10  h-[100px]">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="logo"
                        width={150}
                        height={200}
                    /></Link>

                <div className="flex gap-8 text-primary ">
                    <ul className="list-none lg:flex   hidden gap-8 lg:mt-4">
                        <li>
                            <Link href="/Pages/About" >About</Link>
                        </li>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <li>
                                    <Link href="/Pages/Services">Services</Link>
                                </li>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="text-primary">
                                <DropdownMenuGroup className="text-primary">
                                    <DropdownMenuLabel className="text-primary">Travel</DropdownMenuLabel>
                                    <DropdownMenuItem className="text-primary">Vip Service</DropdownMenuItem>
                                    <DropdownMenuItem className="text-primary">LifeStyle</DropdownMenuItem>
                                    <DropdownMenuItem className="text-primary">Shopping</DropdownMenuItem>
                                    <DropdownMenuItem className="text-primary">Wellness</DropdownMenuItem>
                                    <DropdownMenuItem className="text-primary">Personal</DropdownMenuItem>
                                    <DropdownMenuItem>Families</DropdownMenuItem>
                                    <DropdownMenuItem>Hot & New</DropdownMenuItem>
                                </DropdownMenuGroup>


                            </DropdownMenuContent>
                        </DropdownMenu>
                        <li>
                            <Link href="/Pages/Contact" >Contact</Link>
                        </li>

                    </ul>

                    <Button className="inline-flex gap-2 border lg:mt-1 !rounded-2xl bg-white !py-2 !px-4">
                        Eng
                        <span>
                            <RiArrowDropDownLine size={30} className="cursor-pointer" />
                        </span>
                    </Button>

                    {/* mobile view */}
                </div>





            </div>
        </div>

    )
}