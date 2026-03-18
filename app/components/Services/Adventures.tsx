"use client";

import React from "react";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";
import { Typography } from "../common/Typography";

export default function Adventures() {
    return (
        <>
            <section className="container mx-auto px-4 lg:mt-14" id="adventures">
                <div className="grid grid-cols-2 lg:gap-8 gap-4 lg:mt-20 mt-10">
                    <ImageComp
                        src={Images.AdventureImg}
                        className="lg:w-[600px] lg:h-[300px] 2xl:w-[900px] 2xl:h-[400px] md:w-[500px] md:h-[250px] sm:w-[300px] sm:h-[300px] rounded-lg lg:mt-0 mt-4"


                    />
                    <div className="flex flex-col lg:mt-20 mt-6">
                        <Typography variant="h2" className="lg:w-40 w-30">Adventures</Typography>
                        <Typography variant="p" className="lg:w-140 w-46 mt-2 mb-8">For those craving adrenaline, our adventure escapes range from African safaris to rainforest treks. LURA curates extraordinary journeys balancing exhilaration with comfort, delivering once-in-a-lifetime experiences in nature’s most breath taking settings.</Typography>
                    </div>

                </div>

            </section>
        </>
    )
}