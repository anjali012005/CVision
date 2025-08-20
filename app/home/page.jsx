import * as React from 'react'

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronUp, User2 } from 'lucide-react'
import Hero from '@/components/Hero/Hero'


const page = () => {
    return (
        <div>
            <div>
                <SidebarProvider>
                    <Sidebar>
                        <SidebarHeader />
                        <img src='./user-avatar.png' alt="user-profile" className='w-36 h-36 rounded-full bg-amber-500 m-auto' />
                        <p className="m-auto p-3 text-sm text-amber-500 italic">
                            "Consistency beats talent🚀"
                        </p>
                        <SidebarContent />
                        <SidebarFooter>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <SidebarMenuButton>
                                                <User2 /> Username
                                                <ChevronUp className="ml-auto" />
                                            </SidebarMenuButton>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            side="top"
                                            className="w-[--radix-popper-anchor-width]"
                                        >
                                            <DropdownMenuItem>
                                                <span>Account</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Billing</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Sign out</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </SidebarMenuItem>

                            </SidebarMenu>
                        </SidebarFooter>
                    </Sidebar>
                    <div className='w-full h-80 p-3'>
                        <img src="./HomeBanner.png" className='w-full h-80 p-3 rounded-4xl object-cover' />

                        <Hero />
                    </div>
                </SidebarProvider>
            </div >
        </div >

    )
}

export default page
