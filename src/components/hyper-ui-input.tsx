import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const HyperUiInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, ...props }, ref) => {
        return (
            <label
                htmlFor={label}
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-accent-two focus-within:ring-1 focus-within:ring-accent-two"
            >
                <input
                    autoComplete="off"
                    type={type}
                    ref={ref}
                    id={label}
                    className={cn("w-full peer px-3 py-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 active:!bg-transparent", className)}
                    placeholder={label}
                    {...props}
                    style={{ backgroundColor: 'transparent' }}
                />

                <span
                    className="pointer-events-none absolute start-2.5 top-0 bg-foreground -translate-y-1/2 p-0.5 text-xs text-zinc-100 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    {label}
                </span>
            </label>
        )
    }
)
HyperUiInput.displayName = "HyperUiInput"

export { HyperUiInput as HyperUiInput }
