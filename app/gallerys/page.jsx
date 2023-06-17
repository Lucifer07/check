'use client'
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import axios from "axios";

export default function GallerysPage() {
  const [photos, setPhotos] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://rest.1010-group.com/galery?page=${currentPage}`
        );
        const data = response.data;
        setPhotos(data);
        setTotalPages(data.data.last_page);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPhotos();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }
    return pagination;
  };

  return (
    <>
      <div className="gallery-bg flex relative top-0 left-0 lg:h-[1000px] h-screen w-full items-center bg-no-repeat justify-center bg-center bg-cover"></div>
      <Nav id="Gallerys" />
      <main className="flex flex-col items-center justify-center">
        {loading ? (
          <div className="flex h-screen items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {photos?.data?.data?.map((photo, index) => (
                <div key={index}>
                  <div key={index} className="aspect-w-3 aspect-h-2">
                    <div className="relative">
                      <img
                        src={`https://rest.1010-group.com/images/${photo.name}`}
                        alt={photo.name}
                        width={500}
                        height={500}
                        className="w-[200px] h-[200px] rounded-lg shadow-lg border-5 border-gray-600 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center mt-4">
              {renderPagination()}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
