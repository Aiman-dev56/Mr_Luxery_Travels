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
            <section className="lg:mt-20 mt-40 lg:w-full w-[92%] flex items-center justify-center ">
                <div className="relative lg:w-[90%]  2xl:h-[498px] 2xl:w-[1400px] lg:h-[300px] w-[92%] h-[350px] md:w-[90%] sm:w-[80%]  ">
                    <Image
                        src={Images.FooterBg}
                        alt="Footer Background"
                        fill
                        className="object-cover rounded-lg"
                    />
                    <div className="flex lg:gap-10 gap-4 absolute inset-0 px-10 py-4 2xl:py-20 lg:py-10 rounded-lg">
                        <div className="2xl:w-[1500px] lg:w-[600px]">
                            <Typography variant="h2" className="!text-white">Don't Miss A Thing</Typography>
                            <Typography variant="p" className="!text-white lg:w-[400px] 2xl:w-[500px]">Get essential travel tips, destination inspiration, itineraries, and the best places to stay in your inbox.</Typography>
                            <Typography variant="p" className="mt-10 !text-white !font-bold">Sign up to the Mr Luxury Travels Newsletter.</Typography>
                        </div>
                        <div className="flex flex-col gap-4 2xl:w-[500px]">
                            <div className="mt-8">
                                <input type="name"
                                    placeholder="Full Name"
                                    className="border border-gray-50 px-4 py-3 italic placeholder:text-white 2xl:w-[450px] lg:w-[400px] rounded-lg" />
                            </div>
                            <div className="mt-2">
                                <input type="email"
                                    placeholder="Email"
                                    className="border border-gray-50 px-4 py-3 italic placeholder:text-white 2xl:w-[450px] lg:w-[400px] rounded-lg" />
                            </div>
                            <button className="bg-secondary text-primary px-2 py-3 2xl:w-[240px] lg:w-[150px] justify-end self-end rounded-lg">Subscribe</button>
                        </div>
                    </div>
                </div>


            </section>

            <footer className="m-8  ">
                <div className="bg-background h-auto lg:w-full sm:w-[92%] -mt-40 rounded-lg pt-20">
                    <div className="mt-20">
                        <div className="flex  ">
                            <div className="flex lg:gap-46 gap-10 py-10 px-10">
                                <div className="flex flex-col gap-4">
                                    <Typography variant="p" className="!text-primary font-bold">Discover</Typography> <ul className="flex flex-col gap-4">
                                        <li><Link href="#">About</Link></li>
                                        <li> <Link href="#">Service</Link></li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Typography variant="p" className="!text-primary font-bold">Legal</Typography>
                                    <ul className="flex flex-col gap-4">
                                        <li>Terms And Condition</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Typography variant="p" className="!text-primary font-bold">Contact</Typography>
                                    <ul className="flex flex-col gap-4">
                                        <li>+44 (0)203 595 1487</li>
                                        <li>Danny@mrluxurytravels.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="border-primary m-10 " />
                        <div className="px-10 flex justify-between">
                            <div>
                                <Typography variant="p">© 2026 Mr Luxury Travels. All rights reserved.</Typography> </div>
                            <div className="flex gap-3 text-primary text-xl">
                                <Link href="#"><FaSquareWhatsapp /></Link> <Link href="#"><FaSquareInstagram /></Link> <Link href="#"><FaFacebook /></Link> <Link href="#"><FaSquareXTwitter /></Link> </div> </div>
                        <Typography variant="h1" className="!text-primary px-10 py-10 2xl:!text-[245px] lg:!text-[150px]">travel beyond your expectation.</Typography>
                    </div>
                </div>

            </footer>


        </div>
    )
}