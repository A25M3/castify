
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Heart, Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'en-US', name: 'English (US)' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'ja', name: 'Japanese (日本語)' },
  { code: 'ko', name: 'Korean (한국어)' },
  { code: 'zh', name: 'Chinese (中文)' }
];

export default function Footer() {
  const year = new Date().getFullYear();

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
            <h4 className="font-medium mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/browse" className="text-muted-foreground hover:text-castify-purple transition">
                  Browse
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-castify-purple transition">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/studio" className="text-muted-foreground hover:text-castify-purple transition">
                  Castify Studio
                </Link>
              </li>
              <li>
                <Link to="/start-streaming" className="text-muted-foreground hover:text-castify-purple transition">
                  Start Streaming
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-castify-purple transition">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-muted-foreground hover:text-castify-purple transition">
                  Safety Center
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
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-castify-purple transition">
                  About
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
            <p>© {year} Castify. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 text-sm justify-center">
            <Link to="/terms" className="text-muted-foreground hover:text-castify-purple transition">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-castify-purple transition">
              Privacy Policy
            </Link>
            <Link to="/cookie-settings" className="text-muted-foreground hover:text-castify-purple transition">
              Cookie Settings
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 gap-2">
                  <Languages size={16} />
                  English (US)
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code}>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-castify-pink" /> by CASTIFY
          </p>
        </div>
      </div>
    </footer>
  );
}
