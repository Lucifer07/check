import Link from "next/link";

export default function Articles(props) {
  const renderMoreLink = () => {
    if (props.more === "no") {
      return <Link href="/ESTABLISHMENTS" className="text-white">View More</Link>;
    } else {
      return <Link href="/gallerys" className="text-white">View More</Link>;
    }
  };

  return (
    <section className="bg-black w-full py-10 flex flex-col items-start sm:flex-row justify-between sm:items-center text-white">
      <div className="article-title flex-col items-center gap-5">
        <h1 className="text-5xl font-bold uppercase">{props.title}</h1>
        <p className="text-base font-light mt-5 uppercase">
        We optimizing quality with a blend of tradition cooking. Focus on providing  an unforgettable enjoyment of signature taste.
        </p>
      </div>
      {renderMoreLink()}
    </section>
  );
}
