import { DOC_TITLE } from '../lib/constants';
import Link from 'next/link';

const Header = () => {
    return (
        <div id="header">
            <div className="flex bg-white fixed top-0 inset-x-0 z-50 h-24 items-center">
                <div className="container lg:w-10/12 xl:w-4/5 mx-auto px-5 relative mx-auto px-5">
                    <Link href="/">
                        <a className="logo text-xl md:text-2xl font-normal leading-tight">{DOC_TITLE}</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header