import Footer from '../components/footer';
import Header from '../components/header';
import ProgressBar from "react-scroll-progress-bar";

export default function Layout({children}) {
    return (
        <>
            <ProgressBar bgcolor="#f4ea66" height="2px"/>
            <div className="min-h-screen">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}