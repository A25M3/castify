import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, ChevronDown, User, LogOut, Settings, Video, Home, Layers } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/lib/auth-context';
import { categories } from '@/lib/mock-data';
import { useLanguage } from '@/hooks/useLanguage';

export default function Header() {
  const { t } = useTranslation();
  const { isAuthenticated, user, logout } = useAuth();
  const { currentLanguage } = useLanguage();
  const isRtl = currentLanguage.direction === 'rtl';
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredCategories = categories
    .filter(category => 
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 5);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8 rtl:space-x-reverse">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
              Castify
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <Link to="/" className="text-foreground/90 hover:text-castify-purple transition flex items-center gap-1.5">
              <Home size={18} className={isRtl ? "ml-1.5" : "mr-1.5"} />
              <span>{t('home')}</span>
            </Link>
            <Link to="/browse" className="text-foreground/90 hover:text-castify-purple transition flex items-center gap-1.5">
              <Layers size={18} className={isRtl ? "ml-1.5" : "mr-1.5"} />
              <span>{t('browse')}</span>
            </Link>
            {isAuthenticated && (
              <Link to="/following" className="text-foreground/90 hover:text-castify-purple transition flex items-center gap-1.5">
                <Video size={18} className={isRtl ? "ml-1.5" : "mr-1.5"} />
                <span>{t('following')}</span>
              </Link>
            )}
          </nav>
        </div>

        <div className="flex-1 max-w-xl mx-4 relative" ref={searchRef}>
          <div className="relative">
            <Search className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground`} />
            <Input
              type="text"
              placeholder={t('search')}
              className={`${isRtl ? 'pr-10' : 'pl-10'} bg-muted border-muted rounded-full`}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value) {
                  setShowSearchResults(true);
                } else {
                  setShowSearchResults(false);
                }
              }}
              onFocus={() => {
                if (searchQuery) setShowSearchResults(true);
              }}
            />
          </div>
          
          {showSearchResults && (
            <div className="absolute top-full mt-2 w-full rounded-md bg-background border border-border shadow-lg z-50 animate-fade-in">
              {filteredCategories.length > 0 ? (
                <div className="py-2">
                  <p className="px-4 py-1 text-xs text-muted-foreground">{t('categories')}</p>
                  {filteredCategories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.id}`}
                      className="flex items-center px-4 py-2 hover:bg-muted transition-colors"
                      onClick={() => setShowSearchResults(false)}
                    >
                      <img 
                        src={category.imageUrl} 
                        alt={category.name} 
                        className={`w-8 h-8 rounded object-cover ${isRtl ? 'ml-3' : 'mr-3'}`}
                      />
                      <div>
                        <p className="font-medium">{category.name}</p>
                        <p className="text-xs text-muted-foreground">{category.viewers.toLocaleString()} viewers</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-muted-foreground">
                  {t('noResults')}
                </div>
              )}
              
              <div className="p-2 border-t border-border">
                <Link
                  to={`/search?q=${encodeURIComponent(searchQuery)}`}
                  className="flex items-center justify-center text-sm text-castify-purple hover:underline p-2"
                  onClick={() => setShowSearchResults(false)}
                >
                  {t('searchFor').replace('{query}', searchQuery)}
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {isAuthenticated ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className={`absolute top-1 ${isRtl ? 'left-1' : 'right-1'} h-2 w-2 rounded-full bg-castify-pink`}></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={isRtl ? "start" : "end"} className="w-80">
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{t('notifications')}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-2 hover:bg-muted rounded-md cursor-pointer">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src="https://api.dicebear.com/6.x/avataaars/svg?seed=Felix" />
                          <AvatarFallback>FX</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">StreamerX</span> {t('justWentLive')}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t('minutesAgo', { count: '20' })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-2 hover:bg-muted rounded-md cursor-pointer">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src="https://api.dicebear.com/6.x/avataaars/svg?seed=Alice" />
                          <AvatarFallback>AL</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">GamingPro</span> {t('followed')}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t('hoursAgo', { count: '2' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.avatarUrl} />
                      <AvatarFallback>{user?.displayName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline-block font-medium">{user?.displayName}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={isRtl ? "start" : "end"} className="w-56">
                  <Link to={`/channel/${user?.username}`}>
                    <DropdownMenuItem>
                      <User className={`h-4 w-4 ${isRtl ? 'ml-2' : 'mr-2'}`} /> {t('myChannel')}
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/dashboard">
                    <DropdownMenuItem>
                      <Video className={`h-4 w-4 ${isRtl ? 'ml-2' : 'mr-2'}`} /> {t('creatorDashboard')}
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/settings">
                    <DropdownMenuItem>
                      <Settings className={`h-4 w-4 ${isRtl ? 'ml-2' : 'mr-2'}`} /> {t('settings')}
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className={`h-4 w-4 ${isRtl ? 'ml-2' : 'mr-2'}`} /> {t('logout')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Link to="/login">
                <Button variant="ghost" size="sm">{t('login')}</Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" variant="default" className="bg-castify-purple hover:bg-castify-purple/90">
                  {t('signup')}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
