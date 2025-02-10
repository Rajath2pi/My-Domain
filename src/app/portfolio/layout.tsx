import Footer from "../widget/footer"
import NavBar from "../widget/navbar"

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
    )
}
