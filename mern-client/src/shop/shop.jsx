import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://deploy-theta-gilt.vercel.app/all-books").then(res => res.json()).then(data => setBooks(data));
  }, [])
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books Are Here</h2>
      <div className="grid my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8">
        {
        books.map(book => <Card className="">

            <img src={book.imageURL} alt="" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button className="bg-blue-700 font-semibold text-white py-4 rounded">Buy Now</button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default shop;
