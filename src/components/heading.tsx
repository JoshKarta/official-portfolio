export default function Heading({ title, children }: { title: string, children?: string | React.ReactNode }) {
    return (
        <div>
            <h3 className="text-3xl font-bold text-zinc-100">
                {title}
            </h3>
            <p className="text-zinc-100 mt-2 z-20">
                {children}
            </p>
        </div>
    )
}
