"use client";

import React from "react";
import { Typography } from "../common/Typography";
import { Images } from "../../Assets/Images";
import Image from "next/image";

export default function Services() {
    return (
        <section className="container mx-auto px-6 lg:px-10 flex flex-col">

            {/* Heading */}
            <div className="max-w-[700px] mb-10">
                <Typography variant="h2">Services</Typography>

                <Typography variant="p" className="lg:w-140 w-100">
                    MRLUXURYTRAVELS is dedicated to providing the ultimate lifestyle
                    service, guiding you through the ever-changing world of luxury,
                    making every moment a memory. Whether you require assistance with
                    your day-to-day life or your lifelong dreams, the MRLUXURYTRAVELS
                    team are experts in all things luxury.
                </Typography>
            </div>

            {/* Top Grid */}
            <div className="grid lg:grid-cols-4 gap-4">

                {/* Travel */}
                <div className="relative overflow-hidden rounded-lg lg:h-[510px] h-[300px]">
                    <Image
                        src={Images.ServiceImg}
                        alt="Travel"
                        fill
                        className="object-cover"
                    />

                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)"
                        }}
                    />

                    <div className="absolute bottom-0 left-0 p-8 text-white">
                        <Typography variant="h4">Travel</Typography>
                        <Typography variant="p" className="text-white/80">
                            Travel the world
                        </Typography>
                    </div>
                </div>

                {/* VIP */}
                <div className="relative overflow-hidden rounded-lg lg:h-[510px] h-[300px]">
                    <Image
                        src={Images.ServiceImg2}
                        alt="VIP Service"
                        fill
                        className="object-cover"
                    />

                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)"
                        }}
                    />

                    <div className="absolute bottom-0 left-0 p-8 text-white">
                        <Typography variant="h4">VIP Service</Typography>
                        <Typography variant="p" className="text-white/80">
                            Travel beyond Ordinary
                        </Typography>
                    </div>
                </div>

                {/* Lifestyle + Shopping */}
                <div className="col-span-2 grid grid-cols-2 gap-2">

                    {/* Lifestyle */}
                    <div className="relative overflow-hidden rounded-lg lg:h-[240px] h-[150px]">
                        <Image
                            src={Images.ServiceImg3}
                            alt="Lifestyle"
                            fill
                            className="object-cover"
                        />

                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)"
                            }}
                        />

                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <Typography variant="h4">Life Style</Typography>
                            <Typography variant="p" className="text-white/80">
                                Live Your Ultimate Lifestyle
                            </Typography>
                        </div>
                    </div>

                    {/* Shopping */}
                    <div className="relative overflow-hidden rounded-lg lg:h-[240px] h-[150px]">
                        <Image
                            src={Images.ServiceImg4}
                            alt="Shopping"
                            fill
                            className="object-cover"
                        />

                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)"
                            }}
                        />

                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <Typography variant="h4">Shopping</Typography>
                            <Typography variant="p" className="text-white/80">
                                Sourcing the Extraordinary
                            </Typography>
                        </div>
                    </div>

                    {/* Wellness */}
                    <div className="relative overflow-hidden rounded-lg col-span-2 lg:h-[260px] h-[150px]">
                        <Image
                            src={Images.ServiceImg5}
                            alt="Wellness"
                            fill
                            className="object-cover"
                        />

                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)"
                            }}
                        />

                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <Typography variant="h4">Wellness</Typography>
                            <Typography variant="p" className="text-white/80">
                                Mind Body & Soul
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="flex w-full gap-2 mt-4">

                {/* Personal */}
                <div className="relative flex-1 lg:h-[260px] h-[150px]">
                    <Image
                        src={Images.ServiceImg6}
                        alt="Personal"
                        fill
                        className="object-cover rounded-lg"
                    />

                    <div
                        className="absolute inset-0 rounded-lg"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)"
                        }}
                    />

                    <div className="absolute bottom-0 left-0 p-6 text-white">
                        <Typography variant="h4">Personal</Typography>
                        <Typography variant="p" className="text-white/80">
                            Personal Service Redefined
                        </Typography>
                    </div>
                </div>

                {/* Families */}
                <div className="relative flex-[2] lg:h-[260px] h-[150px]">
                    <Image
                        src={Images.ServiceImg7}
                        alt="Families"
                        fill
                        className="object-cover rounded-lg"
                    />

                    <div
                        className="absolute inset-0 rounded-lg"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)"
                        }}
                    />

                    <div className="absolute bottom-0 left-0 p-6 text-white">
                        <Typography variant="h4">Families</Typography>
                        <Typography variant="p" className="text-white/80">
                            The Family Collection
                        </Typography>
                    </div>
                </div>

                {/* Hot & New */}
                <div className="relative flex-1 lg:h-[260px] h-[150px]">
                    <Image
                        src={Images.ServiceImg8}
                        alt="Hot & New"
                        fill
                        className="object-cover rounded-lg"
                    />

                    <div
                        className="absolute inset-0 rounded-lg"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)"
                        }}
                    />

                    <div className="absolute bottom-0 left-0 p-6 text-white">
                        <Typography variant="h4">Hot & New</Typography>
                        <Typography variant="p" className="text-white/80">
                            Exciting Openings Exclusive Offers
                        </Typography>
                    </div>
                </div>

            </div>

        </section>
    );
}