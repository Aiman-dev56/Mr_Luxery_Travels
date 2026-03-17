"use clinet";

import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";

export default function Destination() {
    return (
        <section className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
                <div className="flex flex-col gap-4 mt-14">
                    <Typography variant="h2" className="w-40">Destination Inspiration</Typography>
                    <Typography variant="p">Not sure where to go? MRLUXURYTRAVELS curates destination inspiration tailored to your desires, unveiling the world’s hottest hotels, hidden gems, and unique escapes designed to spark your imagination and wanderlust.</Typography>

                </div>
                <div>
                    <ImageComp
                        src={Images.DestImage}
                        className="w-full object-cover h-[400px] 2xl:w-[1960px] 2xl:h-[400px]  lg:h-[300px] rounded-lg"
                    />
                </div>

            </div>

        </section>
    )
}