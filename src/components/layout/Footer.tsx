
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

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
              <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
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
                <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
                  About Castify Studio
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
                  Start Streaming
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
                  Safety Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
                  Creator Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
                  Brand
                </a>
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
            <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-castify-purple transition">
              Cookie Settings
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8">
                  English (US)
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English (US)</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
                <DropdownMenuItem>日本語</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-castify-pink" /> by Lovable
          </p>
        </div>
      </div>
    </footer>
  );
}
