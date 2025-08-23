'use client'

import React from 'react'
import { Button } from "@/components/ui/button"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '../ProtectedRoute';
import { useRouter } from 'next/navigation';


const Hero = () => {
    const { user, logout } = useAuth();

    const router = useRouter();

    const handleClick = () => {
        router.push("/home/upload"); 
    };
    return (
        <ProtectedRoute>
            <div>
                <div className='flex justify-center'>
                    <Button
                        onClick={handleClick}
                        variant="outline"
                        className="hover:bg-[#c29e19]  text-[#c29e19] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                    >Get Started</Button>
                </div>

                <h3 className='p-4'>Every Interview, A Step Forward 📈 {user?.name} </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-6'>
                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Summary of the interview</CardTitle>
                            <CardDescription>
                                Insights that Drive Success
                            </CardDescription>
                            <CardAction>
                                <Button variant="link">Date and Time</Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full">
                                Discover Your Insights
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Summary of the interview</CardTitle>
                            <CardDescription>
                                Insights that Drive Success
                            </CardDescription>
                            <CardAction>
                                <Button variant="link">Date and Time</Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full">
                                Discover Your Insights
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Summary of the interview</CardTitle>
                            <CardDescription>
                                Insights that Drive Success
                            </CardDescription>
                            <CardAction>
                                <Button variant="link">Date and Time</Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full">
                                Discover Your Insights
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Summary of the interview</CardTitle>
                            <CardDescription>
                                Insights that Drive Success
                            </CardDescription>
                            <CardAction>
                                <Button variant="link">Date and Time</Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full">
                                Discover Your Insights
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Summary of the interview</CardTitle>
                            <CardDescription>
                                Insights that Drive Success
                            </CardDescription>
                            <CardAction>
                                <Button variant="link">Date and Time</Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full">
                                Discover Your Insights
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Summary of the interview</CardTitle>
                            <CardDescription>
                                Insights that Drive Success
                            </CardDescription>
                            <CardAction>
                                <Button variant="link">Date and Time</Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full">
                                Discover Your Insights
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Summary of the interview</CardTitle>
                            <CardDescription>
                                Insights that Drive Success
                            </CardDescription>
                            <CardAction>
                                <Button variant="link">Date and Time</Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full">
                                Discover Your Insights
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Summary of the interview</CardTitle>
                            <CardDescription>
                                Insights that Drive Success
                            </CardDescription>
                            <CardAction>
                                <Button variant="link">Date and Time</Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full">
                                Discover Your Insights
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Summary of the interview</CardTitle>
                            <CardDescription>
                                Insights that Drive Success
                            </CardDescription>
                            <CardAction>
                                <Button variant="link">Date and Time</Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full">
                                Discover Your Insights
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Summary of the interview</CardTitle>
                            <CardDescription>
                                Insights that Drive Success
                            </CardDescription>
                            <CardAction>
                                <Button variant="link">Date and Time</Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full">
                                Discover Your Insights
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </ProtectedRoute>
    )
}

export default Hero
