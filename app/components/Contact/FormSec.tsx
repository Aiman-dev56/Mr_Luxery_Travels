"use client";

import React from "react";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";
import { Typography } from "../common/Typography";

export default function FormSec() {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        return;

    }



    return (
        <section className="container mx-auto px-4 mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* IMAGE SIDE */}
                <div className="w-full">
                    <ImageComp
                        src={Images.ContactImg}
                        className="rounded-xl object-cover w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[700px] 2xl:h-[1080px] 2xl:w-[940px]"
                    />
                </div>

                {/* FORM SIDE */}
                <div className="w-full max-w-xl lg:ml-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        <Typography variant="h2" className="lg:mt-10">
                            Begin Your Next Adventure With Us Today...
                        </Typography>

                        <input
                            placeholder="Full Name"
                            className="border border-primary placeholder:text-primary italic w-full py-3 px-4 rounded-lg"
                        />

                        <input
                            placeholder="Email"
                            className="border border-primary placeholder:text-primary italic w-full py-3 px-4 rounded-lg"
                        />

                        <input
                            placeholder="Contact Number"
                            className="border border-primary placeholder:text-primary italic w-full py-3 px-4 rounded-lg"
                        />

                        <textarea
                            placeholder="Message"
                            className="border border-primary placeholder:text-primary italic w-full py-3 px-4 rounded-lg min-h-[120px]"
                        />

                        <button className="bg-primary text-white py-3 px-8 rounded-lg w-full sm:w-fit sm:self-end transition hover:opacity-90">
                            Subscribe
                        </button>

                    </form>
                </div>

            </div>
        </section>
    )
}