import Link from "next/link";

export default function Articles(props) {
  return (
    <section className="bg-black w-full py-10 flex flex-col items-start sm:flex-row justify-between sm:items-center text-white">
      <div className="article-title flex-col items-center gap-5">
        <h1 className="text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold uppercase">
          {props.title}
        </h1>
        <p className="text-base  mb-0 font-light mt-5 uppercase">
          We optimize quality with a blend of traditional cooking.
        </p>
        <p className="text-base  font-light uppercase">
          Focus on providing an unforgettable enjoyment of signature taste.
        </p>
      </div>
      <div className="mt-5">
        {props.more === "no" ? (
          <Link href="/ESTABLISHMENTS">
            <p className="text-white xl:text-base lg:text-base sm:text-sm md:text-sm">
              View More
            </p>
          </Link>
        ) : (
          <Link href="/gallerys">
            <p className="text-white text-base sm:text-sm md:text-sm">
              View More
            </p>
          </Link>
        )}
      </div>
    </section>
  );
}
