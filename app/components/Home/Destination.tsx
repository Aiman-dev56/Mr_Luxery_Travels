"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Images } from "../../Assets/Images";
import Image from "next/image";
import { Typography } from "../common/Typography";

const destinations = [
    {
        id: 2,
        name: "Maldives",
        tagline: "Where ocean meets paradise",
        image: Images.DestImg,
    },
    {
        id: 1,
        name: "Paris",
        tagline: "Travel the world in style",
        image: Images.DestImg2,
    },
    {
        id: 3,
        name: "Santorini",
        tagline: "The jewel of the Aegean",
        image: Images.DestImg3,
    },
    {
        id: 4,
        name: "Bali",
        tagline: "Island of the Gods",
        image: Images.DestImg4,
    },
    {
        id: 5,
        name: "Dubai",
        tagline: "Luxury beyond limits",
        image: Images.DestImg,
    },
];

export default function Destinations() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const scroll = (dir: "left" | "right") => {
        if (!scrollRef.current) return;
        const amount = 200; // Matches card width + gap
        scrollRef.current.scrollBy({
            left: dir === "right" ? amount : -amount,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 20);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    };

    return (
        <>
            <style>{`
                .dest-scroll::-webkit-scrollbar { display: none; }
                .dest-scroll { 
                    -ms-overflow-style: none; 
                    scrollbar-width: none;
                    /* Fades out everything on the left side */
                    mask-image: linear-gradient(to right, transparent 0%, black 15%, black 100%);
                    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 100%);
                    mask-size: 100% 100%;
                    -webkit-mask-size: 100% 100%;
                }

                .dest-card { transition: all 0.5s ease; }
                
                /* Caption logic: only visible when card is 'active' or on hover */
                .caption-box { 
                    opacity: 0; 
                    transform: translateY(10px);
                    transition: all 0.4s ease;
                }
                
                /* This targets the first fully visible card in the viewport */
                .dest-card:first-child .caption-box,
                .dest-card:hover .caption-box {
                    opacity: 1;
                    transform: translateY(0);
                }

                .card-img-wrapper {
                    transition: transform 0.5s cubic-bezier(.25,.8,.25,1);
                }
                .dest-card:hover .card-img-wrapper {
                    transform: scale(1.05);
                }
            `}</style>

            <section className="container w-full py-10 bg-white overflow-hidden">
                <div className="w-full ">

                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between px-6 lg:px-12 mb-10 gap-6">
                        <div className="2xl:w-[940px] lg:w-[700px] ">
                            <Typography variant="h2">Destinations</Typography>
                            <Typography variant="p" className="!text-para lg:w-140 w-100">
                                MRLUXURYTRAVELS is dedicated to providing the ultimate lifestyle service, guiding you through the ever-changing world of luxury, making every moment a memory. Whether you require assistance with your day-to-day life or your lifelong dreams, the MRLUXURYTRAVELS team are experts in all things luxury
                            </Typography>
                        </div>

                        <div className="flex items-center">
                            <button onClick={() => scroll("left")} disabled={!canScrollLeft} className="nav-btn w-12 opacity-80 hover:opacity-100 disabled:opacity-20">
                                <Image src={Images.LeftButton} alt="prev" />
                            </button>
                            <button onClick={() => scroll("right")} disabled={!canScrollRight} className="nav-btn w-12 opacity-80 hover:opacity-100 disabled:opacity-20">
                                <Image src={Images.RightButton} alt="next" />
                            </button>
                        </div>
                    </div>

                    {/* Gallery Container - 70% Width, Aligned Right */}
                    <div className="flex justify-end">
                        <div className="w-full lg:w-[60%] relative">

                            <div
                                ref={scrollRef}
                                onScroll={handleScroll}
                                className="dest-scroll flex flex-row gap-6 overflow-x-auto pb-20 pt-5 pr-[10%] "
                            /* pr-[10%] ensures the last image hangs off the edge as requested */
                            >
                                {destinations.map((dest) => (
                                    <div
                                        key={dest.id}
                                        className="dest-card right-0 flex-shrink-0 relative"
                                        style={{ width: "220px" }}
                                    >
                                        {/* Image Container */}
                                        <div className="card-img-wrapper relative h-[320px] rounded-2xl overflow-hidden shadow-lg">
                                            <img
                                                src={dest.image.src}
                                                alt={dest.name}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Gradient Overlay for Text Readability */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>

                                        {/* Caption - Positioned below image but controlled by .dest-card hover/first-child */}
                                        <div className="caption-box absolute top-[335px] left-0 w-full">
                                            <h3 className="text-gray-900 text-xl font-light">{dest.name}</h3>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={11} className="text-gray-400" />
                                                <p className="text-gray-400 text-[10px] font-light tracking-widest uppercase">
                                                    {dest.tagline}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}