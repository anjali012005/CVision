"use client";

import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function Login() {
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    return (
        <div className="m-10 flex justify-center items-center ">
            <div className="border-2 border-amber-500">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit((data) => console.log(data))} className="space-y-6 w-150 p-5">
                        <h2><b>Welcome Back! Continue Your Interview Journey</b></h2>


                        {/* Email field */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Enter Your Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Password field */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Enter Your Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <button type="submit" className="px-4 py-2 bg-amber-500 text-white rounded ">
                            Login
                        </button>

                        <p className="text-gray-400">Do not  have an account ?<b> <a href='/' className="text-amber-500">Register</a></b></p>
                    </form>

                </Form>
            </div>
        </div >
    );
}
