"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Button } from "./ui/button"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"
import { HyperUiInput } from "./hyper-ui-input"
import { HyperUiTextArea } from "./hyper-ui-textarea"

export default function ContactForm() {
    const formSchema = z.object({
        fullname: z.string().min(2, { message: "Please enter your fullname." }).max(100),
        email: z.string().email(),
        subject: z.string().min(1, { message: "What do you wanna talk about?" }),
        message: z.string().min(1, { message: "Please provide a brief description of the project." })
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            email: "",
            subject: "",
            message: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        const templateParams = {
            from_name: values.fullname,
            subject: values.subject,
            from_email: values.email,
            message: values.message
        }

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_KEY ?? ""
            )
            .then(
                () => {
                    toast.success(
                        "Thank for contacting. We'll be in touch soon!"
                    );
                    // console.log('SUCCESS!');
                },
                (error) => {
                    toast.error("Something went wrong. Please try again");
                    console.log('FAILED...', error);
                }
            );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <HyperUiInput label="Fullname" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <HyperUiInput label="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <HyperUiInput label="Subject" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <HyperUiTextArea label="Message" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
