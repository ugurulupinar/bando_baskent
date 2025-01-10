import React from 'react';
import { Target, Heart } from 'lucide-react';

const MissionVision = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <Target className="h-8 w-8 text-rose-600" />
          <h3 className="text-2xl font-serif">Misyonumuz</h3>
        </div>
        <p className="text-gray-600">
          Her düğünü unutulmaz bir müzik deneyimine dönüştürmek ve çiftlerin en özel gününde
          profesyonel müzik hizmeti sunarak hayallerindeki atmosferi yaratmak.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <Heart className="h-8 w-8 text-rose-600" />
          <h3 className="text-2xl font-serif">Vizyonumuz</h3>
        </div>
        <p className="text-gray-600">
          Türkiye'nin en çok tercih edilen düğün müzik organizasyonu olmak ve
          müzik kalitemizle sektörde standartları belirlemek.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;