import Articles from "@/components/Articles"
import Card from "@/components/Card"
import Nav from "@/components/Nav"

export const metadata = {
    title: 'Articles Page'
}
export default async function Articlespage() {
    return(
        <>
            <div className="nav-bg flex relative top-0 left-0 h-[100px] w-full items-center bg-no-repeat justify-center bg-center bg-cover"></div>
            <Nav id="Articles" />
            <main className="w-[90%] mx-auto">
                <Articles title="ALL ARTICLES" more="no"/>
                <Card link={"article"} />
            </main>
        </>
    )
}