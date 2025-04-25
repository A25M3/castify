
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: number;
  name: string;
  imageUrl: string;
  viewers: number;
}

export default function CategoryCard({ id, name, imageUrl, viewers }: CategoryCardProps) {
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

  return (
    <Link 
      to={`/category/${id}`}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-2 animate-fade-in">
        {/* Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]">
          <img 
            src={imageUrl} 
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`} 
          />
        </div>
        
        {/* Category info */}
        <div>
          <h3 className="text-sm font-medium line-clamp-1">{name}</h3>
          <p className="text-xs text-muted-foreground">{formatViewerCount(viewers)} viewers</p>
        </div>
      </div>
    </Link>
  );
}
