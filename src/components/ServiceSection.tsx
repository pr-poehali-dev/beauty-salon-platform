
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Парикмахерские услуги',
    description: 'Стрижки, окрашивание, укладка, лечение волос и другие процедуры для здоровья и красоты ваших волос.',
    icon: 'Scissors',
    link: '/services/hair'
  },
  {
    id: 2,
    title: 'Маникюр и педикюр',
    description: 'Профессиональный уход за ногтями, покрытие гель-лаком, дизайн ногтей и spa-уход за руками и ногами.',
    icon: 'Paintbrush',
    link: '/services/nails'
  },
  {
    id: 3,
    title: 'Уход за лицом',
    description: 'Эффективные процедуры для красоты и молодости вашей кожи: чистка, массаж, маски и пилинги.',
    icon: 'Sparkles',
    link: '/services/facial'
  }
];

const ServiceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем широкий спектр профессиональных услуг, чтобы вы всегда выглядели и чувствовали себя прекрасно.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border border-beauty-muted overflow-hidden hover:shadow-md transition duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 p-3 bg-beauty-light rounded-full w-14 h-14 flex items-center justify-center">
                  <Icon name={service.icon} size={24} className="text-beauty-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5 flex-grow">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center text-beauty-accent hover:text-beauty-dark mt-2">
                  <span className="mr-2">Подробнее</span>
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" className="border-beauty-accent text-beauty-dark hover:bg-beauty-light">
              Все услуги
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
