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
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Can't be empty." })
      .email({ message: "Must be a valid email." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." })
      .max(50, { message: "Password can't exceed 50 characters limit." }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match!",
  });

const RegisterPage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await axios.post("/api/auth/register", data);
    if (response.status >= 200 && response.status < 300) {
      toast.success("User is successfully registered...");
      router.push("/login");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-16 px-6 py-12 md:justify-normal md:gap-20 md:py-20">
      <Image src={Logo} alt="Logo" />
      <section className="w-full space-y-10 rounded-xl bg-semiDarkBlue p-6 md:max-w-md md:rounded-[20px] md:p-8">
        <h1 className="text-[32px] font-light tracking-tight">Sign Up</h1>
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Repeat Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="password"
                        placeholder="Repeat Password"
                        required
                        autoComplete="off"
                        className={cn(
                          form.formState.errors.confirmPassword
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
              Create an account
            </Button>
          </form>
        </Form>

        <p className="text-center text-[15px] font-light">
          Already have an account?
          <Link href="/login" className="ml-2 text-vividRed">
            Login
          </Link>
        </p>
      </section>
    </main>
  );
};
export default RegisterPage;
