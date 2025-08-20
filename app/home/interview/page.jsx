import React from 'react'

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Interview = () => {
    return (
        <div className="border-2 border-amber-500 flex flex-col justify-center items-center min-h-screen">

            {/* ⬇️ Wrapper for both cards */}
            <div className="flex justify-center items-center w-full gap-10">
                <div>
                    <Card className="w-600 h-auto max-w-sm border-amber-400 p-10">
                        <CardHeader>
                            <CardTitle>User Name</CardTitle>
                            <CardDescription>
                                Insights that Drive Success
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img src="/user-avatar.png" alt="AI Avatar" className="bg-amber-400" />
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card className="w-600 max-w-sm border-amber-400 p-10">
                        <CardHeader>
                            <CardTitle>Your Personal AI</CardTitle>
                            <CardDescription>
                                Insights that Drive Success
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img src="/user-avatar.png" alt="AI Avatar" className="bg-amber-400" />
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* ⬇️ textarea placed right below cards */}
            <div className="w-full flex justify-center mt-6">
                <textarea
                    className="bg-amber-500 w-1/2 p-2 rounded-md"
                    placeholder="ANJALI">
                </textarea>
            </div>
        </div>
    )
}

export default Interview
