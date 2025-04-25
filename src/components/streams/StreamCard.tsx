
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users } from 'lucide-react';

interface StreamCardProps {
  id: number;
  username: string;
  displayName?: string;
  title: string;
  game: string;
  thumbnailUrl: string;
  avatarUrl: string;
  viewers: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function StreamCard({ 
  id, 
  username, 
  displayName, 
  title, 
  game, 
  thumbnailUrl, 
  avatarUrl, 
  viewers,
  size = 'md' 
}: StreamCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const formatViewerCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    } else {
      return count.toString();
    }
  };
  
  const sizeClasses = {
    sm: 'w-full',
    md: 'w-full',
    lg: 'w-full md:col-span-2',
  };
  
  const imageClasses = {
    sm: 'h-36',
    md: 'h-44',
    lg: 'h-64 md:h-80',
  };

  return (
    <div className={`group animate-fade-in ${sizeClasses[size]}`}>
      <Link to={`/channel/${username}`}>
        <div className="relative w-full" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Thumbnail */}
          <div className={`relative rounded-lg overflow-hidden ${imageClasses[size]} transition-transform duration-300 group-hover:scale-[1.02]`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <img 
              src={thumbnailUrl} 
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`} 
            />
            
            {/* Live indicator */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20">
              <div className="live-indicator">
                LIVE
              </div>
            </div>
            
            {/* Viewer count */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-medium text-white z-20 bg-black/60 px-2 py-1 rounded-md">
              <Users size={14} />
              <span>{formatViewerCount(viewers)} viewers</span>
            </div>
          </div>
          
          {/* Stream info */}
          <div className="flex mt-3 space-x-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold line-clamp-1">{title}</h3>
              <p className="text-xs text-muted-foreground">{displayName || username}</p>
              <p className="text-xs text-muted-foreground">{game}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
