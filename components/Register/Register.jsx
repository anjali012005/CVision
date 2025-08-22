"use client";

import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {

    const router = useRouter();

    const [alert, setAlert] = useState({ type: "", message: "", show: false });
    setTimeout(() => setAlert({ ...alert, show: false }), 10000);


    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    // this will run when form is submitted
    const onSubmit = async (data) => {
        console.log("Form submitted:", data);

        try {
            const res = await axios.post("http://localhost:5000/auth/register", data, {
                headers: { "Content-Type": "application/json" }
            });

            setAlert({ type: "success", message: res.data.message, show: true });

            form.reset();

            setTimeout(() => {
                router.push("/home");
            }, 1000);

            console.log("Response from backend for register user:", res.data);

        } catch (error) {
            setAlert({ type: "error", message: error.response?.data?.message || error.message, show: true });
            console.error("Error sending data to backend:", error.response?.data || error.message);
        }
    };

    return (
        <div className="m-10 flex justify-center items-center ">
            {/* Alert */}
            {alert.show && (
                <div className="fixed top-5 right-5 z-60">
                    <Alert
                        className={`mb-4 w-80 ${alert.type === "success"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                            }`}
                    >
                        <CheckCircle2Icon className="inline mr-2" />
                        <AlertTitle>
                            {alert.type === "success" ? "Success!" : "Error!"}
                        </AlertTitle>
                        <AlertDescription>{alert.message}</AlertDescription>
                    </Alert>
                </div>
            )}

            <div className="border-2 border-amber-500 rounded p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-96">
                        <h2 className="text-xl font-bold">Register to Begin Your Interview Journey</h2>

                        {/* Name field */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Enter Your Name" {...field} />
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

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="px-4 py-2 bg-amber-500 text-white rounded w-full cursor-pointer"
                        >
                            Register
                        </button>

                        {/* Already have account */}
                        <p className="text-gray-400 text-sm">
                            Already have an account?{" "}
                            <b>
                                <a href="/login" className="text-amber-500">
                                    Login
                                </a>
                            </b>
                        </p>
                    </form>
                </Form>
            </div>

        </div>
    );
}
