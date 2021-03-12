import Header from "./Header"
import Footer from "./Footer"
export default function Layout({children, LayoutProps}) {
    return (
        <>
        <Header menu = {LayoutProps} />
        <main className="container">
            {children}
        </main>
        <Footer />
        </>
    )
}