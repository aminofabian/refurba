import { Category } from "@/payload-types";
import CategoryDropdown from "./category-dropdown";

interface CategoriesProps {
    data: Category[];
}

export const Categories = ({ data }: CategoriesProps) => {
    return (
        <div className="relative bg-white py-6 border-y border-gray-100">
            <div className="flex flex-wrap items-center gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {data.map((category: Category) => (
                    <div 
                        key={category.id} 
                        className="min-w-[180px] max-w-[240px] flex-1"
                    >
                        <CategoryDropdown 
                            category={category}
                            isActive={false}
                            isNavigationHovered={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};