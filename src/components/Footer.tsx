import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Bando Başkent</h3>
            <p className="text-sm">
              Profesyonel düğün müziği hizmetleriyle unutulmaz anlar yaratıyoruz.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li><Link to="/hizmetler" className="hover:text-rose-400">Hizmetler</Link></li>
              <li><Link to="/galeri" className="hover:text-rose-400">Galeri</Link></li>
              <li><Link to="/iletisim" className="hover:text-rose-400">İletişim</Link></li>
              <li><Link to="/sss" className="hover:text-rose-400">S.S.S</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">İletişim</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+905418097073" className="hover:text-rose-400">0541 809 7073</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:bandobaskent@gmail.com" className="hover:text-rose-400">bandobaskent@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Yenimahalle, Ankara, Türkiye</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Sosyal Medya</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/bandobaskent" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bando Başkent. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;