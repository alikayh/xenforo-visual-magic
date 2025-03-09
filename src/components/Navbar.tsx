
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Button from './Button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Search, Menu, X, BookOpen, Users, Bell, FileText } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'تالارها', icon: <BookOpen className="h-4 w-4 ml-1.5" />, href: '/' },
    { name: 'جدیدترین‌ها', icon: <Bell className="h-4 w-4 ml-1.5" />, href: '/' },
    { name: 'کاربران', icon: <Users className="h-4 w-4 ml-1.5" />, href: '/' },
    { name: 'منابع', icon: <FileText className="h-4 w-4 ml-1.5" />, href: '/' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 py-4',
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/74f8e3e3-3366-4e57-b48e-b84762133d2c.png" 
              alt="راشا" 
              className="h-12 w-auto object-contain animate-fade-in"
            />
          </Link>
        </div>

        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6 mx-4 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200 underline-animate px-1 py-2 text-sm font-medium rtl:flex-row-reverse"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="جستجو..."
              className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 px-4 py-2 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200"
              dir="rtl"
            />
            <Search className="h-4 w-4 text-gray-500 absolute right-3" />
          </div>
          
          <Button variant="gradient" size="sm" className="rounded-full shadow-md hover:shadow-lg">
            ثبت نام
          </Button>
          
          {isMobile && (
            <button
              className="p-2 text-gray-700 hover:text-primary focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-20 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4 p-4">
            <div className="relative flex items-center mb-4">
              <input
                type="text"
                placeholder="جستجو..."
                className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 px-4 py-2 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200"
                dir="rtl"
              />
              <Search className="h-4 w-4 text-gray-500 absolute right-3" />
            </div>
            
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center text-gray-700 hover:text-primary p-3 rounded-lg transition-colors duration-200 rtl:flex-row-reverse"
                onClick={() => setMenuOpen(false)}
              >
                {item.icon}
                <span className="text-lg font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
