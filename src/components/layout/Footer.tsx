import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Heart, Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useLanguage, languages } from '@/lib/language-context';
import { useTranslation } from '@/hooks/useTranslation';

export default function Footer() {
  const year = new Date().getFullYear();
  const { currentLanguage, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
              Castify
            </h3>
            <p className="text-muted-foreground">
              The next generation streaming platform for creators and audiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-castify-purple transition">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-castify-purple transition">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-castify-purple transition">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-castify-purple transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t("platform")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/browse" className="text-muted-foreground hover:text-castify-purple transition">
                  {t("browse")}
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-castify-purple transition">
                  {t("categories")}
                </Link>
              </li>
              <li>
                <Link to="/studio" className="text-muted-foreground hover:text-castify-purple transition">
                  Castify Studio
                </Link>
              </li>
              <li>
                <Link to="/start-streaming" className="text-muted-foreground hover:text-castify-purple transition">
                  {t("startStreaming")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t("resources")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-castify-purple transition">
                  {t("supportCenter")}
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-muted-foreground hover:text-castify-purple transition">
                  {t("safetyCenter")}
                </Link>
              </li>
              <li>
                <Link to="/creators" className="text-muted-foreground hover:text-castify-purple transition">
                  Creator Resources
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-muted-foreground hover:text-castify-purple transition">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t("company")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-castify-purple transition">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-castify-purple transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-muted-foreground hover:text-castify-purple transition">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/brand" className="text-muted-foreground hover:text-castify-purple transition">
                  Brand
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            <p>© {year} Castify. {t("allRightsReserved")}</p>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 text-sm justify-center">
            <Link to="/terms" className="text-muted-foreground hover:text-castify-purple transition">
              {t("terms")}
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-castify-purple transition">
              {t("privacy")}
            </Link>
            <Link to="/cookie-settings" className="text-muted-foreground hover:text-castify-purple transition">
              {t("cookies")}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 gap-2">
                  <Languages size={16} />
                  {currentLanguage.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => setLanguage(lang)}
                    className={currentLanguage.code === lang.code ? "bg-muted" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            {t("madeWith")} <Heart size={12} className="text-castify-pink" /> by CASTIFY
          </p>
        </div>
      </div>
    </footer>
  );
}
