import { cn } from "@/lib/utils";
import { PortableText } from "@portabletext/react";

export default function RichText({ value, className }: any) {
    return (
        <div className={cn("w-full mt-2 z-20 prose text-zinc-100 prose-strong:font-semibold prose-strong:text-zinc-100", className)}>
            <PortableText value={value} />
        </div>
    )
}
