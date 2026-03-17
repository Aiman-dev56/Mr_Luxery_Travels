"use client";

import React from "react";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";
import { Typography } from "../common/Typography";

export default function Adventures() {
    return (
        <>
            <section className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-20">
                    <ImageComp
                        src={Images.AdventureImg}
                        className="lg:w-[600px] lg:h-[300px] 2xl:w-[900px] 2xl:h-[400px] rounded-lg"


                    />
                    <div className="flex flex-col mt-20">
                        <Typography variant="h2" className="w-40">Adventures</Typography>
                        <Typography variant="p" className="w-140 mt-2 mb-8">For those craving adrenaline, our adventure escapes range from African safaris to rainforest treks. LURA curates extraordinary journeys balancing exhilaration with comfort, delivering once-in-a-lifetime experiences in nature’s most breath taking settings.</Typography>
                    </div>

                </div>

            </section>
        </>
    )
}