import { SearchInput } from "./search-input";
import { Categories } from "./categories";

interface SearchFiltersProps {
    formattedData: any;
}

export const SearchFilters = ({ formattedData }: SearchFiltersProps) => {
    return (
        <div className="container px-4 lg:px-12 py-8 flex flex-col gap-4 border-b border-gray-200 mx-auto">
            <SearchInput />
            <Categories data={formattedData} />
        </div>
    )
}