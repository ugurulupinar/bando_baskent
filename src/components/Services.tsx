import React from 'react';
import { Music2, Users, Heart, Calendar } from 'lucide-react';

const services = [
  {
    icon: Music2,
    title: 'Geniş Repertuar',
    description: 'Pop\'tan klasiğe, yerli ve yabancı birçok şarkıyı profesyonel yorumumuzla sunuyoruz.'
  },
  {
    icon: Users,
    title: 'Profesyonel Ekip',
    description: 'Konservatuar mezunu, deneyimli müzisyenlerden oluşan profesyonel kadromuz.'
  },
  {
    icon: Heart,
    title: 'Özel Düzenlemeler',
    description: 'İlk dans şarkınız için özel düzenlemeler ve sizin seçtiğiniz şarkılar.'
  },
  {
    icon: Calendar,
    title: 'Esnek Planlama',
    description: 'Düğün programınıza göre özelleştirilmiş müzik planlaması ve koordinasyon.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50" id="hizmetler">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Hizmetlerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Düğününüzü unutulmaz kılmak için profesyonel müzik hizmetlerimiz
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;