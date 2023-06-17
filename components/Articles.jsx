import Link from "next/link";

export default function Articles(props) {
  const renderMoreLink = () => {
    if (props.more === "no") {
      return null;
    } else if (props.more === "gallerys") {
      return <Link href="/gallerys">View More</Link>;
    } else if (props.more === "all") {
      return <Link href="/articles">More</Link>;
    } else if (props.more === "Sirloin") {
      return <Link href="/sirloin/articles">More</Link>;
    } else if (props.more === "Silo") {
      return <Link href="/silo/articles">More</Link>;
    }
  };

  return (
    <section className="bg-white w-full py-10 flex flex-col items-start sm:flex-row justify-between sm:items-center">
      <div className="article-title flex-col items-center gap-5">
        <h1 className="text-5xl font-bold uppercase">{props.title}</h1>
        <p className="text-base font-light mt-5">
          Explore For More Experience With Our Awesome {props.title}
        </p>
      </div>
      {renderMoreLink()}
    </section>
  );
}
