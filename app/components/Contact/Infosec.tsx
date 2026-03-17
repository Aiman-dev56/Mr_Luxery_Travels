"use clinet";

import React from "react";
import { Typography } from "../common/Typography";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

export default function InfoSec() {
    return (
        <>
            <section className="container mx-auto px-4 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col gap-4 max-w-xl">
                        <Typography variant="h2">
                            Contact Us Today
                        </Typography>

                        <Typography variant="h6">
                            To Start Your Journey Of A Lifetime
                        </Typography>

                        <Typography variant="p" className="text-gray-600">
                            Step into a world of curated elegance, seamless service,
                            and unforgettable destinations
                        </Typography>
                    </div>

                    {/* RIGHT CONTACT INFO */}
                    <div className="flex flex-col gap-8">

                        {/* PHONE */}
                        <div className="flex items-start gap-4">
                            <div className="border border-primary p-3 rounded-lg shrink-0">
                                <FiPhone size={28} color="#624A43" />
                            </div>

                            <Typography variant="p" className="!text-primary text-base md:text-lg">
                                +44 (0)203 595 1487
                            </Typography>
                        </div>

                        {/* EMAIL */}
                        <div className="flex items-start gap-4">
                            <div className="border border-primary p-3 rounded-lg shrink-0">
                                <CiMail size={28} color="#624A43" />
                            </div>

                            <Typography
                                variant="p"
                                className="!text-primary text-base md:text-lg underline cursor-pointer break-all"
                            >
                                danny@mrluxurytravels.com
                            </Typography>
                        </div>

                        {/* ADDRESS */}
                        <div className="flex items-start gap-4">
                            <div className="border border-primary p-3 rounded-lg shrink-0">
                                <CiLocationOn size={28} color="#624A43" />
                            </div>

                            <Typography variant="p" className="!text-primary text-base md:text-lg">
                                101 St Martin's Lane London,
                                WC2N 4AZ
                            </Typography>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}