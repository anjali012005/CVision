"use client";

import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "../ProtectedRoute";

export default function Login() {

    const { login } = useAuth();
    const router = useRouter();

    const [alert, setAlert] = useState({ type: "", message: "", show: false });
    setTimeout(() => setAlert({ ...alert, show: false }), 10000);

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data) => {
        console.log("Login Form Called :", data);
        try {
            const res = await axios.post("http://localhost:5000/auth/login", data, {
                headers: { "Content-Type": "application/json" }
            });

            login({ user: res.data.user, token: res.data.token });

            console.log("Response From backend while login :", res.data);
            setAlert({ type: "success", message: res.data.message, show: true });

            form.reset();

            setTimeout(() => {
                router.push("/home");
            }, 6000);


        } catch (error) {
            setAlert({ type: "error", message: error.response?.data?.message || error.message, show: true });
            console.log("Error From backend while login :", error?.response?.data);
        }
    }

    return (
        <ProtectedRoute>
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

                <div className="border-2 border-amber-500">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-150 p-5">
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

                            <button type="submit" className="px-4 py-2 bg-amber-500 text-white rounded cursor-pointer ">
                                Login
                            </button>

                            <p className="text-gray-400">Do not  have an account ?<b> <a href='/' className="text-amber-500">Register</a></b></p>
                        </form>

                    </Form>
                </div>
            </div >
        </ProtectedRoute>
    );
}
