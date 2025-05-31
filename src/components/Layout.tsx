import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className="">

                <main className="flex-1">{children}</main>

            </div>
            <Footer />
        </div>
    )
};

export default Layout;
