
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-playfair font-bold text-beauty-dark">
              Bella<span className="text-beauty-accent">Beauty</span>
            </span>
          </Link>

          {/* Навигация для десктопа */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="beauty-link font-medium">Главная</Link>
            <Link to="/services" className="beauty-link font-medium">Услуги</Link>
            <Link to="/shop" className="beauty-link font-medium">Магазин</Link>
            <Link to="/about" className="beauty-link font-medium">О нас</Link>
            <Link to="/contacts" className="beauty-link font-medium">Контакты</Link>
          </div>

          {/* Кнопки действий */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/booking">
              <Button className="bg-beauty-accent hover:bg-beauty-dark text-white">
                Запись онлайн
              </Button>
            </Link>
            <Link to="/login" className="p-2">
              <Icon name="User" size={20} />
            </Link>
            <Link to="/cart" className="p-2 relative">
              <Icon name="ShoppingBag" size={20} />
              <span className="absolute -top-1 -right-1 bg-beauty-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Мобильная кнопка меню */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="py-2 px-4 hover:bg-beauty-light rounded-md">Главная</Link>
            <Link to="/services" className="py-2 px-4 hover:bg-beauty-light rounded-md">Услуги</Link>
            <Link to="/shop" className="py-2 px-4 hover:bg-beauty-light rounded-md">Магазин</Link>
            <Link to="/about" className="py-2 px-4 hover:bg-beauty-light rounded-md">О нас</Link>
            <Link to="/contacts" className="py-2 px-4 hover:bg-beauty-light rounded-md">Контакты</Link>
            
            <div className="flex items-center space-x-4 pt-2 border-t">
              <Link to="/booking" className="flex-1">
                <Button className="w-full bg-beauty-accent hover:bg-beauty-dark text-white">
                  Запись онлайн
                </Button>
              </Link>
              <Link to="/login" className="p-2">
                <Icon name="User" size={20} />
              </Link>
              <Link to="/cart" className="p-2 relative">
                <Icon name="ShoppingBag" size={20} />
                <span className="absolute -top-1 -right-1 bg-beauty-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
