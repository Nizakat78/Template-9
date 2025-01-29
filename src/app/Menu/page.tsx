import React from 'react';
import { RxCaretRight } from "react-icons/rx";
import Image from 'next/image';
import { SiCoffeescript } from "react-icons/si";
import StatsSection from '../../components/Menu/StatsSection';
import Partners from '../../components/Menu/Partners';

const page = () => {
  return (
    <div className="bg-white text-white">
      {/* Background Image Section */}
      <div className="w-full h-64 md:h-96 bg-[url('/Menubg1.svg')] bg-cover bg-center relative">
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold">Our Menu</h1>
          <p className="text-xs md:text-sm font-semibold flex items-center gap-1 mt-2">
            Home
            <span className="flex items-center">
              <RxCaretRight />
            </span>
            <span className="text-yellow-500">Menu</span>
          </p>
        </div>
      </div>

      {/* Starter Menu Section */}
      <div className="min-h-screen bg-white text-gray-900 font-sans p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left - Image Section */}
          <div className="flex items-center justify-center">
            <Image
              src="/Menupic1.svg"
              alt="Starter Menu"
              width={320}
              height={340}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right - Text Section */}
          <div className="space-y-2 md:mr-20">
            {/* Title Section */}
            <div className="flex items-center space-x-3 text-yellow-600">
              <SiCoffeescript size={22} />
            </div>

            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Starter Menu</h1>

            {/* Menu Items */}
            <div className="space-y-6">
              {[
                { name: "Alder Grilled Cook Salmon", price: "32$", description: "Toasted French bread topped with romano, cheddar", calories: "580 CAL" },
                { name: "Berries and Creme Tart", price: "43$", description: "Gorgonzola, ricotta, mozzarella, taleggio", calories: "700 CAL" },
                { name: "Tormentoso Bush Pizza Pintoage", price: "14$", description: "Ground cumin, avocados, peeled and cubed", calories: "1000 CAL" },
                { name: "Spicy Vegan Potato Curry", price: "35$", description: "Spreadable cream cheese, crumbled blue cheese", calories: "580 CAL" },
              ].map((item, index) => (
                <div key={index} className="border-b pb-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.name}
                    <span className="text-yellow-600 float-right">{item.price}</span>
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.calories}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Course Section */}
      <div className="min-h-screen bg-white text-gray-900 font-sans p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Right - Text Section */}
          <div className="space-y-2 md:ml-40">
            {/* Title Section */}
            <div className="flex items-center space-x-4 text-yellow-600">
              <SiCoffeescript size={22} />
            </div>

            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Main Course</h1>

            {/* Menu Items */}
            <div className="space-y-6">
              {[
                { name: "Optic Big Breakfast Combo Menu", price: "32$", description: "Toasted French bread topped with romano, cheddar", calories: "580 CAL" },
                { name: "Cashew Chicken With Stir-Fry", price: "43$", description: "Gorgonzola, ricotta, mozzarella, taleggio", calories: "700 CAL" },
                { name: "Vegetables & Green Salad", price: "14$", description: "Ground cumin, avocados, peeled and cubed", calories: "1000 CAL" },
                { name: "Spicy Vegan Potato Curry", price: "35$", description: "Spreadable cream cheese, crumbled blue cheese", calories: "580 CAL" },
              ].map((item, index) => (
                <div key={index} className="border-b pb-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.name}
                    <span className="text-yellow-600 float-right">{item.price}</span>
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.calories}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Left - Image Section */}
          <div className="flex items-end justify-center md:justify-end md:mr-24">
            <Image
              src="/Menupic2.svg"
              alt="Main Course"
              width={320}
              height={340}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Dessert Section */}
      <div className="min-h-screen bg-white text-gray-900 font-sans p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left - Image Section */}
          <div className="flex items-center justify-center">
            <Image
              src="/Menupic3.svg"
              alt="Dessert"
              width={320}
              height={340}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right - Text Section */}
          <div className="space-y-2 md:mr-20">
            {/* Title Section */}
            <div className="flex items-center space-x-3 text-yellow-600">
              <SiCoffeescript size={22} />
            </div>

            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Dessert</h1>

            {/* Menu Items */}
            <div className="space-y-6">
              {[
                { name: "Fig and lemon cake", price: "32$", description: "Toasted French bread topped with romano, cheddar", calories: "580 CAL" },
                { name: "Creamy mascarpone cake", price: "43$", description: "Gorgonzola, ricotta, mozzarella, taleggio", calories: "700 CAL" },
                { name: "Pastry, blueberries, lemon juice", price: "14$", description: "Ground cumin, avocados, peeled and cubed", calories: "1000 CAL" },
                { name: "Pain au chocolat", price: "35$", description: "Spreadable cream cheese, crumbled blue cheese", calories: "580 CAL" },
              ].map((item, index) => (
                <div key={index} className="border-b pb-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.name}
                    <span className="text-yellow-600 float-right">{item.price}</span>
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.calories}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Drinks Section */}
      <div className="min-h-screen bg-white text-gray-900 font-sans p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Right - Text Section */}
          <div className="space-y-2 md:ml-40">
            {/* Title Section */}
            <div className="flex items-center space-x-4 text-yellow-600">
              <SiCoffeescript size={22} />
            </div>

            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Drinks</h1>

            {/* Menu Items */}
            <div className="space-y-6">
              {[
                { name: "Caffè macchiato", price: "32$", description: "Toasted French bread topped with romano, cheddar", calories: "580 CAL" },
                { name: "Aperol Spritz Capacianno", price: "43$", description: "Gorgonzola, ricotta, mozzarella, taleggio", calories: "700 CAL" },
                { name: "Caffe Latte Campuri", price: "14$", description: "Ground cumin, avocados, peeled and cubed", calories: "1000 CAL" },
                { name: "Tormentoso BushTea Pintoage", price: "35$", description: "Spreadable cream cheese, crumbled blue cheese", calories: "580 CAL" },
              ].map((item, index) => (
                <div key={index} className="border-b pb-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.name}
                    <span className="text-yellow-600 float-right">{item.price}</span>
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.calories}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Left - Image Section */}
          <div className="flex items-end justify-center md:justify-end md:mr-24">
            <Image
              src="/Menupic4.svg"
              alt="Drinks"
              width={320}
              height={340}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <Partners />
    </div>
  );
};

export default page;