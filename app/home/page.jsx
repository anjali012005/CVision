import * as React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

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
