import '../styles/globals.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} />
            <Footer />
        </>
    );
}
