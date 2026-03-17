"use client";

import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";


export default function VillasSec() {
    return (
        <>
            <section className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 mt-20">
                    <div className="flex flex-col mt-10">
                        <Typography variant="h2" className="w-40">Villas Chalets</Typography>
                        <Typography variant="p" className="mt-4">Discover handpicked luxury villas designed for privacy, space, and style. From beachfront estates to countryside and mountain retreats, each property offers bespoke service, exceptional amenities, and a perfect home for families or groups.</Typography>

                    </div>
                    <div>
                        <ImageComp
                            src={Images.VillaImg}
                            alt=""
                            className="lg:w-[600px] lg:h-[300px] 2xl:w-[900px] 2xl:h-[400px] rounded-lg"

                        />
                    </div>

                </div>

            </section>
        </>
    )
}