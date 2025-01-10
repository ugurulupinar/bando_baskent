import React, { useState } from 'react';
import { X } from 'lucide-react';

type MediaType = 'photos' | 'videos';
type Category = 'all' | 'wedding' | 'bride' | 'welcome' | 'opening' | 'event';

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'wedding', label: 'Düğün' },
  { id: 'bride', label: 'Gelin Alma' },
  { id: 'welcome', label: 'Karşılama' },
  { id: 'opening', label: 'Açılış' },
  { id: 'event', label: 'Etkinlik' },
] as const;

const images = [
  {
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    category: 'wedding',
    title: 'Düğün Töreni'
  },
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    category: 'bride',
    title: 'Gelin Alma Töreni'
  },
  {
    url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329',
    category: 'welcome',
    title: 'Karşılama Töreni'
  },
  {
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
    category: 'opening',
    title: 'Açılış Etkinliği'
  },
  {
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
    category: 'event',
    title: 'Özel Etkinlik'
  },
];

const videos = [
  {
    url: 'https://www.youtube.com/embed/VIDEO_ID_1',
    category: 'wedding',
    title: 'Düğün Highlights'
  },
  {
    url: 'https://www.youtube.com/embed/VIDEO_ID_2',
    category: 'bride',
    title: 'Gelin Alma Merasimi'
  },
  {
    url: 'https://www.youtube.com/embed/VIDEO_ID_3',
    category: 'event',
    title: 'Özel Etkinlik Performansı'
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [activeMediaType, setActiveMediaType] = useState<MediaType>('photos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = images.filter(
    img => activeCategory === 'all' || img.category === activeCategory
  );

  const filteredVideos = videos.filter(
    video => activeCategory === 'all' || video.category === activeCategory
  );

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif mb-8">Galeri</h1>
        
        {/* Media Type Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            <button
              onClick={() => setActiveMediaType('photos')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeMediaType === 'photos'
                  ? 'bg-rose-600 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              Fotoğraflar
            </button>
            <button
              onClick={() => setActiveMediaType('videos')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeMediaType === 'videos'
                  ? 'bg-rose-600 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              Videolar
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-rose-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        {activeMediaType === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={`${image.url}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-serif text-center px-4">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {activeMediaType === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={video.url}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={`${selectedImage}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80`}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;