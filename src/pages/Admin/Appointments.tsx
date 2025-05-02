
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import AppointmentCalendar from '@/components/admin/AppointmentCalendar';
import Icon from '@/components/ui/icon';

// Временные данные для примера
const appointmentsList = [
  { id: 1, date: new Date(2025, 4, 5, 10, 0), clientName: 'Анна Смирнова', service: 'Стрижка женская', duration: 60, status: 'confirmed', phone: '+7 (999) 123-45-67' },
  { id: 2, date: new Date(2025, 4, 5, 12, 0), clientName: 'Екатерина Иванова', service: 'Маникюр', duration: 60, status: 'confirmed', phone: '+7 (999) 234-56-78' },
  { id: 3, date: new Date(2025, 4, 6, 14, 0), clientName: 'Михаил Петров', service: 'Стрижка мужская', duration: 45, status: 'confirmed', phone: '+7 (999) 345-67-89' },
  { id: 4, date: new Date(2025, 4, 7, 11, 0), clientName: 'Ольга Козлова', service: 'Окрашивание волос', duration: 120, status: 'confirmed', phone: '+7 (999) 456-78-90' },
  { id: 5, date: new Date(2025, 4, 10, 15, 0), clientName: 'Дарья Соколова', service: 'Уход за лицом', duration: 90, status: 'pending', phone: '+7 (999) 567-89-01' }
];

const Appointments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredAppointments = appointmentsList.filter(
    (appointment) => {
      const matchesSearch = appointment.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            appointment.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            appointment.phone.includes(searchTerm);
      const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    }
  );

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold font-playfair">Управление записями</h1>
          <p className="text-gray-500">Просмотр и управление записями клиентов</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Icon name="FileText" size={16} className="mr-2" />
            Экспорт
          </Button>
          <Button className="bg-beauty-accent hover:bg-beauty-dark text-white">
            <Icon name="Plus" size={16} className="mr-2" />
            Новая запись
          </Button>
        </div>
      </div>

      <Tabs defaultValue="calendar" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="calendar">Календарь</TabsTrigger>
          <TabsTrigger value="list">Список</TabsTrigger>
        </TabsList>
        
        <TabsContent value="calendar">
          <AppointmentCalendar />
        </TabsContent>
        
        <TabsContent value="list">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Все записи</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div className="relative w-full md:w-1/3">
                  <Input
                    placeholder="Поиск по имени, услуге или телефону"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                  <Icon 
                    name="Search" 
                    size={18} 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  />
                </div>
                <div className="w-full md:w-1/4">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Фильтр по статусу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все статусы</SelectItem>
                      <SelectItem value="confirmed">Подтверждено</SelectItem>
                      <SelectItem value="pending">Ожидает</SelectItem>
                      <SelectItem value="cancelled">Отменено</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Дата и время</th>
                      <th className="text-left py-3 px-4 font-medium">Клиент</th>
                      <th className="text-left py-3 px-4 font-medium">Услуга</th>
                      <th className="text-left py-3 px-4 font-medium">Статус</th>
                      <th className="text-left py-3 px-4 font-medium">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAppointments.length > 0 ? (
                      filteredAppointments.map((appointment) => (
                        <tr key={appointment.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            {new Date(appointment.date).toLocaleDateString('ru-RU')}
                            <div className="text-gray-500 text-sm">
                              {new Date(appointment.date).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            {appointment.clientName}
                            <div className="text-gray-500 text-sm">{appointment.phone}</div>
                          </td>
                          <td className="py-3 px-4">
                            {appointment.service}
                            <div className="text-gray-500 text-sm">{appointment.duration} мин</div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              appointment.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : appointment.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {appointment.status === 'confirmed' 
                                ? 'Подтверждено' 
                                : appointment.status === 'pending'
                                ? 'Ожидает'
                                : 'Отменено'
                              }
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="sm">
                                <Icon name="Edit" size={16} />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Icon name="PhoneCall" size={16} />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Icon name="Trash2" size={16} />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="py-6 text-center text-gray-500">
                          Записи не найдены
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Appointments;
