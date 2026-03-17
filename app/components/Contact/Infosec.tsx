"use clinet";

import React from "react";
import { Typography } from "../common/Typography";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

export default function InfoSec() {
    return (
        <>
            <section className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-18">
                    <div className="flex flex-col lg:ml-40 mt-8">
                        <Typography variant="h2" className="w-60">Contact Us Today</Typography>
                        <Typography variant="h6">To Start Your Journey Of A Lifetime</Typography>
                        <Typography variant="p" className="w-100">Step into a world of curated elegance, seamless service, and unforgettable destinations</Typography>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-8">
                        <div className="flex justify-between items-center gap-6">
                            <div className="border border-primary p-3 rounded-lg">
                                <FiPhone size={34} color="#624A43" />

                            </div>
                            <div>
                                <Typography variant="p" className="!text-primary lg:!text-[20px] lg:w-60 ">+44 (0)203 595 1487</Typography>
                            </div>

                        </div>
                        <div className="flex justify-between items-center gap-6">
                            <div className="border border-primary p-3 rounded-lg">
                                <CiMail size={34} color="#624A43" />

                            </div>
                            <div>
                                <Typography variant="p" className="!text-primary lg:!text-[20px] lg:w-60 cursor-pointer underline">danny@mrluxurytravels.com</Typography>
                            </div>

                        </div>
                        <div className="flex justify-between items-center gap-6">
                            <div className="border border-primary p-3 rounded-lg">
                                <CiLocationOn size={34} color="#624A43" />

                            </div>
                            <div>
                                <Typography variant="p" className="!text-primary lg:!text-[20px] lg:w-60 ">101 St Martin's Lane London,
                                    WC2N 4AZ</Typography>
                            </div>

                        </div>


                    </div>
                </div>
            </section >
        </>
    )
}