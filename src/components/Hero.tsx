
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-40 md:pb-20 bg-gradient-to-r from-beauty-light to-beauty-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 leading-tight">
              Откройте для себя настоящую красоту
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Наш салон красоты предлагает полный спектр услуг для поддержания вашей красоты и здоровья — от ухода за волосами до расслабляющих спа-процедур.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking">
                <Button className="bg-beauty-accent hover:bg-beauty-dark text-white text-lg py-6 px-8">
                  Записаться онлайн
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-beauty-accent text-beauty-dark hover:bg-beauty-light text-lg py-6 px-8">
                  Наши услуги
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Салон красоты" 
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-beauty-dark/30 to-transparent rounded-2xl"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-fade-in">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="font-medium">Открыто сейчас</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
