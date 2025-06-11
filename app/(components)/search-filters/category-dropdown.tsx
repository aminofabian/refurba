"use client"
import { Button } from "@/components/ui/button";
import { Category } from "@/payload-types";
import { CustomCategory } from "@/lib/types";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Props {
    category: CustomCategory,
    isActive?: boolean,
    isNavigationHovered?: boolean,
}

function CategoryDropdown({ category, isActive: propIsActive, isNavigationHovered }: Props) {
    const hasSubcategories = category.subcategories && category.subcategories.length > 0;
    const subcategories = category.subcategories ?? [];
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Create URL-friendly slug
    const categorySlug = category.slug.toLowerCase();
    const categoryUrl = categorySlug === 'all' ? '/' : `/${categorySlug}`;
    const isActive = propIsActive || pathname === categoryUrl || pathname.startsWith(`${categoryUrl}/`);

    const handleMainClick = (e: React.MouseEvent) => {
        if (hasSubcategories && categorySlug !== 'all') {
            // If has subcategories and not "All", let the dropdown handle the click
            return;
        }
        // If no subcategories or is "All", prevent dropdown and navigate
        e.preventDefault();
        e.stopPropagation();
        router.push(categoryUrl);
    };

    return (
        <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <div className="relative group/category" onClick={handleMainClick}>
                    {/* Border Layer */}
                    <div 
                        className={`
                            absolute inset-0 transition-all duration-300
                            ${isActive 
                                ? 'bg-gradient-to-br from-brand via-brand/90 to-emerald-500/80 shadow-[0_0_25px_rgba(30,150,76,0.45)] hover:shadow-[0_0_30px_rgba(30,150,76,0.5)]' 
                                : 'bg-gray-200 group-hover/category:bg-brand/20'
                            }
                        `}
                        style={{
                            clipPath: 'polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)'
                        }}
                    />

                    {/* Content Layer */}
                    <div 
                        className={`
                            relative -inset-[1.5px] flex items-center justify-between
                            px-6 py-3 h-12 text-sm font-bold uppercase tracking-wide
                            transition-all duration-300 ease-in-out overflow-visible
                            ${isActive 
                                ? 'bg-white text-brand after:absolute after:inset-x-4 after:-bottom-0.5 after:h-[3px] after:bg-brand/30 after:rounded-full' 
                                : 'bg-white text-gray-700 group-hover/category:text-brand hover:cursor-pointer'
                            }
                            ${isOpen ? 'shadow-[0_0_15px_rgba(30,150,76,0.2)]' : ''}
                            transform group-hover/category:-translate-y-[2px]
                            group-active/category:translate-y-0
                            before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300
                            ${isActive ? 'before:opacity-100 scale-[1.02]' : 'group-hover/category:before:opacity-50'}
                            before:bg-[radial-gradient(circle_at_30%_107%,rgba(30,150,76,0.08)_0%,rgba(30,150,76,0.04)_5%,rgba(30,150,76,0.02)_45%,rgba(30,150,76,0.04)_60%,rgba(30,150,76,0.08)_90%)]
                        `}
                        style={{
                            clipPath: 'polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)'
                        }}
                    >
                        {/* Link wrapper for main category */}
                        <Link href={categoryUrl} className="absolute inset-0 z-10" onClick={handleMainClick} />

                        {/* Background Pattern */}
                        <div 
                            className={`
                                absolute inset-0 opacity-[0.03] pointer-events-none select-none
                                transition-all duration-300
                                ${isActive ? 'opacity-[0.12] scale-75 rotate-45 animate-pulse' : 'group-hover/category:opacity-[0.05]'}
                            `}
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e964c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                            }}
                        />

                        {/* Text and Icon */}
                        <span className={`
                            truncate relative z-10 flex items-center gap-2
                            ${isActive ? 'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:bg-current after:opacity-30 after:rounded-full' : ''}
                        `}>
                            {isActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-ping absolute -left-3" />
                            )}
                            {category.name}
                            {isActive && (
                                <span className="absolute -right-3 top-1/2 -translate-y-1/2 flex gap-0.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand/60 animate-pulse" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand/40 animate-pulse delay-75" />
                                </span>
                            )}
                        </span>
                        {hasSubcategories && (
                            <div className={`
                                relative z-10 flex items-center gap-1
                                transition-transform duration-300
                                ${isOpen ? 'rotate-180' : 'group-hover/category:translate-y-[1px]'}
                            `}>
                                <div className={`
                                    w-1.5 h-1.5 rounded-full
                                    transition-all duration-300
                                    ${isActive 
                                        ? 'bg-brand animate-pulse scale-110' 
                                        : 'bg-gray-400 group-hover/category:bg-brand'
                                    }
                                `} />
                                <ChevronDown className={`
                                    h-4 w-4 shrink-0
                                    transition-all duration-300
                                    ${isActive 
                                        ? 'text-brand scale-110' 
                                        : 'text-gray-400 group-hover/category:text-brand'
                                    }
                                `} />
                            </div>
                        )}

                        {/* Corner Accents */}
                        <div className={`
                            absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2
                            transition-all duration-300
                            ${isActive 
                                ? 'border-brand/50 w-5 h-5 border-t-[3px] border-r-[3px]' 
                                : 'border-gray-300/50 group-hover/category:border-brand/20'
                            }
                        `} />
                        <div className={`
                            absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2
                            transition-all duration-300
                            ${isActive 
                                ? 'border-brand/50 w-5 h-5 border-b-[3px] border-l-[3px]' 
                                : 'border-gray-300/50 group-hover/category:border-brand/20'
                            }
                        `} />
                        
                        {/* Active Indicator Dots */}
                        {isActive && (
                            <>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] w-1.5 h-1.5 bg-brand/60 rounded-full animate-pulse" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] w-1.5 h-1.5 bg-brand/60 rounded-full animate-pulse" />
                            </>
                        )}
                    </div>
                </div>
            </DropdownMenuTrigger>

            {hasSubcategories && categorySlug !== 'all' && (
                <DropdownMenuContent 
                    className={`
                        w-[var(--radix-dropdown-menu-trigger-width)] p-2 bg-white 
                        border border-gray-200 shadow-lg animate-in fade-in-0 zoom-in-95
                        ${isActive ? 'border-brand/30 shadow-[0_4px_25px_-5px_rgba(30,150,76,0.25)]' : ''}
                    `}
                    align="start"
                    sideOffset={8}
                >
                    <div className="space-y-1.5">
                        {subcategories.map((subcategory) => {
                            const subcategorySlug = subcategory.slug.toLowerCase();
                            const subcategoryUrl = `${categoryUrl}/${subcategorySlug}`;
                            const isSubcategoryActive = pathname === subcategoryUrl;

                            return (
                                <div 
                                    key={subcategory.id}
                                    className="relative group/subcategory"
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