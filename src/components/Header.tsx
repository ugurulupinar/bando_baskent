import React from 'react';
import { Menu, X, Music, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-rose-600" />
            <span className="text-2xl font-serif font-bold">Harmoni</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Ana Sayfa', 'Hakkımızda', 'Hizmetler', 'Galeri', 'Referanslar', 'Blog', 'İletişim'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-rose-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors">
              <Phone className="h-4 w-4" />
              <span>Teklif Al</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {['Ana Sayfa', 'Hakkımızda', 'Hizmetler', 'Galeri', 'Referanslar', 'Blog', 'İletişim'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-rose-600 transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="flex items-center justify-center space-x-2 bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors">
                <Phone className="h-4 w-4" />
                <span>Teklif Al</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;