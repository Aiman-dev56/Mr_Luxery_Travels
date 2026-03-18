"use client";

import React from "react";
import { Images } from "../../Assets/Images";
import Image from "next/image";
import { Typography } from "../common/Typography";
import Link from "next/link";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="container">
            <section className="mt-20 w-full flex justify-center px-4">
                <div className="relative w-full max-w-[1200px] lg:max-w-[1400px] 2xl:max-w-[1098px] rounded-xl overflow-hidden">

                    <Image
                        src={Images.FooterBg}
                        alt="Footer Background"
                        fill
                        priority
                        className="object-cover object-center"
                    />

                    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr] gap-20 px-6 py-12 lg:px-16 lg:py-16 2xl:px-20 2xl:py-20">

                        {/* TEXT */}
                        <div className="w-full">
                            <Typography variant="h2" className="!text-white">
                                Don't Miss A Thing
                            </Typography>

                            <Typography variant="p" className="!text-white mt-3 max-w-2xl">
                                Get essential travel tips, destination inspiration,
                                itineraries, and the best places to stay in your inbox.
                            </Typography>

                            <Typography variant="p" className="mt-6 !text-white font-bold">
                                Sign up to the Mr Luxury Travels Newsletter.
                            </Typography>
                        </div>

                        {/* FORM */}
                        <div className="flex flex-col gap-5 w-full max-w-md md:ml-auto mt-10">
                            <input
                                placeholder="Full Name"
                                className="border border-white/60 bg-transparent px-5 py-4 italic placeholder:text-white rounded-lg w-full"
                            />

                            <input
                                placeholder="Email"
                                className="border border-white/60 bg-transparent px-5 py-4 italic placeholder:text-white rounded-lg w-full"
                            />

                            <button className="bg-secondary text-primary px-8 py-3 rounded-lg w-full sm:w-fit sm:self-end">
                                Subscribe
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <footer className="mt-[-80px] lg:mt-[-70px]">
                <div className="bg-background rounded-xl pt-24 pb-10  max-w-[1200px] mx-auto">

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-16">

                        <div className="flex flex-col gap-4">
                            <Typography variant="p" className="!text-primary font-bold !text-[18px]">
                                Discover
                            </Typography>
                            <ul className="flex flex-col gap-3">
                                <li><Link href="#">About</Link></li>
                                <li><Link href="#">Service</Link></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Typography variant="p" className="!text-primary font-bold !text-[18px]">
                                Legal
                            </Typography>
                            <ul className="flex flex-col gap-3">
                                <li>Terms And Condition</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Typography variant="p" className="!text-primary font-bold !text-[18px]">
                                Contact
                            </Typography>
                            <ul className="flex flex-col gap-3">
                                <li>+44 (0)203 595 1487</li>
                                <li>Danny@mrluxurytravels.com</li>
                            </ul>
                        </div>

                    </div>

                    <hr className="border-primary my-10 mx-6 lg:mx-16" />

                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center px-6 lg:px-16">
                        <Typography variant="p">
                            © 2026 Mr Luxury Travels. All rights reserved.
                        </Typography>

                        <div className="flex gap-4 text-primary text-xl">
                            <Link href="#"><FaSquareWhatsapp /></Link>
                            <Link href="#"><FaSquareInstagram /></Link>
                            <Link href="#"><FaFacebook /></Link>
                            <Link href="#"><FaSquareXTwitter /></Link>
                        </div>
                    </div>

                    <Typography
                        variant="h1"
                        className="!text-primary px-6 lg:px-16 mt-10 text-[40px] md:text-[70px] lg:text-[120px] 2xl:text-[180px] leading-tight"
                    >
                        travel beyond your expectation.
                    </Typography>

                </div>
            </footer>

        </div>
    )
}