"use client";

import { createContext, useState } from "react";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
console.log(selectedCategory);
  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;