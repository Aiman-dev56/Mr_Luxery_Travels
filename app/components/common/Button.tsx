import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export default function Button({
    children,
    onClick,
    className = "",
    type = "button",
    disabled = false,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`rounded-md border-primary py-4 px-6 bg-gray-200 text-primary disabled:opacity-50 disabled:cursor-not-allowed ${className}`}>
            {children}

        </button>
    )

}