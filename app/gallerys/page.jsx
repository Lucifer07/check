'use client'
import { useEffect, useState } from "react";
import Nav from "@/components/Nav"
import axios from "axios";
import Image from "next/image";


// export const metadata = {
//     title: 'Gallerys',
// }

export default function GallerysPage() {
    const [photos, setPhotos] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); 
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getPhotos = async () => {
            setLoading(true);
            await axios.get(`https://rest.1010-group.com/galery?page=${currentPage}`)
          .then((data) => {
            setPhotos(data);
            setTotalPages(data.data.data.last_page);
            setLoading(false);
          });
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
                currentPage === i
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {i}
            </button>
          );
        }
        return pagination;
      };
    return(
        <>
            <div className="gallery-bg flex relative top-0 left-0 h-[1000px] w-full items-center bg-no-repeat justify-center bg-center bg-cover"></div>
            <Nav id="Gallerys" />
            <main className="flex flex-col items-center justify-center">
        {loading ? (
            console.log(totalPages),
            <div className="flex h-screen items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>):(
            <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.data.data.data.map((photo,index) => (
          <div key={index}>
            <div key={index} className="aspect-w-3 aspect-h-2">
            <div className="relative">
              <img
                src={`https://rest.1010-group.com/images/${photo.name}`}
                alt={photo.name}
                className="w-full h-full rounded-lg shadow-lg border-5 border-gray-600 object-cover"
                loading="lazy"
              />
            </div>
          </div>
          </div>
        )
        )}
      </div>

      <div className="flex justify-center mt-4">
        {renderPagination()}
      </div>
    </div>
        )}
            </main>
        </>
    )
}



