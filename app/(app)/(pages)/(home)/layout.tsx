import configPromise from '@/payload.config';
import { getPayload } from 'payload';

import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { SearchFilters } from "@/app/(components)/search-filters";

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
    });

    const formattedData = data.docs.map((doc) => ({
        ...doc,
        subcategories: {
            ...doc.subcategories,
            docs: doc.subcategories?.docs?.map((subcategory) => 
                typeof subcategory === 'number' ? subcategory : {
                    ...subcategory,
                }
            ) ?? []
        }
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