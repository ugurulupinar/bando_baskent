import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'İletişim', path: '/iletisim' },
    { name: 'S.S.S', path: '/sss' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Bando Başkent Logo" className="h-12 w-12" />
            <span className="text-2xl font-serif font-bold">Bando Başkent</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? 'text-rose-600'
                    : 'text-gray-600 hover:text-rose-600'
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/iletisim"
              className="flex items-center space-x-2 bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Teklif Al</span>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    isActive(item.path)
                      ? 'text-rose-600'
                      : 'text-gray-600 hover:text-rose-600'
                  } transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/iletisim"
                className="flex items-center justify-center space-x-2 bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span>Teklif Al</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;