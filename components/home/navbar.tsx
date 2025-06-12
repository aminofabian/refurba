'use client';

import Logo from './logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Home, Store, Search, User, Menu } from 'lucide-react';

interface NavItemProps {
    href: string;
    children: React.ReactNode;
    isActive: boolean;
}

const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/explore', label: 'Explore', icon: Search },
    { href: '/marketplace', label: 'Market', icon: Store },
    { href: '/profile', label: 'Profile', icon: User },
];

function MobileNavItem({ href, children, icon: Icon, isActive }: NavItemProps & { icon: any }) {
    return (
        <Link 
            href={href}
            className={`flex flex-col items-center justify-center p-2 ${
                isActive 
                    ? 'text-[#294a54]' 
                    : 'text-[#657b7c]'
            }`}
        >
            <Icon className="h-6 w-6" />
            <span className="text-xs mt-1">{children}</span>
        </Link>
    );
}

function DesktopNavItem({ href, children, isActive }: NavItemProps) {
    return (
        <Link 
            href={href}
            className={`
                relative px-5 py-2 font-medium transition-all duration-200
                text-sm uppercase tracking-wide group/nav-item
                ${isActive 
                    ? 'text-[#294a54]' 
                    : 'text-[#657b7c] hover:text-[#294a54]'
                }
            `}
        >
            {/* Border Layer */}
            <div 
                className={`absolute inset-0 ${isActive ? 'bg-[#294a54]/20' : 'bg-gray-200'}`}
                style={{
                    clipPath: 'polygon(90% 0, 100% 35%, 100% 100%, 10% 100%, 0 65%, 0 0)'
                }}
            />
            
            {/* Content Layer */}
            <div 
                className={`
                    absolute inset-[1.5px] transition-all duration-200
                    ${isActive 
                        ? 'bg-white' 
                        : 'bg-white group-hover/nav-item:bg-gray-50'
                    }
                `}
                style={{
                    clipPath: 'polygon(90% 0, 100% 35%, 100% 100%, 10% 100%, 0 65%, 0 0)'
                }}
            />

            {/* Text Content */}
            <span className="relative z-10">{children}</span>
        </Link>
    );
}

function Navbar() {
    const pathname = usePathname();
    
    return (
        <>
            {/* Desktop Navbar */}
            <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 shadow-sm hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Logo 
                                size="md" 
                                color="brand" 
                                className="cursor-pointer hover:opacity-70 transition-opacity"
                            />
                        </div>

                        <div className="flex items-center space-x-3">
                            {navItems.map((item) => (
                                <DesktopNavItem
                                    key={item.href}
                                    href={item.href}
                                    isActive={pathname === item.href}
                                >
                                    {item.label}
                                </DesktopNavItem>
                            ))}
                            <div className="flex items-center gap-3 ml-6">
                                {/* Login Button */}
                                <div className="relative group/login">
                                    {/* Border Layer */}
                                    <div 
                                        className="absolute inset-0 bg-gray-200"
                                        style={{
                                            clipPath: 'polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)'
                                        }}
                                    />
                                    <div 
                                        className="
                                            relative px-6 py-2 h-10 text-sm font-bold uppercase tracking-wide
                                            transition-all duration-200 ease-in-out
                                            bg-white overflow-visible cursor-pointer
                                            hover:text-[#294a54] hover:bg-[#294a54]/5
                                            hover:shadow-[0_0_15px_rgba(41,74,84,0.3)]
                                            -inset-[1.5px] flex items-center justify-center
                                            text-[#657b7c]
                                        "
                                        style={{
                                            clipPath: 'polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)'
                                        }}
                                    >
                                        Log In
                                    </div>
                                </div>

                                {/* Sell Button */}
                                <div className="relative group/sell">
                                    {/* Border Layer */}
                                    <div 
                                        className="absolute inset-0 bg-[#294a54]"
                                        style={{
                                            clipPath: 'polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)'
                                        }}
                                    />
                                    <div 
                                        className="
                                            relative px-6 py-2 h-10 text-sm font-bold uppercase tracking-wide border-2 border-[#294a54] bg-slate-100
                                            transition-all duration-200 ease-in-out
                                            bg-[#294a54] overflow-visible cursor-pointer text-[#657b7c]
                                            group-hover/sell:bg-white group-hover/sell:text-[#294a54]
                                            hover:shadow-[0_0_15px_rgba(41,74,84,0.3)]
                                            -inset-[1.5px] flex items-center justify-center
                                        "
                                        style={{
                                            clipPath: 'polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)'
                                        }}
                                    >
                                        Sell Your Digital Products
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
                <div className="grid grid-cols-4 h-16">
                    {navItems.map((item) => (
                        <MobileNavItem
                            key={item.href}
                            href={item.href}
                            icon={item.icon}
                            isActive={pathname === item.href}
                        >
                            {item.label}
                        </MobileNavItem>
                    ))}
                </div>
            </nav>

            {/* Mobile Action Button */}
            <div className="md:hidden fixed bottom-20 right-4 z-50">
                <Button 
                    className="rounded-full w-14 h-14 bg-[#294a54] text-white shadow-lg flex items-center justify-center"
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
        </>
    );
}

export default Navbar;