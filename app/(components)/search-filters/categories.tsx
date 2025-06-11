"use client"

import { Category } from "@/payload-types";
import CategoryDropdown from "./category-dropdown";
import { CustomCategory } from "@/lib/types";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

interface CategoriesProps {
    data: CustomCategory[];
}

export const Categories = ({ data }: CategoriesProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const initialCategories = data.slice(0, 7);

    return (
        <div className="relative bg-white py-6 border-y border-gray-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {initialCategories.map((category: CustomCategory) => (
                    <div 
                        key={category.id} 
                        className="w-full"
                    >
                        <CategoryDropdown 
                            category={category}
                            isActive={false}
                            isNavigationHovered={false}
                        />
                    </div>
                ))}
                
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <div className="relative group cursor-pointer">
                            {/* Animated background gradient */}
                            <div 
                                className="absolute inset-0 bg-gradient-to-br from-brand via-emerald-500 to-brand opacity-90 group-hover:opacity-100 transition-all duration-500 animate-gradient-shift"
                                style={{
                                    clipPath: 'polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)'
                                }}
                            />
                            
                            {/* Inner content container */}
                            <div 
                                className="relative -inset-[1.5px] h-12 bg-white/95 group-hover:bg-white/90 transition-all duration-300 flex items-center justify-between px-6"
                                style={{
                                    clipPath: 'polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)'
                                }}
                            >
                                {/* Text and icon container */}
                                <div className="flex items-center gap-3 text-brand font-bold uppercase tracking-wide group-hover:scale-[1.02] transition-transform duration-300">
                                    <Sparkles className="w-4 h-4 animate-pulse" />
                                    <span>All Categories</span>
                                </div>
                                
                                <ChevronRight className="h-4 w-4 text-brand group-hover:translate-x-1 transition-transform duration-300" />
                                
                                {/* Corner accents */}
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand/30 group-hover:border-brand/50 transition-all duration-300" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand/30 group-hover:border-brand/50 transition-all duration-300" />
                                
                                {/* Animated dots */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] w-1.5 h-1.5 bg-brand/60 rounded-full animate-pulse" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] w-1.5 h-1.5 bg-brand/60 rounded-full animate-pulse delay-150" />
                            </div>
                        </div>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle className="text-xl font-bold text-brand mb-6">All Categories</SheetTitle>
                        </SheetHeader>
                        <div className="grid grid-cols-1 gap-4 mt-4 pb-20">
                            {data.map((category: CustomCategory) => (
                                <div 
                                    key={category.id} 
                                    className="w-full"
                                >
                                    <CategoryDropdown 
                                        category={category}
                                        isActive={false}
                                        isNavigationHovered={false}
                                    />
                                </div>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};