
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-beauty-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Специальные предложения</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Воспользуйтесь нашими акциями и специальными предложениями для дополнительной выгоды.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Спецпредложение 1 */}
          <Card className="beauty-gradient text-white overflow-hidden">
            <CardContent className="p-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                <div className="font-medium mb-2">Ограниченное предложение</div>
                <h3 className="text-2xl font-playfair font-bold mb-3">
                  Скидка 20% на первое посещение
                </h3>
                <p className="mb-4 text-white/90">
                  Для новых клиентов мы предлагаем скидку 20% на любую услугу при первом посещении нашего салона.
                </p>
                <Link to="/booking">
                  <Button className="bg-white text-beauty-dark hover:bg-gray-100">
                    Забронировать
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Специальное предложение"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Спецпредложение 2 */}
          <Card className="border border-beauty-muted bg-white overflow-hidden">
            <CardContent className="p-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                <div className="text-beauty-accent font-medium mb-2">Пакетное предложение</div>
                <h3 className="text-2xl font-playfair font-bold mb-3">
                  Комплекс "Полное преображение"
                </h3>
                <p className="mb-4 text-gray-600">
                  Стрижка, окрашивание, уход за лицом и маникюр в одном комплексе со скидкой 25%.
                </p>
                <Link to="/services">
                  <Button className="bg-beauty-accent hover:bg-beauty-dark text-white">
                    Подробнее
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Пакетное предложение"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
