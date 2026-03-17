import React, { type ElementType } from "react";

type Variant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h6"
    | "p"
    | "subtitle";

type color = "primary" | "secondary" | "body";

const tags: Record<Variant, ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h6: "h6",
    p: "p",
    subtitle: "p",
};

const sizes: Record<Variant, string> = {
    h1: "2xl:text-[200px] lg:text-[110px] md:text-[80px] sm:text-[60px] text-[50px] leading-none text-secondary first-letter:uppercase  font-semibold",
    h2: "2xl:text-[100px] lg:text-[60px] leading-none text-primary md:text-[60px] sm:text-[50px] text-[40px] first-letter:uppercase ",
    h3: "lg:text-2xl  text-xl first-letter:uppercase font-medium",
    h4: "2xl:text-[40px] lg:text-[30px] text-xl text-secondary first-letter:uppercase ",
    h6: "lg:text-[24px] 2xl:text-[34px] text-primary ",
    p: "  leading-tight lg:text-[17px] 2xl:text-[20px] text-body  md:text-[12px] sm:text-[10px] text-[8px]",
    subtitle: "2xl:text-[30px] md:text-[14px] sm:text-[12px] text-[10px] font-medium !text-secondary",
};

interface Props {
    variant?: Variant;
    children: React.ReactNode;
    className?: string;
    color?: color;
    as?: ElementType;

}

export const Typography = ({
    variant = "h1",
    children,
    className = "",
    color = "body",
    as,
}: Props): React.ReactElement => {
    const Tag = as ?? tags[variant];

    return (
        <Tag className={`${sizes[variant]} ${className} ${color}`}>
            {children}
        </Tag>
    );
};