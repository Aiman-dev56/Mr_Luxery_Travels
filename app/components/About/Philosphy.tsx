"use clinet";

import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";

export default function Philosphy() {
    return (
        <>
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-28 gap-10 lg:mt-18 mt-10 ">
                    <div className="grid grid-cols-2 gap-4 ">


                        <div>
                            <div className="flex flex-col gap-2">
                                <ImageComp
                                    src={Images.AboutImg6}
                                    className="rounded-lg 2xl:w-[405px] 2xl:h-[405px] lg:w-[280px] lg:h-[280px]"
                                />
                                <ImageComp
                                    src={Images.AboutImg7}
                                    className="rounded-lg 2xl:w-[405px] 2xl:h-[405px] lg:w-[280px] lg:h-[280px]"
                                />

                            </div>

                        </div>
                        <div className="2xl:mt-30 lg:mt-24 ">
                            <ImageComp
                                src={Images.AboutImg8}
                                className="rounded-lg 2xl:w-[405px] 2xl:h-[600px] lg:h-[340px] lg:w-[240px] h-[180px]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:mt-30">
                        <Typography variant="h2" className="w-120">A Philosophy <br />
                            of Travel</Typography>
                        <Typography variant="p" className="mt-6">Danny’s passion for travel began at a young age. Growing up, his earliest memories of adventure were watching aeroplanes cross the sky while his grandmother would say, “There goes your father in the aeroplane.” Travel in those days meant long, arduous journeys by beautifully decorated buses through mountain villages — experiences that planted the seed for a lifelong fascination with the world beyond the horizon.</Typography>
                        <Typography variant="p" className="mt-6">This philosophy is at the heart of Mr Luxury Travels.</Typography>



                    </div>


                </div>

            </section >
        </>
    )
}