
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Компонент статистического счетчика
const StatCard = ({ title, value, icon, trend, trendValue, cardStyles }: any) => (
  <Card className={cardStyles}>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {trend && (
            <p className={`text-xs flex items-center mt-1 ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              <Icon name={trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={12} className="mr-1" />
              <span>{trendValue} от прошлого месяца</span>
            </p>
          )}
        </div>
        <div className="p-3 rounded-full bg-beauty-light">
          <Icon name={icon} size={24} className="text-beauty-accent" />
        </div>
      </div>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  // Временные данные для примера
  const upcomingAppointments = [
    { id: 1, time: '10:00', clientName: 'Анна Смирнова', service: 'Стрижка женская' },
    { id: 2, time: '12:30', clientName: 'Екатерина Иванова', service: 'Маникюр' },
    { id: 3, time: '15:00', clientName: 'Михаил Петров', service: 'Стрижка мужская' }
  ];

  const recentClients = [
    { id: 1, name: 'Анна Смирнова', visits: 5, lastVisit: '25.04.2025', spent: '12 500 ₽' },
    { id: 2, name: 'Екатерина Иванова', visits: 3, lastVisit: '27.04.2025', spent: '8 000 ₽' },
    { id: 3, name: 'Михаил Петров', visits: 2, lastVisit: '01.05.2025', spent: '4 500 ₽' },
    { id: 4, name: 'Ольга Козлова', visits: 1, lastVisit: '02.05.2025', spent: '2 500 ₽' }
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold font-playfair">Панель управления</h1>
          <p className="text-gray-500">Добро пожаловать в административную панель салона BellaBeauty</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline">
            <Icon name="FileText" size={16} className="mr-2" />
            Отчеты
          </Button>
          <Button className="bg-beauty-accent hover:bg-beauty-dark text-white">
            <Icon name="Calendar" size={16} className="mr-2" />
            Записи на сегодня
          </Button>
        </div>
      </div>

      {/* Карточки со статистикой */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Всего записей"
          value="124"
          icon="Calendar"
          trend="up"
          trendValue="+12%"
          cardStyles="border-l-4 border-l-blue-500"
        />
        <StatCard 
          title="Новых клиентов"
          value="28"
          icon="UserPlus"
          trend="up"
          trendValue="+5%"
          cardStyles="border-l-4 border-l-green-500"
        />
        <StatCard 
          title="Выручка за месяц"
          value="285 000 ₽"
          icon="DollarSign"
          trend="up"
          trendValue="+8%"
          cardStyles="border-l-4 border-l-beauty-accent"
        />
        <StatCard 
          title="Отмены"
          value="4"
          icon="AlertCircle"
          trend="down"
          trendValue="-15%"
          cardStyles="border-l-4 border-l-yellow-500"
        />
      </div>

      {/* Основное содержимое */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Левая колонка */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Аналитика записей</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="week">
                <TabsList className="mb-4">
                  <TabsTrigger value="week">Неделя</TabsTrigger>
                  <TabsTrigger value="month">Месяц</TabsTrigger>
                  <TabsTrigger value="year">Год</TabsTrigger>
                </TabsList>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-md">
                  <p className="text-gray-500">График записей за выбранный период</p>
                </div>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Недавние клиенты</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Клиент</th>
                      <th className="text-left py-3 px-4 font-medium">Визиты</th>
                      <th className="text-left py-3 px-4 font-medium">Последний визит</th>
                      <th className="text-left py-3 px-4 font-medium">Потрачено</th>
                      <th className="text-left py-3 px-4 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentClients.map((client) => (
                      <tr key={client.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{client.name}</td>
                        <td className="py-3 px-4">{client.visits}</td>
                        <td className="py-3 px-4">{client.lastVisit}</td>
                        <td className="py-3 px-4">{client.spent}</td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm">
                            <Icon name="MoreHorizontal" size={16} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" size="sm">
                  Показать все
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Правая колонка */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Записи на сегодня</CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-3">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-start p-3 border rounded-md hover:bg-gray-50">
                      <div className="p-2 bg-beauty-light rounded-md mr-3">
                        <Icon name="Clock" size={16} className="text-beauty-accent" />
                      </div>
                      <div>
                        <p className="font-medium">{appointment.time} - {appointment.clientName}</p>
                        <p className="text-sm text-gray-600">{appointment.service}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-2">
                    Все записи
                  </Button>
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  <p>Нет записей на сегодня</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Популярные услуги</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <p className="text-sm font-medium">Стрижка женская</p>
                    <p className="text-sm font-medium">40%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-beauty-accent h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <p className="text-sm font-medium">Маникюр</p>
                    <p className="text-sm font-medium">30%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-beauty-accent h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <p className="text-sm font-medium">Окрашивание волос</p>
                    <p className="text-sm font-medium">20%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-beauty-accent h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <p className="text-sm font-medium">Уход за лицом</p>
                    <p className="text-sm font-medium">10%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-beauty-accent h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Быстрые действия</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Запись
                </Button>
                <Button variant="outline" className="justify-start">
                  <Icon name="UserPlus" size={16} className="mr-2" />
                  Клиент
                </Button>
                <Button variant="outline" className="justify-start">
                  <Icon name="ShoppingBag" size={16} className="mr-2" />
                  Продажа
                </Button>
                <Button variant="outline" className="justify-start">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  Сообщение
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
