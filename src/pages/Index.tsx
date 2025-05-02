
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import SpecialOffers from '@/components/SpecialOffers';
import Testimonials from '@/components/Testimonials';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServiceSection />
      
      {/* О нас секция */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">О салоне BellaBeauty</h2>
              <p className="text-gray-600 mb-6">
                Мы создали место, где вы можете отдохнуть от повседневных забот и полностью посвятить время себе. Наш салон красоты предлагает широкий спектр косметических и спа-процедур, выполняемых опытными мастерами.
              </p>
              <p className="text-gray-600 mb-6">
                Мы используем только профессиональную косметику премиум-класса и современное оборудование, чтобы гарантировать безопасность и эффективность всех процедур.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} className="text-beauty-accent" />
                  <span>Опытные мастера</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} className="text-beauty-accent" />
                  <span>Премиум косметика</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} className="text-beauty-accent" />
                  <span>Уютная атмосфера</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} className="text-beauty-accent" />
                  <span>Индивидуальный подход</span>
                </div>
              </div>
              <Link to="/about">
                <Button variant="outline" className="border-beauty-accent text-beauty-dark hover:bg-beauty-light">
                  Подробнее о нас
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Салон красоты" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                alt="Косметические услуги" 
                className="rounded-lg shadow-md w-full h-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>
      
      <SpecialOffers />
      <Testimonials />
      
      {/* Запись на прием */}
      <section className="py-16 beauty-gradient text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Готовы к преображению?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Запишитесь на прием прямо сейчас и доверьте свою красоту профессионалам. Мы создадим уникальный образ, подчеркивающий вашу индивидуальность.
          </p>
          <Link to="/booking">
            <Button className="bg-white text-beauty-dark hover:bg-gray-100 text-lg py-6 px-8">
              Записаться онлайн
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Магазин */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Наш магазин</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Профессиональная косметика и средства по уходу, которые мы используем в нашем салоне и рекомендуем для домашнего ухода.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="beauty-card group">
                <div className="aspect-w-1 aspect-h-1 mb-4 relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=8${index + 1}&q=80`}
                    alt="Косметический продукт" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">Профессиональный шампунь</h3>
                  <p className="text-beauty-accent font-semibold mb-2">2 800 ₽</p>
                  <Button className="w-full bg-beauty-accent hover:bg-beauty-dark text-white">
                    В корзину
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/shop">
              <Button variant="outline" className="border-beauty-accent text-beauty-dark hover:bg-beauty-light">
                Перейти в магазин
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Контактная информация */}
      <section className="py-16 bg-beauty-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Как нас найти</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы расположены в центре города с удобной транспортной доступностью.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17963.103313224884!2d37.61445788629317!3d55.75480799350942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1714640880133!5m2!1sru!2sru" 
                  className="w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта местоположения салона"
                ></iframe>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={18} className="text-beauty-accent mt-0.5" />
                  <span className="text-gray-700">г. Москва, ул. Красоты, д. 12</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-beauty-accent" />
                  <span className="text-gray-700">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-beauty-accent" />
                  <span className="text-gray-700">info@bellabeauty.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={18} className="text-beauty-accent" />
                  <span className="text-gray-700">Пн-Вс: 9:00 - 21:00</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-playfair font-bold mb-4">Напишите нам</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Имя
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beauty-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beauty-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Тема
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beauty-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение
                    </label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beauty-accent"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-beauty-accent hover:bg-beauty-dark text-white">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
