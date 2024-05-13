import { cn } from "@/lib/utils";

export default function Heading({ title, className, children }: { title: string, className?: string, children?: string | React.ReactNode }) {
    return (
        <div className={cn(className)}>
            <h3 className="text-3xl font-bold text-zinc-100">
                {title}
            </h3>
            <p className="text-zinc-100 mt-2 z-20">
                {children}
            </p>
        </div>
    )
}
