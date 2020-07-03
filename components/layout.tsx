import Footer from '../components/footer';
import Header from '../components/header';
import ProgressBar from "react-scroll-progress-bar";

export default function Layout({children}) {
    return (
        <>
            <ProgressBar bgcolor="#edf2f7"/>
            <div className="min-h-screen">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}