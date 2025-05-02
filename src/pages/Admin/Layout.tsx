
import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const menuItems = [
    { path: '/admin', icon: 'LayoutDashboard', label: 'Дашборд' },
    { path: '/admin/appointments', icon: 'Calendar', label: 'Записи' },
    { path: '/admin/clients', icon: 'Users', label: 'Клиенты' },
    { path: '/admin/services', icon: 'Scissors', label: 'Услуги' },
    { path: '/admin/products', icon: 'ShoppingBag', label: 'Товары' },
    { path: '/admin/staff', icon: 'UserCog', label: 'Персонал' },
    { path: '/admin/marketing', icon: 'TrendingUp', label: 'Маркетинг' },
    { path: '/admin/settings', icon: 'Settings', label: 'Настройки' }
  ];

  return (
    <SidebarProvider defaultOpen={!isCollapsed} onOpenChange={setIsCollapsed}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar>
          <SidebarHeader className="p-4 pb-2">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-xl font-playfair font-bold text-beauty-dark">
                  Bella<span className="text-beauty-accent">Beauty</span>
                </span>
              </Link>
              <SidebarTrigger />
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.path)}
                    tooltip={item.label}
                  >
                    <Link to={item.path} className="flex items-center">
                      <Icon name={item.icon} size={20} className="mr-3" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="px-3 py-2">
              <div className="flex items-center px-2 py-2 rounded-lg bg-beauty-light">
                <div className="shrink-0 h-9 w-9 rounded-full bg-beauty-accent flex items-center justify-center text-white">
                  <Icon name="User" size={18} />
                </div>
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium truncate">Администратор</p>
                  <p className="text-xs text-muted-foreground truncate">admin@bellabeauty.ru</p>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                  <Icon name="LogOut" size={18} />
                </Button>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <div className="flex flex-col h-full">
            {/* Верхняя панель */}
            <header className="border-b h-16 px-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <SidebarTrigger className="md:hidden" />
                <h1 className="text-lg font-semibold hidden md:block">Административная панель</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Icon name="Bell" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="MessageSquare" size={20} />
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    На сайт
                  </Link>
                </Button>
              </div>
            </header>
            
            {/* Основной контент */}
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
