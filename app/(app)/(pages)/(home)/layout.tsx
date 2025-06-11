import configPromise from '@/payload.config';
import { getPayload } from 'payload';
import { Category } from '@/payload-types';

import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { SearchFilters } from "@/app/(components)/search-filters";
import { CustomCategory } from '@/lib/types';

interface LayoutProps {
    children: React.ReactNode;
}

async function Layout({ children }: LayoutProps) {
    const payload = await getPayload({ config: configPromise });
    
    const data = await payload.find({
      collection: 'categories',
      depth: 2,
      pagination: false,
      where: {
        parent: {
          exists: false,
        },
      },
      sort: 'name'
    });

    const formattedData: CustomCategory[] = data.docs.map((doc) => ({
        ...doc,
        subcategories: (doc.subcategories?.docs?.filter((subcategory): subcategory is Category => 
            typeof subcategory !== 'number'
        ) ?? []) as Category[]
    }));

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <SearchFilters formattedData={formattedData}/>
            <main className="flex-1">
                {children}
            </main>
            <div className="md:hidden h-16" /> {/* Spacer for mobile nav */}
            <Footer />
        </div>
    )
}

export default Layout;