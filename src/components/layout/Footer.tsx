import { Link } from 'react-router-dom';
import { Twitter, Instagram, Youtube, Facebook, Twitch, Globe, Home, Layers, Search, Settings } from 'lucide-react';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-8 overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:mr-60">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          <div className='text-center md:text-left'>
            <Logo className="h-10 w-auto mb-4 flex space-x-4 items-center justify-center md:justify-start" />
            <p className="text-gray-400 text-sm mb-4">
              The future of live streaming is here. Connect, create, and share your world with Castify.
            </p>
            <div className="flex space-x-4 items-center justify-center md:justify-start">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition">
                <Twitch className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className='text-center md:text-left'>
            <h3 className="text-white font-semibold mb-4">Main Navigation</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-purple-400 transition flex items-center">
                  <Home className="h-4 w-4 mr-1" /> Home
                </Link>
              </li>
              <li>
                <Link to="/browse" className="hover:text-purple-400 transition flex items-center">
                  <Layers className="h-4 w-4 mr-1" /> Browse
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-purple-400 transition flex items-center">
                  <Search className="h-4 w-4 mr-1" /> Search
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-purple-400 transition flex items-center">
                  <Settings className="h-4 w-4 mr-1" /> Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div className='text-center md:text-left'>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/help" className="hover:text-purple-400 transition">Help Center</Link></li>
              <li><Link to="/community" className="hover:text-purple-400 transition">Community Guidelines</Link></li>
              <li><Link to="/creators" className="hover:text-purple-400 transition">Creator Resources</Link></li>
              <li><Link to="/developers" className="hover:text-purple-400 transition">Developers</Link></li>
              <li><Link to="/advertise" className="hover:text-purple-400 transition">Advertise</Link></li>
            </ul>
          </div>
          
          <div className='text-center md:text-left'>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/terms" className="hover:text-purple-400 transition">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-purple-400 transition">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-purple-400 transition">Cookie Policy</Link></li>
              <li><Link to="/dmca" className="hover:text-purple-400 transition">DMCA Guidelines</Link></li>
              <li><Link to="/accessibility" className="hover:text-purple-400 transition">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center">
          <p className="text-gray-500 text-sm md:mr-20">
            © 2025 Castify, Inc. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <Globe className="h-4 w-4 text-gray-500 mr-2" />
            <select 
              className="bg-gray-800 text-gray-400 text-sm border border-gray-700 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-purple-500"
            >
              <option value="en-US">English (US)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
