
import { useState } from 'react';
import { format, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addDays } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import AppointmentForm from '@/components/booking/AppointmentForm';
import Icon from '@/components/ui/icon';

// Временные данные для примера
const appointments = [
  { id: 1, date: new Date(2025, 4, 5, 10, 0), clientName: 'Анна Смирнова', service: 'Стрижка женская', duration: 60, status: 'confirmed' },
  { id: 2, date: new Date(2025, 4, 5, 12, 0), clientName: 'Екатерина Иванова', service: 'Маникюр', duration: 60, status: 'confirmed' },
  { id: 3, date: new Date(2025, 4, 6, 14, 0), clientName: 'Михаил Петров', service: 'Стрижка мужская', duration: 45, status: 'confirmed' },
  { id: 4, date: new Date(2025, 4, 7, 11, 0), clientName: 'Ольга Козлова', service: 'Окрашивание волос', duration: 120, status: 'confirmed' },
  { id: 5, date: new Date(2025, 4, 10, 15, 0), clientName: 'Дарья Соколова', service: 'Уход за лицом', duration: 90, status: 'pending' }
];

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const AppointmentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [isNewAppointmentOpen, setIsNewAppointmentOpen] = useState(false);
  const [isViewAppointmentOpen, setIsViewAppointmentOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Adjust the weekdays starting from Monday (EU style)
  const startDate = addDays(monthStart, -(getDay(monthStart) || 7) + 1);
  const endDate = addDays(monthEnd, 7 - (getDay(monthEnd) || 7));
  
  const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

  const getAppointmentsForDay = (day: Date) => {
    return appointments.filter(appointment => isSameDay(day, appointment.date));
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const goToToday = () => {
    setCurrentMonth(new Date());
    setSelectedDate(new Date());
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleNewAppointment = () => {
    setIsNewAppointmentOpen(true);
  };

  const handleViewAppointment = (appointment: any) => {
    setSelectedAppointment(appointment);
    setIsViewAppointmentOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <h2 className="text-2xl font-playfair font-bold">
            {format(currentMonth, 'LLLL yyyy', { locale: ru })}
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPreviousMonth}
          >
            <Icon name="ChevronLeft" size={18} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goToToday}
          >
            Сегодня
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goToNextMonth}
          >
            <Icon name="ChevronRight" size={18} />
          </Button>
          <Button
            className="hidden md:flex bg-beauty-accent hover:bg-beauty-dark text-white ml-4"
            onClick={handleNewAppointment}
          >
            <Icon name="Plus" size={18} className="mr-2" />
            Новая запись
          </Button>
        </div>
      </div>

      <Button
        className="md:hidden w-full bg-beauty-accent hover:bg-beauty-dark text-white"
        onClick={handleNewAppointment}
      >
        <Icon name="Plus" size={18} className="mr-2" />
        Новая запись
      </Button>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="grid grid-cols-7">
          {weekDays.map((day, idx) => (
            <div
              key={idx}
              className="py-3 text-center text-sm font-semibold border-b bg-beauty-light"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 h-[600px]">
          {calendarDays.map((day, idx) => {
            const dayAppointments = getAppointmentsForDay(day);
            const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
            const isToday = isSameDay(day, new Date());
            const isSelected = isSameDay(day, selectedDate);
            
            return (
              <div
                key={idx}
                className={`border min-h-[100px] p-1 relative ${
                  isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                } ${
                  isToday ? 'border-beauty-accent' : ''
                } ${
                  isSelected ? 'bg-beauty-light/50' : ''
                }`}
                onClick={() => handleDateSelect(day)}
              >
                <div className={`text-right mb-1 font-medium ${
                  isCurrentMonth ? '' : 'text-gray-400'
                } ${
                  isToday ? 'bg-beauty-accent text-white rounded-full w-6 h-6 flex items-center justify-center ml-auto' : ''
                }`}>
                  {format(day, 'd')}
                </div>
                <div className="space-y-1">
                  {dayAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className={`text-xs p-1 rounded truncate cursor-pointer ${
                        appointment.status === 'confirmed' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewAppointment(appointment);
                      }}
                    >
                      <div className="flex items-center space-x-1">
                        <span>{format(appointment.date, 'HH:mm')}</span>
                        <span>•</span>
                        <span className="truncate">{appointment.clientName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Детали записей на выбранный день */}
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">
          Записи на {format(selectedDate, 'PPP', { locale: ru })}
        </h3>
        <div className="space-y-3">
          {getAppointmentsForDay(selectedDate).length > 0 ? (
            getAppointmentsForDay(selectedDate).map((appointment) => (
              <div 
                key={appointment.id}
                className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer flex justify-between items-center"
                onClick={() => handleViewAppointment(appointment)}
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{format(appointment.date, 'HH:mm')}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      appointment.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.status === 'confirmed' ? 'Подтверждено' : 'Ожидает'}
                    </span>
                  </div>
                  <p className="font-medium">{appointment.clientName}</p>
                  <p className="text-sm text-gray-600">{appointment.service}</p>
                </div>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm">
                    <Icon name="Edit" size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-gray-500">
              <p>Нет записей на выбранную дату</p>
              <Button 
                variant="outline" 
                className="mt-2"
                onClick={handleNewAppointment}
              >
                <Icon name="Plus" size={16} className="mr-2" />
                Создать запись
              </Button>
            </div>
          )}
        </div>
      </Card>

      {/* Диалог для создания новой записи */}
      <Dialog open={isNewAppointmentOpen} onOpenChange={setIsNewAppointmentOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Новая запись</DialogTitle>
          </DialogHeader>
          <AppointmentForm 
            initialDate={selectedDate} 
            isAdmin={true}
            onSubmit={(data) => {
              console.log(data);
              setIsNewAppointmentOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>

      {/* Диалог для просмотра записи */}
      <Dialog open={isViewAppointmentOpen} onOpenChange={setIsViewAppointmentOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Детали записи</DialogTitle>
          </DialogHeader>
          {selectedAppointment && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-sm text-gray-500">Дата</p>
                  <p className="font-medium">{format(selectedAppointment.date, 'PPP', { locale: ru })}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Время</p>
                  <p className="font-medium">{format(selectedAppointment.date, 'HH:mm')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Клиент</p>
                  <p className="font-medium">{selectedAppointment.clientName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Статус</p>
                  <p className={`inline-flex px-2 py-0.5 rounded-full text-xs ${
                    selectedAppointment.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {selectedAppointment.status === 'confirmed' ? 'Подтверждено' : 'Ожидает'}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Услуга</p>
                <p className="font-medium">{selectedAppointment.service}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Продолжительность</p>
                <p className="font-medium">{selectedAppointment.duration} мин</p>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsViewAppointmentOpen(false)}>
                  Закрыть
                </Button>
                <Button className="bg-beauty-accent hover:bg-beauty-dark text-white">
                  Редактировать
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppointmentCalendar;
