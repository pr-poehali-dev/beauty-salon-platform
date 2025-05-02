
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const formSchema = z.object({
  date: z.date({
    required_error: "Выберите дату",
  }),
  time: z.string({
    required_error: "Выберите время",
  }),
  service: z.string({
    required_error: "Выберите услугу",
  }),
  name: z.string().min(2, {
    message: "Имя должно содержать минимум 2 символа",
  }),
  phone: z.string().min(10, {
    message: "Введите корректный номер телефона",
  }),
  email: z.string().email({
    message: "Введите корректный email адрес",
  }),
  comments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

// Временные данные для примера
const services = [
  { id: '1', name: 'Стрижка женская', duration: 60, price: 2500 },
  { id: '2', name: 'Стрижка мужская', duration: 45, price: 1800 },
  { id: '3', name: 'Окрашивание волос', duration: 120, price: 4500 },
  { id: '4', name: 'Маникюр', duration: 60, price: 1500 },
  { id: '5', name: 'Педикюр', duration: 90, price: 2000 },
  { id: '6', name: 'Уход за лицом', duration: 90, price: 3500 },
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
];

interface AppointmentFormProps {
  onSubmit?: (data: FormValues) => void;
  initialDate?: Date;
  isAdmin?: boolean;
}

const AppointmentForm = ({ onSubmit, initialDate = new Date(), isAdmin = false }: AppointmentFormProps) => {
  const [selectedService, setSelectedService] = useState<any>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: initialDate,
      comments: '',
    },
  });

  const handleFormSubmit = (data: FormValues) => {
    if (onSubmit) {
      onSubmit(data);
    } else {
      // Для тестирования
      console.log('Отправка формы:', data);
      alert('Запись успешно создана!');
      form.reset();
    }
  };

  const handleServiceChange = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    setSelectedService(service);
    form.setValue('service', serviceId);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-playfair font-bold mb-6">
        {isAdmin ? 'Новая запись' : 'Запись на прием'}
      </h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Дата */}
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Дата</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={`w-full pl-3 text-left font-normal ${!field.value ? "text-muted-foreground" : ""}`}
                        >
                          {field.value ? (
                            format(field.value, "PPP", { locale: ru })
                          ) : (
                            <span>Выберите дату</span>
                          )}
                          <Icon name="Calendar" className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus
                        locale={ru}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Время */}
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Время</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Услуга */}
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Услуга</FormLabel>
                <Select onValueChange={(value) => handleServiceChange(value)} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name} - {service.price} ₽
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {selectedService && (
            <div className="rounded-md bg-beauty-light p-3 text-sm">
              <div className="flex justify-between">
                <span>Продолжительность:</span>
                <span className="font-medium">{selectedService.duration} мин</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Стоимость:</span>
                <span className="font-medium">{selectedService.price} ₽</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Имя */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите ваше имя" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Телефон */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Телефон</FormLabel>
                  <FormControl>
                    <Input placeholder="+7 (___) ___-__-__" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Комментарии */}
          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Комментарии</FormLabel>
                <FormControl>
                  <Input placeholder="Дополнительная информация" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-beauty-accent hover:bg-beauty-dark text-white"
          >
            {isAdmin ? 'Создать запись' : 'Записаться на прием'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AppointmentForm;
