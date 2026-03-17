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
        <section className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20  mt-20">
                <div>
                    <ImageComp
                        src={Images.ContactImg}
                        className="rounded-lg 2xl:h-[1080px] 2xl:w-[940px] lg:h-[640px] lg:w-[780px] object-cover"
                    />
                </div>
                <div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col lg:w-120 2xl:w-[800px] lg:mt-10">
                        <div>
                            <Typography variant="h2" className="lg:w-100">Begin Your Next Adventure With
                                Us Today...</Typography>
                        </div>
                        <div className="mt-8">
                            <input type="name"
                                placeholder="Full Name"
                                className=" border border-primary placeholder:text-primary italic w-full 2xl:py-3 2xl:px-4 lg:py-2 lg:px-4  rounded-lg "
                            />
                        </div>
                        <div className="mt-8">
                            <input type="email"
                                placeholder="Email"
                                className=" border border-primary placeholder:text-primary italic w-full 2xl:py-3 2xl:px-4 lg:py-2 lg:px-4 rounded-lg "
                            />
                        </div>
                        <div className="mt-8">
                            <input type="text"
                                placeholder="Contact Number"
                                className=" border border-primary placeholder:text-primary italic w-full 2xl:py-3 2xl:px-4 lg:py-2 lg:px-4  rounded-lg "
                            />
                        </div>
                        <div className="mt-8">
                            <textarea
                                placeholder="Message"
                                className=" border border-primary placeholder:text-primary italic w-full 2xl:py-3 2xl:px-4 lg:py-2 lg:h-[100px] 2xl:h-[160px] lg:px-4  rounded-lg "
                            />
                        </div>
                        <div className="flex items-end justify-end">
                            <button
                                className=" bg-primary text-white py-2 px-6 rounded-lg mt-4"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}