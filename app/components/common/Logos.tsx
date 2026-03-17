"use client";

import React from "react";
import { Images } from "@/app/Assets/Images";

const brands = [
    { name: "Toyota", logo: Images.Logo1 },
    { name: "Honda", logo: Images.Logo2 },
    { name: "BMW", logo: Images.Logo3 },
    { name: "Mercedes", logo: Images.Logo4 },
    { name: "Audi", logo: Images.Logo5 },
    { name: "Ford", logo: Images.Logo6 },
    { name: "Hyundai", logo: Images.Logo7 },
];

export default function BrandSlider() {
    return (
        <>
            <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 28s linear infinite;
          display: flex;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
       
        
        .brand-card img {
          transition: filter 0.3s ease;
          filter: grayscale(100%) opacity(0.6);
        }
        .brand-card:hover img {
          filter: grayscale(0%) opacity(1);
        }
      `}</style>

            <section className="w-full overflow-hidden relative mb-10">
                {/* Marquee */}
                <div style={{ overflow: "hidden", }}>
                    <div className="marquee-track">
                        {[...brands, ...brands].map((brand, i) => (
                            <div
                                key={i}
                                className="brand-card"
                                style={{
                                    display: "flex",
                                    gap: "16px",
                                    padding: "16px 32px",
                                    margin: "0 10px",
                                    cursor: "pointer",

                                }}
                            >
                                <img
                                    src={brand.logo.src}
                                    alt={brand.name}
                                    className="lg:w-[150px] 2xl:w-[200px]  lg:h-[150px] 2xl:h-[200px] md:w-[100px] md:h-[100px] sm:w-[40px] sm:h-[40px] w-32 h-32 object-contain"
                                />

                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
}