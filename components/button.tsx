"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
    {
        variants: {
            variant: {
                default: "bg-slate-900 text-white hover:bg-slate-800",
                destructive: "bg-red-600 text-white hover:bg-red-700",
                outline:
                    "border border-gray-300 text-gray-700 hover:bg-gray-100",
                ghost: "bg-transparent hover:bg-gray-200",
            },
            size: {
                sm: "h-8 px-3 text-sm",
                md: "h-10 px-5 text-base",
                lg: "h-12 px-6 text-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

// Types du composant, en fusionnant les props HTML et les variants
interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    children: ReactNode;
}

export default function Button({
    children,
    variant,
    size,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={buttonVariants({ variant, size, className })}
            {...props}
        >
            {children}
        </button>
    );
}
