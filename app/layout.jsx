import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css'
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Toaster } from "react-hot-toast";
import { GlobalProvider } from '@/context/GlobalContext';

export const metadata = {
    title: "real state",
    keywords: "real, house",
    description: "real state in ethiopia for the dispoara"

}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <GlobalProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
            <Toaster />
          </GlobalProvider>
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;