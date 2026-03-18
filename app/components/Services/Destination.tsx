"use clinet";

import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";

export default function Destination() {
    return (
        <section className="container mx-auto px-4 lg:mt-14" id="destination">
            <div className="grid grid-cols-2 lg:gap-8 gap-4 lg:mt-20 mt-10">
                <div className="flex flex-col  lg:mt-20 mt-6">
                    <Typography variant="h2" className="w-40">Destination Inspiration</Typography>
                    <Typography variant="p" className="lg:w-140 w-40 mt-2 mb-8">Not sure where to go? MRLUXURYTRAVELS curates destination inspiration tailored to your desires, unveiling the world’s hottest hotels, hidden gems, and unique escapes designed to spark your imagination and wanderlust.</Typography>

                </div>
                <div>
                    <ImageComp
                        src={Images.DestImage}
                        className="lg:w-[600px] lg:h-[300px] 2xl:w-[900px] 2xl:h-[400px] md:w-[500px] md:h-[250px] sm:w-[300px] sm:h-[300px] rounded-lg lg:mt-0 mt-8"
                    />
                </div>

            </div>

        </section>
    )
}