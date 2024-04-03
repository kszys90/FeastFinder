import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header.tsx';
import Footer from '../components/common/Footer.tsx';

export default function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}