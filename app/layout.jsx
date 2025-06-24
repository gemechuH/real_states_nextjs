import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css'
import Footer from '@/components/Footer';

export const metadata = {
    title: "real state",
    keywords: "real, house",
    description: "real state in ethiopia for the dispoara"

}

const Layout = ({ children }) => {
    return (
        <html>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer/>
            </body>
        </html>
    );
};

export default Layout;