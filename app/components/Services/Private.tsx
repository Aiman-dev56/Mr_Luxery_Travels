"use client";

import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";

export default function PrivateIsland() {
    return (
        <>
            <section className="container">


                <Typography variant="h2" className="w-40 mt-20">Private Island</Typography>
                <Typography variant="p" className="w-160 mt-4 mb-8">Unwind in pure seclusion with exclusive access to private islands worldwide. Pristine beaches, luxurious villas, and unmatched privacy create the ultimate escape for families or couples seeking total peace and exclusivity.</Typography>

                <div>
                    <ImageComp
                        src={Images.IslandImg}
                        className="w-full object-cover h-[400px] 2xl:w-[1960px] 2xl:h-[400px]  lg:h-[300px]  rounded-lg"
                    />


                </div>
            </section>
        </>
    )
}