"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Logo from "@/public/assets/logo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Can't be empty." })
    .email({ message: "Must be a valid email." }),
  password: z
    .string()
    .min(1, { message: "Can't be empty." })
    .max(50, { message: "Password can't exceed 50 characters limit." }),
});

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-16 px-6 py-12 md:justify-normal md:gap-20 md:py-20">
      <Image src={Logo} alt="Logo" />
      <section className="w-full space-y-10 rounded-xl bg-semiDarkBlue p-6 md:max-w-md md:rounded-[20px] md:p-8">
        <h1 className="text-[32px] font-light tracking-tight">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="Email Address"
                        required
                        autoComplete="off"
                        className={cn(
                          form.formState.errors.email
                            ? "focus-visible:border-b-vividRed"
                            : "focus-visible:border-b-white",
                        )}
                        {...field}
                      />
                      <FormMessage className="absolute bottom-4 right-0 pr-4" />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="password"
                        placeholder="Password"
                        required
                        autoComplete="off"
                        className={cn(
                          form.formState.errors.password
                            ? "focus-visible:border-b-vividRed"
                            : "focus-visible:border-b-white",
                        )}
                        {...field}
                      />
                      <FormMessage className="absolute bottom-4 right-0 pr-4" />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="mt-10 h-auto w-full rounded-md bg-vividRed py-4 text-[15px] font-light hover:bg-white hover:text-darkBlue"
            >
              Login to your account
            </Button>
          </form>
        </Form>

        <p className="text-center text-[15px] font-light">
          Don&#39;t have an account?{" "}
          <Link href="/register" className="ml-2 text-vividRed">
            Sign Up
          </Link>
        </p>
      </section>
    </main>
  );
};
export default LoginPage;
