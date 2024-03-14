"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader, Mail } from "lucide-react";
import { useState } from "react";
import { addUserToMailList } from "@/lib/actions";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  email: z.string().email({
    message: "Email is required.",
  }),
});

export function Subscribe() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      await addUserToMailList(values.email);
      toast({
        variant: "successful",
        title: "Successful.",
        description: "You have been added to the mail list.",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-full md:w-fit font-normal text-sm px-3 py-4 mb-20 md:mb-0 rounded-custom"
          onClick={() => setOpen(true)}
        >
          <Mail color="black" className="mr-2" /> Subscribe to our mail list
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-[16px] p-6 max-w-[90vw] md:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome to Quotebox</DialogTitle>
          <DialogDescription>
            Subscribe now to receive uplifting and empowering quotes straight to
            your inbox every morning.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="quotebox@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="sm:justify-start">
              <Button type="submit" className="w-full">
                {loading && <Loader color="black" className="animate-spin mr-2" />}
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
