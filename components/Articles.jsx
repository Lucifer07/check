'use client'
import Link from "next/link"
export default function Articles (props) {
    
    return(
        
        <section className="bg-white w-full py-16 flex justify-between items-center">
            <div className="article-title flex-col items-center gap-5">
                <h1 className="text-5xl font-bold">{props.title}</h1>
                <p className="text-base font-light mt-5">Explore For More Experience With Our Awesome Article</p>
            </div>
            {props.more === "no" ? "" : (props.more === "all" ? <Link href="/articles">More</Link> :(props.more === "Sirloin" ? <Link href="/sirloin/articles">More</Link> : <Link href="/silo/articles">More</Link>))}  
        </section>
    )
}