"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

export default function SubscribeForm() {
  const createSubscription = useMutation(api.subscriptions.createSubscription);

  const formSchema = z.object({
    email: z.string().email(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      createSubscription({ email: values.email });
      toast.success("Check your email for updates");
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@doe.com" {...field} />
              </FormControl>
              <FormDescription className="text-neutral-400">
                You can always unsubscribe
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </Form>
  );
}
