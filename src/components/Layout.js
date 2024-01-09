import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {

    // Returns the Header, Nav, and Footer with the Outlet nested within that contains the
    // routes.
    return (
        <>
            <Header />
            <Nav />
                <Outlet />
            <Footer />
        </>
    )
}

export default Layout