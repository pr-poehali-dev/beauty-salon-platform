
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-beauty-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Лого и описание */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-playfair font-bold">
              BellaBeauty
            </h3>
            <p className="text-sm text-gray-300 max-w-xs">
              Ваш салон красоты, где каждая процедура — это уникальное путешествие к красоте и гармонии.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-beauty-accent transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-white hover:text-beauty-accent transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-white hover:text-beauty-accent transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-lg font-medium mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-beauty-accent transition-colors">Главная</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-beauty-accent transition-colors">Услуги</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-beauty-accent transition-colors">Магазин</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-beauty-accent transition-colors">О нас</Link></li>
              <li><Link to="/contacts" className="text-gray-300 hover:text-beauty-accent transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="text-lg font-medium mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-beauty-accent transition-colors">Парикмахерские услуги</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-beauty-accent transition-colors">Маникюр и педикюр</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-beauty-accent transition-colors">Уход за лицом</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-beauty-accent transition-colors">Массаж</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-beauty-accent transition-colors">Макияж</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-medium mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Icon name="MapPin" size={18} className="mt-0.5" />
                <span className="text-gray-300">г. Москва, ул. Красоты, д. 12</span>
              </li>
              <li className="flex items-center space-x-3">
                <Icon name="Phone" size={18} />
                <span className="text-gray-300">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-3">
                <Icon name="Mail" size={18} />
                <span className="text-gray-300">info@bellabeauty.ru</span>
              </li>
              <li className="flex items-center space-x-3">
                <Icon name="Clock" size={18} />
                <span className="text-gray-300">Пн-Вс: 9:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} BellaBeauty. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/policy" className="text-sm text-gray-400 hover:text-white">Политика конфиденциальности</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
