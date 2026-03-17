"use clinet";

import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";
export default function Luxery() {
    return (
        <section className="container">
            <div className="flex flex-col gap-4 mt-14">
                <Typography variant="h2" className="w-40">Luxury Hotels</Typography>
                <Typography variant="p" className="w-160 ml-8 mt-4 mb-8">Access the world’s most prestigious hotels with MRLUXURYTRAVELS, from iconic city landmarks to serene coastal resorts. Enjoy exclusive perks such as upgrades, spa treatments, and hotel credits, ensuring every stay feels indulgent, seamless, and unforgettable.</Typography>

            </div>
            <ImageComp
                src={Images.LuxeryImg}
                className="w-full object-cover h-[400px] 2xl:w-[1960px] 2xl:h-[400px]  lg:h-[300px] rounded-lg"
            />

        </section>
    )
}