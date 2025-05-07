import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Grid, X } from "lucide-react";

// This would typically come from an API or data file
const galleryImages = [
  {
    id: 1,
    title: "Workshop Session",
    description: "Students collaborating during a hands-on workshop session",
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-04-25",
  },
  {
    id: 2,
    title: "Coding Lab",
    description: "Intensive coding session in our computer lab",
    url: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-04-20",
  },
  {
    id: 3,
    title: "Guest Lecture",
    description: "Industry expert sharing insights with students",
    url: "https://images.unsplash.com/photo-1602133187081-4874fdbd555c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-04-15",
  },
  {
    id: 4,
    title: "Student Project",
    description: "Final project presentation by graduating students",
    url: "https://images.unsplash.com/photo-1556636530-6b7482d80e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-04-10",
  },
  {
    id: 5,
    title: "Campus Tour",
    description: "Our modern facilities and learning spaces",
    url: "https://images.unsplash.com/photo-1635919369625-e6f8ba7681f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-04-05",
  },
  {
    id: 6,
    title: "Hackathon",
    description: "Annual coding competition with amazing prizes",
    url: "https://images.unsplash.com/photo-1640163561346-7778a2edf353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-03-30",
  },
];

// Sort images by date (most recent first)
const sortedImages = [...galleryImages].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

// Get the most recent images for the carousel
const recentImages = sortedImages.slice(0, 5);

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (!showAll && !selectedImage) {
      const timer = setTimeout(() => {
        nextSlide();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, showAll, selectedImage]);

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) =>
      prev === recentImages.length - 1 ? 0 : prev + 1
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) =>
      prev === 0 ? recentImages.length - 1 : prev - 1
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const toggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12 pt-20">
      {/* Gallery Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-2">
            <Grid className="text-white mr-3" size={28} />
            <h1 className="text-4xl font-bold text-white">Gallery</h1>
          </div>
          <p className="text-lg text-teal-50">
            Explore images from our courses, events, and campus life
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Section (shown when showAll is false) */}
        {!showAll && (
          <div className="mb-12">
            <div className="relative h-96 bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Carousel Images */}
              <div className="h-full relative">
                {recentImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      currentSlide === index
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                      <h2 className="text-white text-2xl font-bold mb-2">
                        {image.title}
                      </h2>
                      <p className="text-gray-200">{image.description}</p>
                      <p className="text-gray-300 text-sm mt-2">
                        {new Date(image.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all z-20"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {recentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index
                        ? "bg-white"
                        : "bg-white bg-opacity-50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={toggleView}
                className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-md"
              >
                View All Photos
              </button>
            </div>
          </div>
        )}

        {/* Full Gallery Grid (shown when showAll is true) */}
        {showAll && (
          <div>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">All Photos</h2>
              <button
                onClick={toggleView}
                className="text-teal-600 hover:text-teal-800 font-medium flex items-center"
              >
                <ChevronLeft size={20} className="mr-1" />
                Back to Recent
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedImages.map((image) => (
                <div
                  key={image.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all hover:-translate-y-1 hover:shadow-lg"
                  onClick={() => openLightbox(image)}
                >
                  <div className="h-48 bg-gray-200">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800">{image.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(image.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden">
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md z-10"
                aria-label="Close lightbox"
              >
                <X size={24} className="text-gray-800" />
              </button>

              {/* Navigation buttons in lightbox */}
              <div className="relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full max-h-[70vh] object-contain bg-gray-100"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = sortedImages.findIndex(
                      (img) => img.id === selectedImage.id
                    );
                    const prevIndex =
                      currentIndex === 0
                        ? sortedImages.length - 1
                        : currentIndex - 1;
                    setSelectedImage(sortedImages[prevIndex]);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = sortedImages.findIndex(
                      (img) => img.id === selectedImage.id
                    );
                    const nextIndex =
                      currentIndex === sortedImages.length - 1
                        ? 0
                        : currentIndex + 1;
                    setSelectedImage(sortedImages[nextIndex]);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-600 mt-2">
                  {selectedImage.description}
                </p>
                <p className="text-gray-500 text-sm mt-3">
                  {new Date(selectedImage.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
