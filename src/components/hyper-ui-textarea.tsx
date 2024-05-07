import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
}

const HyperUiTextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, placeholder, ...props }, ref) => {
        return (
            <label
                htmlFor={label}
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-accent-two focus-within:ring-1 focus-within:ring-accent-two"
            >
                <textarea
                    className={cn("w-full min-h-[80px] peer px-3 py-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0", className)}
                    ref={ref}
                    placeholder={label}
                    {...props}
                />

                <span
                    className="pointer-events-none absolute start-2.5 top-0 bg-foreground -translate-y-1/2 p-0.5 text-xs text-zinc-100 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    {placeholder ? placeholder : label} 
                </span>
            </label>
        )
    }
)
HyperUiTextArea.displayName = "HyperUiTextArea"

export { HyperUiTextArea }
