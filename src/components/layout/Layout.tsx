
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '@/lib/language-context';
import { useEffect } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from './AppSidebar';

export default function Layout() {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    // Set the direction attribute on the document element
    document.documentElement.dir = currentLanguage.direction;
    document.documentElement.lang = currentLanguage.code;
    
    // Add a class to the body for RTL-specific global styles if needed
    if (currentLanguage.direction === 'rtl') {
      document.body.classList.add('rtl-layout');
    } else {
      document.body.classList.remove('rtl-layout');
    }
  }, [currentLanguage]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-grow pt-16">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
