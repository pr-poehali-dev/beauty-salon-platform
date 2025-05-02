
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Анна Смирнова',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rating: 5,
    text: 'Превосходный салон! Я в восторге от результата окрашивания. Мастер учла все мои пожелания и подобрала идеальный оттенок. Обязательно вернусь снова!',
    service: 'Окрашивание волос'
  },
  {
    id: 2,
    name: 'Екатерина Иванова',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    rating: 5,
    text: 'Делала маникюр и покрытие гель-лаком. Мастер работает очень аккуратно, все инструменты стерильные. Дизайн получился именно такой, как я хотела!',
    service: 'Маникюр'
  },
  {
    id: 3,
    name: 'Михаил Петров',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rating: 4,
    text: 'Отличный салон с профессиональными мастерами. Стрижка выполнена идеально, мастер дал несколько полезных советов по уходу за волосами.',
    service: 'Мужская стрижка'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мнения наших клиентов — лучшее подтверждение качества наших услуг.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`w-full flex-shrink-0 transition-transform duration-500 ease-in-out transform ${
                  index === activeIndex ? 'translate-x-0' : 'translate-x-full hidden'
                }`}
              >
                <Card className="border border-beauty-muted bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-beauty-accent">{testimonial.service}</p>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            size={16} 
                            className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-beauty-accent' : 'bg-gray-300'
                }`}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden md:flex bg-white p-2 rounded-full shadow-md hover:bg-beauty-light"
            aria-label="Предыдущий отзыв"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden md:flex bg-white p-2 rounded-full shadow-md hover:bg-beauty-light"
            aria-label="Следующий отзыв"
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
