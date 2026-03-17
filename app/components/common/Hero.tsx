"use client";

import Image from "next/image";
import { Typography } from "./Typography";
import { Images } from "@/app/Assets/Images";



export default function Hero() {
    return (
        <div>
            <section className=" flex justify-center  2xl:h-[1080px] lg:h-[90vh] md:h-[50vh] sm:h-[50vh] h-[50vh] mb-10 w-full overflow-hidden">
                <div className="relative w-[98%]  ">
                    <Image
                        src={Images.HeroImage}
                        alt="heroImage"
                        fill
                        unoptimized
                        className="object-cover z-0 rounded-md"
                    />
                    <div className="absolute inset-0 bg-black/10 z-10" />

                    {/* Your content here */}
                    <div className="relative z-20 flex flex-col w-[84%] sm:w-[60%] md:w-[60%] lg:w-[50%] 2xl:w-[60%] py-2 px-4 justify-start 2xl:top-[200px] lg:top-[180px] left-[20px] md:top-[200px] sm:top-[10px] top-[60px]">
                        <Typography variant="subtitle" color="secondary">Find And Book Your Perfect Destination.</Typography>
                        <Typography variant="h1" >Plan Your Next Trip</Typography>
                        <Typography variant="p" className="!text-white">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</Typography>
                    </div>
                </div>


            </section>



        </div>

    );
}