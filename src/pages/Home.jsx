import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NavHome from "../components/NavHome/NavHome";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductDirectory from "../components/ProductDirectory/ProductDirectory";
import BusinessNews from "../components/BusinessNews/BusinessNews";
import SolarPricingSection from "../components/SolarPricingSection/SolarPricingSection";
import dummyImage from "../assets/images/featuredHomeImg2.png";
import headerImage from '../assets/images/headerImgAll.png';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsToShow, setProductsToShow] = useState(1);
  const [directoryToShow, setDirectoryToShow] = useState(2);
  const [selectedTab, setSelectedTab] = useState("Product");

  const products = [
    {
      image: dummyImage,
      name: "Majid Chonga",
      category: "Solar panel",
      manufacturer: "Shinefar Sola",
    },
    {
      image: dummyImage,
      name: "BiMAX 6N SP695-715M-66H",
      category: "Solar inverter",
      manufacturer: "Shinefar Sola",
    },
    {
      image: dummyImage,
      name: "BiMAX ",
      category: "Solar inverter",
      manufacturer: "Shinefar Sola",
    },
    {
      image: dummyImage,
      name: "BiMAX 6N SP695-715M-66H",
      category: "Solar inverter",
      manufacturer: "Shinefar Sola",
    },
    {
      image: dummyImage,
      name: "BiMAX 6N SP695-715M-66H",
      category: "Solar inverter",
      manufacturer: "Shinefar Sola",
    },
    // Add more products as needed
  ];

  const companies = products;

  const updateProductsToShow = () => {
    if (window.innerWidth < 640) {
      setProductsToShow(1);
    } else if (window.innerWidth < 1024) {
      setProductsToShow(2);
    } else {
      setProductsToShow(3);
    }
  };

  const updateDirectoryToShow = () => {
    if (window.innerWidth < 640) {
      setDirectoryToShow(2);
    } else if (window.innerWidth < 1024) {
      setDirectoryToShow(4);
    } else {
      setDirectoryToShow(6);
    }
  };

  useEffect(() => {
    updateProductsToShow();
    updateDirectoryToShow();
    window.addEventListener("resize", updateProductsToShow);
    window.addEventListener("resize", updateDirectoryToShow);
    return () => {
      window.removeEventListener("resize", updateProductsToShow);
      window.removeEventListener("resize", updateDirectoryToShow);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - productsToShow
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < products.length - productsToShow ? prevIndex + 1 : 0
    );
  };

  return (
    <div>
      <NavHome />
      <div className="text-left text-white lg:pl-36 lg:pt-28 lg:pb-24 md:pl-24 md:pt-20 md:pb-16 pl-8 pt-12 pb-10">
        <div className="flex items-center justify-between">
          <p className="text-lg md:text-xl lg:text-2xl font-medium mb-2 text-green-500">
            RECENT ARTICLES
          </p>
          <button className="bg-green-500 text-black py-2 px-4 rounded-full hover:bg-green-600 ml-auto lg:mr-36 md:mr-24 mr-8">
            View All
          </button>
        </div>
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-green-900">
          Featured Product
        </p>
      </div>
      <div className="relative p-4 lg:p-8">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button
            onClick={handlePrevClick}
            className="absolute left-0 bg-white border border-gray-300 p-2 rounded-full shadow-md transform -translate-y-1/2 top-1/2"
          >
            <FaChevronLeft className="text-green-600" />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button
            onClick={handleNextClick}
            className="absolute right-0 bg-white border border-gray-300 p-2 rounded-full shadow-md transform -translate-y-1/2 top-1/2"
          >
            <FaChevronRight className="text-green-600" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {products
            .slice(currentIndex, currentIndex + productsToShow)
            .map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                category={product.category}
                manufacturer={product.manufacturer}
              />
            ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-b-2 border-gray-200 py-2 md:py-4 px-4 md:px-6">
        <div className="flex space-x-4 md:space-x-8">
          <p
            className={`text-lg md:text-xl lg:text-2xl font-medium cursor-pointer ${
              selectedTab === "Product"
                ? "text-green-700 border-b-4 border-green-700"
                : "text-gray-400"
            }`}
            onClick={() => setSelectedTab("Product")}
          >
            Product Directory
          </p>
          <p
            className={`text-lg md:text-xl lg:text-2xl font-medium cursor-pointer ${
              selectedTab === "Company"
                ? "text-green-700 border-b-4 border-green-700"
                : "text-gray-400"
            }`}
            onClick={() => setSelectedTab("Company")}
          >
            Company Directory
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
        {selectedTab === "Product"
          ? products
              .slice(currentIndex, currentIndex + directoryToShow)
              .map((product, index) => (
                <ProductDirectory
                  key={index}
                  image={product.image}
                  name={product.name}
                />
              ))
          : companies
              .slice(currentIndex, currentIndex + directoryToShow)
              .map((company, index) => (
                <ProductDirectory
                  key={index}
                  image={company.image}
                  name={company.name}
                />
              ))}
      </div>

      <BusinessNews />
      <SolarPricingSection />

    </div>
  );
}

export default Home;