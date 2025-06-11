"use client"
import { Button } from "@/components/ui/button";
import { Category } from "@/payload-types";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    category: Category,
    isActive?: boolean,
    isNavigationHovered?: boolean,
}

function CategoryDropdown({ category, isActive: propIsActive, isNavigationHovered }: Props) {
    const hasSubcategories = category.subcategories?.docs && category.subcategories.docs.length > 0;
    const subcategories = category.subcategories?.docs ?? [];
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Create URL-friendly slug
    const categorySlug = category.slug.toLowerCase();
    const categoryUrl = `/${categorySlug}`;
    const isActive = propIsActive || pathname === categoryUrl || pathname.startsWith(`${categoryUrl}/`);

    return (
        <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="outline"
                    asChild
                    className={`
                        relative w-full justify-between group
                        px-6 py-3 h-12 text-sm font-bold uppercase tracking-wide
                        transition-all duration-200 ease-in-out
                        border border-gray-200 bg-gray-200 overflow-visible hover:bg-green-100
                        ${isActive 
                            ? 'bg-white text-brand border-brand shadow-[0_0_15px_rgba(30,150,76,0.3)]' 
                            : 'hover:border-brand hover:text-brand hover:bg-[#1e964c]/30 hover:text-white hover:shadow-[0_0_15px_rgba(30,150,76,0.3)]'
                        }
                        ${isNavigationHovered ? 'shadow-md' : ''}
                        transform active:scale-[0.98] hover:-translate-y-[1px]
                        ${isOpen ? 'ring-1 ring-brand/30 ring-offset-2' : ''}
                        hover:shadow-lg hover:shadow-brand/5
                    `}
                    style={{
                        clipPath: 'polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)'
                    }}
                >
                    <Link href={categoryUrl} className="flex items-center justify-between w-full">
                        <span className="truncate relative z-10">{category.name}</span>
                        {hasSubcategories && (
                            <ChevronDown className={`
                                ml-2 h-4 w-4 shrink-0 opacity-70
                                transition-all duration-200
                                group-hover:opacity-100 relative z-10
                                ${isOpen ? 'transform rotate-180' : ''}
                                ${isActive ? 'text-brand' : 'text-gray-400 group-hover:text-brand'}
                            `} />
                        )}
                    </Link>
                </Button>
            </DropdownMenuTrigger>

            {hasSubcategories && (
                <DropdownMenuContent 
                    className="w-[var(--radix-dropdown-menu-trigger-width)] p-2 bg-white border border-gray-200 shadow-lg animate-in fade-in-0 zoom-in-95" 
                    align="start"
                    sideOffset={8}
                >
                    <div className="space-y-1.5">
                        {subcategories.map((subcategory) => {
                            if (typeof subcategory === 'number') {
                                return (
                                    <div key={subcategory} className="px-4 py-2.5 text-sm text-gray-400">
                                        Loading...
                                    </div>
                                );
                            }

                            const subcategorySlug = subcategory.slug.toLowerCase();
                            const subcategoryUrl = `${categoryUrl}/${subcategorySlug}`;
                            const isSubcategoryActive = pathname === subcategoryUrl;

                            return (
                                <div 
                                    key={subcategory.id}
                                    className="relative"
                                    style={{
                                        clipPath: 'polygon(8% 0, 100% 0, 92% 75%, 92% 100%, 0 100%, 0 25%)'
                                    }}
                                >
                                    <Link href={subcategoryUrl} className="block">
                                        <DropdownMenuItem 
                                            className={`
                                                w-full flex items-center px-4 py-2.5 text-sm
                                                transition-all duration-150 ease-in-out
                                                cursor-pointer select-none uppercase tracking-wide
                                                text-gray-600 bg-gray-50/50
                                                hover:text-brand hover:bg-brand/5
                                                focus:text-brand focus:bg-brand/5
                                                active:bg-brand/10
                                                ${isSubcategoryActive ? 'bg-brand/5 text-brand' : ''}
                                                ${isActive ? 'data-[highlighted]:bg-brand/5' : 'data-[highlighted]:bg-gray-100'}
                                                transform active:scale-[0.98]
                                                hover:-translate-x-[2px]
                                                hover:shadow-sm
                                            `}
                                        >
                                            {subcategory.name}
                                        </DropdownMenuItem>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    );
}

export default CategoryDropdown;