import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Music2, Users, Heart, Calendar, Star } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';

// ... (rest of the existing Home component code remains the same until before the last closing tag)

const Home = () => {
  const whatsappLink = `https://wa.me/905418097073?text=${encodeURIComponent('Merhaba, bando hizmeti hakkında bilgi almak istiyorum.')}`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
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
              Bando Başkent ile Unutulmaz Melodiler
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Profesyonel müzisyenlerimizle özel gününüzü benzersiz bir deneyime dönüştürüyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-colors flex items-center justify-center"
              >
                <span>Hemen Rezervasyon Yap</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/galeri"
                className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-center"
              >
                Performanslarımız
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Düğününüzü unutulmaz kılmak için profesyonel müzik hizmetlerimiz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Music2,
                title: 'Geniş Repertuar',
                description: 'Pop\'tan klasiğe, yerli ve yabancı birçok şarkı'
              },
              {
                icon: Users,
                title: 'Profesyonel Ekip',
                description: 'Konservatuar mezunu, deneyimli müzisyenler'
              },
              {
                icon: Heart,
                title: 'Özel Düzenlemeler',
                description: 'İlk dans şarkınız için özel düzenlemeler'
              },
              {
                icon: Calendar,
                title: 'Esnek Planlama',
                description: 'Size özel program ve koordinasyon'
              }
            ].map((service) => (
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

      {/* Image Slider Section */}
      <ImageSlider />

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Mutlu Çiftler</h2>
            <p className="text-gray-600">Düğünlerinde bizi tercih eden çiftlerin yorumları</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ayşe & Mehmet',
                comment: 'Repertuarları ve profesyonellikleri ile düğünümüzü unutulmaz kıldılar.',
                date: 'Ağustos 2023'
              },
              {
                name: 'Zeynep & Can',
                comment: 'İlk dans şarkımız için yaptıkları özel düzenleme harikaydı.',
                date: 'Eylül 2023'
              },
              {
                name: 'Elif & Burak',
                comment: 'Tüm konuklarımız müzikten çok memnun kaldı, teşekkür ederiz.',
                date: 'Ekim 2023'
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center text-rose-600 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-6">Düğününüz İçin Hazır mısınız?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sizin için en uygun paketi belirlemek ve detayları konuşmak için hemen iletişime geçin.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-rose-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            <span>Teklif Al</span>
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;