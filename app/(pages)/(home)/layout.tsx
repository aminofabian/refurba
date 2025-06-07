import Navbar from "@/components/home/navbar";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;