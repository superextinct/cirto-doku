import Footer from '../components/footer';
import Header from '../components/header';
import ProgressBar from "react-scroll-progress-bar";

export default function Layout({breadcrumb, children}) {
    return (
        <>
            <ProgressBar bgcolor="#333" height="1px"/>
            <div className="min-h-screen">
                <Header breadcrumb={breadcrumb} />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}