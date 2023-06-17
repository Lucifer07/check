"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const API_BASE_URL = "https://rest.1010-group.com/article";

export default function Card({ link, article }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [dataArticle, setDataArticle] = useState([]);

  useEffect(() => {
    fetchData();
  }, [currentPage, link]);

  const fetchData = async () => {
    try {
      let url = `${API_BASE_URL}s?page=${currentPage}`;

      if (link === "sirloin") {
        url += "&product=sirloin";
      } else if (link === "silo") {
        url += "&product=silo";
      }

      const response = await axios.get(url);
      setDataArticle(response.data.data.data);
      setTotalPages(response.data.data.last_page);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      // Tambahkan penanganan kesalahan sesuai kebutuhan Anda
    }
  };

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
      <div className="flex gap-3 ml-10 flex-wrap pb-20">
        {dataArticle.map((articleItem) => (
          <div key={articleItem.id} className="p-5 flex flex-col gap-3">
            <img
              src={`${API_BASE_URL}/${articleItem.image}`}
              width={200}
              height={200}
              alt={articleItem.title}
              className="w-[250px] h-[300px] object-cover"
            />
            <h1 className="font-semibold text-xl mt-5">{articleItem.title}</h1>
            <p>{articleItem.created_at}</p>
            <Link href={`/detail-article/${articleItem.slug}`} className="font-semibold">
              Read More
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2 mb-4">{renderPagination()}</div>
    </>
  );
}
