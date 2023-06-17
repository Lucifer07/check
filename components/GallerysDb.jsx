import Link from "next/link";
import ImageComp from "./ImageComp";

export default function GallerysDb(props) {
  return (
    <section className="bg-white w-full p-20">
      <div className="wrapper flex justify-between items-center">
        <div className="article-title flex items-center gap-5">
          <h1 className="text-[70px] font-bold">Gallerys</h1>
          <p className="text-[20px] font-light mt-5">
            Explore For More Experience With Our Awesome Gallery
          </p>
        </div>
        <Link href="/gallerys">View More</Link>
      </div>

      {props.data?.data ? (
        <ImageComp datas={props.data.data} />
      ) : (
        <div>Failed to load data</div>
      )}
    </section>
  );
}
