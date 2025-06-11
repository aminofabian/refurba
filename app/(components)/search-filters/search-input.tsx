import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchInputProps {
    disabled?: boolean;
}

export function SearchInput({ disabled = false }: SearchInputProps) {
    return (
        <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
                type="text" 
                placeholder="Search anything..." 
                disabled={disabled}
                className="w-full pl-10 py-6 text-base bg-background border-2 rounded-xl
                    focus-visible:ring-2 focus-visible:ring-offset-2 
                    focus-visible:ring-offset-background focus-visible:ring-primary
                    transition-all duration-300
                    hover:border-primary/50
                    disabled:opacity-50 disabled:cursor-not-allowed"
            />
        </div>
    );
}

