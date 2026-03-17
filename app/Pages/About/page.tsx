"use client";


import { Typography } from "@/app/components/common/Typography";
import Footer from "../../components/Layout/Footer";
import { ImageComp } from "@/app/components/common/Images";
import { Images } from "@/app/Assets/Images";

export default function AboutPage() {
    return (
        <div className="m-6">
            <section className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
                    <div className="flex flex-col mt-20">
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
                        className="rounded-lg mt-20 object-cover 2xl:h-[405px] w-full lg:h-[300px]"
                    />
                </div>
            </section>

            <section className="container ">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-28 ">
                    <div className="flex flex-col mt-10">
                        <Typography variant="h2" className="w-120">A Journey <br />That Began <br /> With Curiosity</Typography>
                        <Typography variant="p" className="mt-6">Danny’s passion for travel began at a young age. Growing up, his earliest memories of adventure were watching aeroplanes cross the sky while his grandmother would say, “There goes your father in the aeroplane.” Travel in those days meant long, arduous journeys by beautifully decorated buses through mountain villages — experiences that planted the seed for a lifelong fascination with the world beyond the horizon.</Typography>
                        <Typography variant="p" className="mt-6">In 1992, while sitting on a rock in Hawaii, Danny made a life-changing decision: travel would not just be a passion, but his profession. That moment sparked a journey that continues to this day.</Typography>
                        <Typography variant="p" className="mt-6">At just 22, Danny embarked on his first major trip around the world — flying from London through Asia, Australia, New Zealand, the Pacific Islands, Hawaii, the United States, and back home. From that moment on, he was truly “bitten by the travel bug.”.</Typography>


                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
                        <div className="2xl:mt-30 lg:mt-24 lg:ml-10 " >
                            <ImageComp
                                src={Images.AboutImg3}
                                className="rounded-lg 2xl:w-[405px] 2xl:h-[600px] lg:h-[340px] lg:w-[240px]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <ImageComp
                                src={Images.AboutImg4}
                                className="rounded-lg 2xl:w-[405px] 2xl:h-[405px] lg:w-[280px] lg:h-[280px]"
                            />
                            <ImageComp
                                src={Images.AboutImg5}
                                className="rounded-lg 2xl:w-[405px] 2xl:h-[405px] lg:w-[280px] lg:h-[280px]"
                            />

                        </div>


                    </div>

                </div>

            </section>
            <section className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-28 mt-18 ">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">


                        <div className=""  >
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
                                className="rounded-lg 2xl:w-[405px] 2xl:h-[600px] lg:h-[340px] lg:w-[240px]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-30">
                        <Typography variant="h2" className="w-120">A Philosophy <br />
                            of Travel</Typography>
                        <Typography variant="p" className="mt-6">Danny’s passion for travel began at a young age. Growing up, his earliest memories of adventure were watching aeroplanes cross the sky while his grandmother would say, “There goes your father in the aeroplane.” Travel in those days meant long, arduous journeys by beautifully decorated buses through mountain villages — experiences that planted the seed for a lifelong fascination with the world beyond the horizon.</Typography>
                        <Typography variant="p" className="mt-6">This philosophy is at the heart of Mr Luxury Travels.</Typography>



                    </div>


                </div>

            </section >

            <section className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10 ">
                    <div className="flex flex-col mt-20">
                        <Typography variant="h2" className="w-120 ">Travel Beyond Your Expectations</Typography>

                        <Typography variant="p" className="mt-6">Today, Danny continues to travel extensively, sharing his insights, experiences, and expertise with a global audience through Instagram and TikTok, inspiring thousands with breathtaking destinations, insider tips, and luxury travel guidance. </Typography>
                        <Typography variant="p" className="mt-6">With his extensive industry relationships, purchasing power, and unwavering commitment to excellence, Danny confidently delivers travel experiences that go beyond expectations — both in quality and value.</Typography>
                        <Typography variant="p" className="mt-6">If you are seeking a travel expert who genuinely goes above and beyond, Danny Akhtar is the trusted name in luxury travel.</Typography>
                        <Typography variant="p" className="mt-18 !font-semibold">Experience Travel Beyond Your Expectations.</Typography>
                        <Typography variant="p" className="italic">Danny Akhtar, Managing Director</Typography>
                    </div>
                    <div>
                        <ImageComp
                            src={Images.AboutImg9}
                            className="rounded-lg 2xl:w-[840px] lg:w-[640px] 2xl:h-[840px] lg:h-[640px]"
                        />
                    </div>

                </div>

            </section>


            <Footer />
        </div >
    )
}