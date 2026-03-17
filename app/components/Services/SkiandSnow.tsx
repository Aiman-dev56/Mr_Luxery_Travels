"use client";

import React from "react";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";
import { Typography } from "../common/Typography";


export default function SkiandSnow() {
    return (
        <>
            <section className="container">
                <div className="mt-20">
                    <ImageComp
                        src={Images.SkiImg}
                        className="w-full object-cover h-[400px] 2xl:w-[1960px] 2xl:h-[400px]  lg:h-[300px] rounded-lg"
                    />

                </div>

                <div className="flex flex-col mt-10">
                    <Typography variant="h2" className="w-60">Ski & Snow</Typography>
                    <Typography variant="p" className="mt-4 w-160"> From glamorous Alpine chalets to remote igloo stays, our ski and snow escapes combine adventure with indulgence. Think private instructors, luxury après-ski, and magical winter landscapes tailoredfor every level of skier.</Typography>

                </div>

            </section>
        </>
    )
}