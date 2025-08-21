"use client";

import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function Register() {
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
                        <h2><b>Register to Begin Your Interview Journey</b></h2>

                        {/* Name field */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input type="string" placeholder="Enter Your Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

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

                        <button type="submit" className="px-4 py-2 bg-amber-500 text-white rounded flex justify-center m-auto">
                            Register
                        </button>
                    </form>

                </Form>
            </div>
        </div >
    );
}
