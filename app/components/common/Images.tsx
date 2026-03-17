import React from "react";
import { StaticImageData } from "next/image";

// custom image comp\

interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
    src: string | StaticImageData;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
}

export const ImageComp = ({ src, alt, width, height, className, ...rest }: ImageProps) => {
    const imgSrc = typeof src === 'string' ? src : src.src;
    return (
        <div>
            <img
                src={imgSrc}
                alt={alt}
                width={width}
                height={height}
                className={className}
                loading="lazy"
                {...rest}
            />
        </div>
    )
}