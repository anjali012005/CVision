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

const page = () => {
    return (
        <div>
            {/* <Carousel>
                <CarouselContent>
                    <CarouselItem><img className='w-full h-full pl-15' src="./HomeBanner.png" /></CarouselItem>
                    <CarouselItem><img src="./HomeBanner.png" /></CarouselItem>
                    <CarouselItem><img src="./HomeBanner.png" /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel> */}

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
                </SidebarProvider>
            </div>
        </div>

    )
}

export default page
