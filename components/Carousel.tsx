'use client';
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Carousel = ({ images, className, height }: { images: string[]; className?: string; height?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className={`relative w-full max-w-4xl mx-auto`}>
      <div className="overflow-hidden  rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500  ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="shrink-0 w-full">
              <img
              height={height}
                src={src}
                alt={`Carousel ${index}`}
                className={`w-full ${className || ''}  object-cover`}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel