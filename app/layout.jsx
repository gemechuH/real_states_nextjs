import '@/assets/styles/globals.css'

export const metadata = {
    title: "real state",
    keywords: "real, house",
    description: "real state in ethiopia for the dispoara"

}

const Layout = ({ children }) => {
    return (
        <html>
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default Layout;