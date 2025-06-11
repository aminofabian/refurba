import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchInputProps {
    disabled?: boolean;
}

export function SearchInput({ disabled = false }: SearchInputProps) {
    return (
        <div className="relative w-full max-w-4xl mx-auto group/search">
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand/0 via-brand/5 to-brand/0 
                blur-3xl opacity-0 group-hover/search:opacity-100 transition-opacity duration-500
                pointer-events-none" />
            
            {/* Left Accent Line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r 
                from-brand/50 to-transparent opacity-0 -translate-x-8
                group-hover/search:opacity-100 group-hover/search:translate-x-0
                transition-all duration-500 pointer-events-none" />
            
            {/* Right Accent Line */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-l 
                from-brand/50 to-transparent opacity-0 translate-x-8
                group-hover/search:opacity-100 group-hover/search:translate-x-0
                transition-all duration-500 pointer-events-none" />

            {/* Main Container with Border */}
            <div className="relative">
                {/* Border Layer */}
                <div 
                    className="absolute inset-0 bg-gray-200"
                    style={{
                        clipPath: 'polygon(97% 0, 100% 25%, 100% 100%, 3% 100%, 0 75%, 0 0)'
                    }}
                />
                
                {/* Content Layer */}
                <div 
                    className="relative bg-white/80 backdrop-blur-sm -inset-[2px]"
                    style={{
                        clipPath: 'polygon(97% 0, 100% 25%, 100% 100%, 3% 100%, 0 75%, 0 0)'
                    }}
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e964c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}
                    />

                    {/* Search Icon with Animation */}
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10
                        group-hover/search:scale-110 transition-transform duration-300 pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400 
                            transition-all duration-300 
                            group-hover/search:text-brand
                            group-hover/search:drop-shadow-[0_0_8px_rgba(30,150,76,0.5)]" />
                    </div>

                    {/* Input Field */}
                    <Input 
                        type="text" 
                        placeholder="Search anything..." 
                        disabled={disabled}
                        className="w-full pl-14 pr-6 py-6 h-14 text-base
                            bg-transparent
                            border-0
                            transition-all duration-300
                            placeholder:text-gray-400
                            hover:border-brand/40
                            focus:border-0 focus:bg-white/95
                            focus:shadow-[0_0_20px_rgba(30,150,76,0.15)]
                            focus:placeholder:text-brand/40
                            disabled:opacity-50 disabled:cursor-not-allowed
                            selection:bg-brand/20
                            relative z-20"
                    />

                    {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand/20
                        group-hover/search:border-brand/40 transition-colors duration-300 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand/20
                        group-hover/search:border-brand/40 transition-colors duration-300 pointer-events-none" />
                </div>
            </div>

            {/* Focus Ring */}
            <div className="absolute -inset-px opacity-0 
                group-focus-within/search:opacity-100
                transition-opacity duration-300 pointer-events-none"
                style={{
                    background: 'linear-gradient(120deg, rgba(30,150,76,0.1) 0%, rgba(30,150,76,0.05) 100%)',
                    clipPath: 'polygon(97.5% 0, 100% 25%, 100% 100%, 2.5% 100%, 0 75%, 0 0)'
                }}
            />
        </div>
    );
}

