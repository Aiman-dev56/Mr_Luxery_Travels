"use client";

import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";

export default function PrivateIsland() {
    return (
        <>
            <section className="container mx-auto px-4 lg:mt-14" id="private">


                <Typography variant="h2" className="w-40 lg:mt-20 mt-10">Private Island</Typography>
                <Typography variant="p" className="lg:w-160 w-70 mt-4 mb-8">Unwind in pure seclusion with exclusive access to private islands worldwide. Pristine beaches, luxurious villas, and unmatched privacy create the ultimate escape for families or couples seeking total peace and exclusivity.</Typography>

                <div>
                    <ImageComp
                        src={Images.IslandImg}
                        className="w-full object-cover  h-[140px] sm:h-[200px] md:h-[260px] lg:h-[300px] 2xl:h-[380px] rounded-lg"
                    />


                </div>
            </section>
        </>
    )
}