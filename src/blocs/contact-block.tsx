import ContactForm from "@/components/contact-from";
import Heading from "@/components/heading";

export default function ContactBlock() {
    // https://dribbble.com/shots/22656453-Get-in-touch-Untitled-UI
    return (
        <div className="py-12 w-full bg-dot-slate-500/[0.2] relative flex flex-col items-center justify-center container-screen">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-primary-two-500 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>

            {/* Content */}
            <div className="w-full text-zinc-100 flex flex-col gap-6 max-w-4xl">
                <Heading title="Let's get in touch" className="!text-center">Let's chat about how I can help you.</Heading>
                <ContactForm />
            </div>
        </div>
    )
}
