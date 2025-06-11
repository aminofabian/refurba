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
                    ? 'text-brand' 
                    : 'text-gray-500'
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
            className={`px-3 py-2 rounded-md transition-all duration-200 font-medium relative group ${
                isActive 
                    ? 'text-brand font-semibold' 
                    : 'text-slate-600 hover:text-brand'
            }`}
        >
            {children}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand transform origin-left transition-transform duration-200 ${
                isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`} />
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

                        <div className="flex items-center space-x-1">
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
                                <Button 
                                    variant="ghost" 
                                    className="text-slate-700 hover:text-brand hover:bg-brand/10"
                                >
                                    Log In
                                </Button>
                                <Button 
                                    className="text-white hover:bg-gray-50 hover:text-[#1e964c] border-2 border-brand shadow-sm font-medium"
                                >
                                    Sell Your Digital Products
                                </Button>
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
                    className="rounded-full w-14 h-14 bg-brand text-white shadow-lg flex items-center justify-center"
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
        </>
    );
}

export default Navbar;