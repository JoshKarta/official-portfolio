import { TPropject } from "@/blocs/projects-block";
import { urlFor } from "@/lib/sanity";
import { cn } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type HyperUiCardTypes = {
    item: TPropject
    className?: string
}

export default function HyperUiCard({ className, item }: HyperUiCardTypes) {
    return (
        <article className={cn("flex-1 overflow-hidden rounded-lg transition duration-150 ease-linear hover:shadow-md hover:shadow-slate-100/50 hover:-translate-y-4", className)}>
            <div className="relative h-60 w-full">
                <Image src={urlFor(item.thumbnail).url()} fill className="object-cover" alt={item.name} />
            </div>
            <div className="bg-zinc-100 text-left p-4 sm:p-6 h-[100%]">
                <h3 className="mt-0.5 text-lg font-semibold text-gray-900">{item.name}</h3>
                {/* <p className="mt-2 line-clamp-3 text-gray-500">
                    {item.introduction}
                </p> */}
                <div className="w-full mt-2 !line-clamp-2 prose text-zinc-500 prose-strong:font-semibold prose-strong:text-zinc-500">
                    <PortableText value={item.introduction} />
                </div>
            </div>
        </article>
    )
}
