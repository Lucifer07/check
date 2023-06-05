"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Card({ link }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [dataArticle, setDataArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "";
        if (link === "article" ) {
          url = `https://rest.1010-group.com/articles?page=${currentPage}`;
        } else if (link === "sirloin") {
          url = `https://rest.1010-group.com/articles?product=sirloin&page=${currentPage}`;
        }else if (link === "silo") {
            url = `https://rest.1010-group.com/articles?product=silo&page=${currentPage}`;
          }

        const response = await axios.get(url);
        setDataArticle(response.data.data.data);
        setTotalPages(response.data.data.last_page);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        // Tambahkan penanganan kesalahan sesuai kebutuhan Anda
      }
    };

    fetchData();
  }, [currentPage, link]);

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

  return (
    <>
      <div className="flex gap-3 ml-10 flex-wrap pb-20">
        {dataArticle.map((article) => (
          <div key={article.id} className="p-5 flex flex-col gap-3">
            <Image
              src={`https://rest.1010-group.com/article/${article.image}`}
              width={200}
              height={200}
              alt={article.title}
              className="w-[250px] h-[300px] object-cover"
            />
            <h1 className="font-semibold text-xl mt-5">{article.title}</h1>
            <p>{article.created_at}</p>
            <Link href={`/detail-article/${article.slug}`} className="font-semibold">
              Read More
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2 mb-4">{renderPagination()}</div>
    </>
  );
}
