import { Aside, Header, Footer } from '.';

const Layout: React.FunctionComponent = ({ children }) => {
    return (
        <>
            <Aside />
            <div className="container">
                <Header />
                <main>{children}</main>
            </div>

            <Footer />
        </>
    );
};

export default Layout;
