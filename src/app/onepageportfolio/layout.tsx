import Footer from "../widget/portfolio/footer"
import NavBar from "../widget/portfolio/navbar"

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
