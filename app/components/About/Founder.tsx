"use clinet";

import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";


export default function Founder() {
    return (
        <section className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4  ">
                <div className="flex flex-col lg:mt-20 mt-10">
                    <Typography variant="h2" className="w-50 ">Danny Akhtar</Typography>
                    <Typography variant="p" className="!text-primary !font-semibold mt-2"> Founder & Managing Director – Mr Luxury Travels</Typography>
                    <Typography variant="p" className="mt-4">Danny Akhtar is a highly respected luxury travel expert, renowned for curating exceptional, tailor-made journeys for discerning travellers worldwide. With decades of experience and an intimate knowledge of the global travel landscape, Danny specializes in designing bespoke itineraries that are seamless, exclusive, and truly unforgettable. </Typography>
                    <Typography variant="p" className="mt-6">Often referred to as <span className="font-semibold">“Mr Luxury Travel,”</span> Danny is celebrated for his meticulous attention to detail and his ability to transform travel dreams into extraordinary realities. From European city breaks and African safaris to honeymoons in Bali or the Maldives, beach escapes, wellness retreats, and once-in-a-lifetime adventures, every journey is carefully crafted to exceed expectations.</Typography>
                    <Typography variant="p" className="mt-6">Danny is a proud<span className="font-semibold">Virtuoso Travel Advisor</span>  and a partner of<span className="font-semibold">Global Travel Collection</span> , giving his clients access to unparalleled global infrastructure, preferred partnerships, exclusive benefits, and exceptional value. Whether managing complex corporate travel or creating indulgent leisure experiences, Danny delivers a level of service his clients consider the standard.</Typography>
                </div>
                <div>
                    <ImageComp
                        src={Images.AboutImg}
                        className="rounded-lg 2xl:w-[840px] lg:w-[640px] 2xl:h-[1080px] lg:h-[700px]"
                    />
                </div>

            </div>

            <div className="mt-10 mb-10">
                <ImageComp
                    src={Images.AboutImg2}
                    className="rounded-lg lg:mt-20 mt-8 object-cover 2xl:h-[405px] w-full lg:h-[300px]"
                />
            </div>
        </section>
    )
}