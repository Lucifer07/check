'use client'
import { useState, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import Nav from "@/components/Nav";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [galleryData, setGalleryData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalImage, setTotalImage] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    fetchGalleryData();
  }, [currentPage]);

  useEffect(() => {
    setTotalImage(galleryData?.data?.data?.length || 0);
  }, [galleryData]);

  const fetchGalleryData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://rest.1010-group.com/galery?page=${currentPage}`
      );
      const data = response.data;
      setGalleryData(data);
      setTotalPages(data.data.last_page);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  }, [currentPage]);

  const handlePrevClickS1 = useCallback(() => {
    if (currentImage > 0) {
      setCurrentImage((prevPage) => prevPage - 1);
    }
  }, [currentImage]);

  const handleNextClickS1 = useCallback(() => {
    if (currentImage < totalImage - 1) {
      setCurrentImage((prevPage) => prevPage + 1);
    }
  }, [currentImage, totalImage]);

  const handleImageClick = useCallback((index) => {
    setCurrentImage(index);
  }, []);

  const handlePrevClick = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }, [currentPage]);

  const handleNextClick = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [currentPage, totalPages]);
  const handlePrevClickSm = useCallback(() => {
    if (currentImage == 0 && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (currentImage != 0) {
      setCurrentImage((prevPage) => prevPage - 1);
    }
  }, [currentPage, currentImage]);

  const handleNextClickSm = useCallback(() => {
    if (currentPage < totalPages && currentImage == totalImage) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (currentImage < totalImage - 1) {
      setCurrentImage((prevPage) => prevPage + 1);
    }
  }, [currentPage, totalPages, currentImage, totalImage]);

  return (
    <div>
      <Nav />
    {/* Section 1 */}
    <section className="top-0 left-0 h-[60vh] flex w-full justify-center sm:justify-between items-center bg-black bg-opacity-95">
        <div
          className={`arrow-left text-white text-3xl hidden sm:block`}
          onClick={handlePrevClickS1}
          style={{ cursor: currentImage === 0 ? "not-allowed" : "pointer" }}
        >
          <FaArrowLeft />
        </div>
        {galleryData?.data?.data?.length > 0 && (
          <img
            src={`https://rest.1010-group.com/images/${galleryData?.data?.data[currentImage]?.name}`}
            alt="Gallery"
            className="h-[30vh] w-[40vh] rounded-md shadow-gray-400 shadow-md justify-center"
          />
        )}
        <div
          className="relative arrow-right text-white text-3xl  hidden sm:block"
          onClick={handleNextClickS1}
          style={{
            cursor: currentImage === totalImage - 1 ? "not-allowed" : "pointer",
          }}
        >
          <FaArrowRight />
        </div>
      </section>
{/* Section 2 */}
<section className="h-[30%] w-full hidden sm:flex justify-between items-center bg-black overlay ">
        <div className="flex justify-between items-center w-full p-10">
          <div
            className="arrow-left text-white text-3xl"
            onClick={handlePrevClick}
            style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
          >
            <FaArrowLeft />
          </div>
          <div className="flex overflow-hidden">
            {galleryData?.data?.data?.map((image, index) => (
              <img
                key={index}
                src={`https://rest.1010-group.com/images/${image.name}`}
                alt="Gallery"
                className={`h-[20vh] w-[30vh] object-cover ${
                  index === currentImage ? "border-white border-2" : ""
                } m-5 hover:cursor-pointer`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
          <div
            className="arrow-right text-white text-3xl"
            onClick={handleNextClick}
            style={{
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            }}
          >
            <FaArrowRight />
          </div>
        </div>
      </section>
       {/* Section 3 */}
       <section className="h-[30%] w-full flex sm:hidden justify-between items-center bg-black ">
        <div className="flex justify-between items-center w-full p-10">
          <div
            className="arrow-left text-white text-3xl"
            onClick={handlePrevClickSm}
            style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
          >
            <FaArrowLeft />
          </div>
          <div className="flex overflow-hidden">
            {galleryData?.data?.data?.map((image, index) => (
              <img
                key={index}
                src={`https://rest.1010-group.com/images/${image.name}`}
                alt="Gallery"
                className={`h-[20vh] w-[30vh] object-cover ${
                  index === currentImage ? "border-white border-2" : ""
                } m-5 hover:cursor-pointer ${
                  index < currentImage ? "hidden" : "block"
                }`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
          <div
            className="arrow-right text-white text-3xl"
            onClick={handleNextClickSm}
            style={{
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            }}
          >
            <FaArrowRight />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;
