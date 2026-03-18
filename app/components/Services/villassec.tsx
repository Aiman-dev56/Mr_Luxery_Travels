"use client";

import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";


export default function VillasSec() {
    return (
        <>
            <section className="container" id="villas">
                <div className="grid  grid-cols-2 lg:gap-20 gap-4 lg:mt-20 mt-10 px-4">
                    <div className="flex flex-col lg:mt-10">
                        <Typography variant="h2" className="lg:w-40">Villas Chalets</Typography>
                        <Typography variant="p" className="lg:mt-4 mt-2 ">Discover handpicked luxury villas designed for privacy, space, and style. From beachfront estates to countryside and mountain retreats, each property offers bespoke service, exceptional amenities, and a perfect home for families or groups.</Typography>

                    </div>
                    <div>
                        <ImageComp
                            src={Images.VillaImg}
                            alt=""
                            className="lg:w-[600px] lg:h-[300px] 2xl:w-[900px] 2xl:h-[400px] md:w-[500px] md:h-[250px] sm:w-[300px] sm:h-[300px] rounded-lg lg:mt-0 mt-4"

                        />
                    </div>

                </div>

            </section>
        </>
    )
}