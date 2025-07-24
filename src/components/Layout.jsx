import {Outlet} from 'react-router'
import Header from "./Header";
import Footer from './Footer';

export default function Layout(){
    return (
        <div className="h-screen bg-gradient-to-br from-[#0a0e27] via-[#1e3a5f] to-[#0a0e27] text-white p-2">
            <div className="h-full grid grid-rows-[auto_1fr_auto] border border-[#455a64]">
                <Header />
                <main className="overflow-y-auto p-6">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}