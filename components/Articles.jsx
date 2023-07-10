import Link from "next/link";

export default function Articles(props) {
  const renderMoreLink = () => {
    if (props.more === "no") {
      return null;
    } else {
      return <Link href="/gallerys">View More</Link>;
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
