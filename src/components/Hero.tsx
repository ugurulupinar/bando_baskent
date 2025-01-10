import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Düğününüzün Unutulmaz Melodisi
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Profesyonel müzisyenlerimizle özel gününüzü benzersiz bir deneyime dönüştürüyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-colors flex items-center justify-center">
              <span>Hemen Rezervasyon Yap</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Müzik Listemizi Dinle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;