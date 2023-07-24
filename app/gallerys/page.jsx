'use client'
import { useState, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import Nav from "@/components/Nav";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [totalImage, setTotalImage] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const fetchGalleryData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://rest.1010-group.com/galery`
      ).then((response)=>{
        setGalleryData(response.data.data);
        console.log(galleryData);
        setTotalImage(response.data.data.length)
      })
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  }, []);
  useEffect(() => {
    fetchGalleryData()
  }, [])
  const handlePrevClickS1 = useCallback(() => {
    const dataNull=[...galleryData]
    const DataMain=dataNull[0]
    dataNull.splice(0,1)
    dataNull.push(DataMain)
    setGalleryData(dataNull)
  }, [galleryData]);

  const handleNextClickS1 = useCallback(() => {
    const dataNull=[...galleryData]
    let DataMain=dataNull[totalImage-1]
    dataNull.splice(totalImage-1,1)
    dataNull.unshift(DataMain)
    setGalleryData(dataNull)
  }, [galleryData]);

  const handleImageClick = useCallback((index) => {
    setCurrentImage(index);
  }, []);
  return (
    <div>
      <Nav />
    {/* Section 1 */}
    <section className="top-0 left-0 h-[70vh] flex w-full justify-center sm:justify-between items-center bg-black bg-opacity-95">
        <div
          className={`arrow-left text-white text-3xl hidden sm:block`}
          onClick={handlePrevClickS1}
        >
          <FaArrowLeft />
        </div>
        {galleryData && (
          <img
            src={`https://rest.1010-group.com/images/${galleryData[currentImage]?.name}`}
            alt="Gallery"
            className="h-[43vh] w-[43vh] rounded-md justify-center"
          />
        )}
        <div
          className="relative arrow-right text-white text-3xl  hidden sm:block"
          onClick={handleNextClickS1}
          
        >
          <FaArrowRight />
        </div>
      </section>

       {/* Section 2 */}
       <section className="h-[17%] w-full flex  justify-between items-center bg-black ">
        <div className="flex justify-between items-center w-full p-10">
          <div
            className="arrow-left text-white text-3xl"
            onClick={handlePrevClickS1}
          >
            <FaArrowLeft />
          </div>
          <div className="flex overflow-hidden">
            {galleryData.map((image, index) => (
              <img
                key={index}
                src={`https://rest.1010-group.com/images/${image.name}`}
                alt="Gallery"
                className={`h-[15vh] w-[20vh] object-cover ${
                  index === currentImage ? "border-white border-2" : ""
                } m-5 hover:cursor-pointer`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
          <div
            className="arrow-right text-white text-3xl"
            onClick={handleNextClickS1}
          >
            <FaArrowRight />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;
