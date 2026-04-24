"use client";

import { CategoryContext } from "@/context/catagoryContext";
import { use, useContext } from "react";

const res = fetch("https://dummyjson.com/products/category-list").then((res) =>
  res.json(),
);

const Leftside = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const data = use(res);

  return (
    <div className="bg-white rounded-md p-5 shadow">
      <div className="flex  flex-wrap md:flex-col gap-10">
        <button
          onClick={() => setSelectedCategory("all")}
          className={
            selectedCategory === "all"
              ? "btn btn-primary rounded-full"
              : "btn rounded-full text-gray-600"
          }
        >
          All Product
        </button>
        {data.map((category) => (
          <button
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? "btn btn-primary rounded-full"
                : 'btn rounded-full text-gray-600"'
            }
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Leftside;
