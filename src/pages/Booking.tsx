
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppointmentForm from '@/components/booking/AppointmentForm';
import Icon from '@/components/ui/icon';

const Booking = () => {
  return (
    <Layout>
      <div className="pt-10 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Заголовок страницы */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Запись на услуги</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Забронируйте удобное для вас время посещения нашего салона. Заполните форму ниже и мы свяжемся с вами для подтверждения.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Форма записи */}
            <div>
              <AppointmentForm />
            </div>

            {/* Информация */}
            <div className="space-y-8">
              {/* Контактная информация */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-playfair font-bold mb-4">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-beauty-light rounded-full p-2 mt-1">
                      <Icon name="MapPin" size={20} className="text-beauty-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-gray-600">г. Москва, ул. Красоты, д. 12</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-beauty-light rounded-full p-2 mt-1">
                      <Icon name="Phone" size={20} className="text-beauty-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-gray-600">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-beauty-light rounded-full p-2 mt-1">
                      <Icon name="Mail" size={20} className="text-beauty-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@bellabeauty.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-beauty-light rounded-full p-2 mt-1">
                      <Icon name="Clock" size={20} className="text-beauty-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Часы работы</p>
                      <p className="text-gray-600">Понедельник - Воскресенье: 9:00 - 21:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Правила записи */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-playfair font-bold mb-4">Важная информация</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={18} className="text-beauty-accent mt-0.5" />
                    <p className="text-gray-600">Бронирование подтверждается после проверки администратором.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" size={18} className="text-beauty-accent mt-0.5" />
                    <p className="text-gray-600">Пожалуйста, приходите за 10 минут до начала записи.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Calendar" size={18} className="text-beauty-accent mt-0.5" />
                    <p className="text-gray-600">Для отмены или переноса записи, пожалуйста, предупредите нас минимум за 4 часа.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CreditCard" size={18} className="text-beauty-accent mt-0.5" />
                    <p className="text-gray-600">Мы принимаем оплату наличными, картой или по QR-коду.</p>
                  </div>
                </div>
              </div>

              {/* Карта */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-playfair font-bold mb-4">Как нас найти</h3>
                <div className="aspect-w-16 aspect-h-9">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
