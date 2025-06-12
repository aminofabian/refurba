'use client';

import { SearchInput } from "./search-input";
import { Categories } from "./categories";
import { CustomCategory } from "@/lib/types";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

interface SearchFiltersProps {
    formattedData: CustomCategory[];
}

export const SearchFilters = () => {
    const trpc = useTRPC();
    const {data} = useSuspenseQuery(trpc.categories.getMany.queryOptions());


    return (
        <div className="container px-4 lg:px-12 py-8 flex flex-col gap-4 border-b border-gray-200 mx-auto">
            <SearchInput />
            <Categories data={data} />
        </div>
    )
}