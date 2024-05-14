import { cn } from "@/lib/utils";

type ProjectInfoTypes = {
    thumbnail: string,
    name: string
    url: string
    introduction: string
    description: string
}

type HyperUiCardTypes = {
    item: ProjectInfoTypes
    className?: string
}

export default function HyperUiCard({ className, item }: HyperUiCardTypes) {
    return (
        <article className={cn("flex-1 overflow-hidden rounded-lg transition duration-150 ease-linear hover:shadow-md hover:shadow-slate-100/50 hover:-translate-y-4", className)}>
            <img
                alt={item.name}
                src={item.thumbnail}
                className="h-56 w-full object-cover"
            />
            <div className="bg-zinc-100 text-left p-4 sm:p-6 h-[100%]">
                <h3 className="mt-0.5 text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2 line-clamp-3 text-gray-500">
                    {item.introduction}
                </p>
            </div>
        </article>
    )
}
