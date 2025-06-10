'use client';
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <div className="md:hidden h-16" /> {/* Spacer for mobile nav */}
            <Footer />
        </div>
    )
}

export default Layout;