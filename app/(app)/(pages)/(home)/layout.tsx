import { getQueryClient, trpc } from "@/trpc/server";

import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { SearchFilters } from "@/app/(components)/search-filters";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { Suspense } from "react";

interface LayoutProps {
    children: React.ReactNode;
}

async function Layout({ children }: LayoutProps) {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions());



    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense fallback={<div>Loading...</div>}>
                <SearchFilters />
                </Suspense>
            </HydrationBoundary>


            <main className="flex-1">
                {children}
            </main>
            <div className="md:hidden h-16" /> {/* Spacer for mobile nav */}
            <Footer />
        </div>
    )
}

export default Layout;