
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTranslation } from '@/hooks/useTranslation';

interface StreamCardProps {
  id: string;  // Changed from number to string
  username: string;
  displayName?: string;
  title: string;
  game: string;
  thumbnailUrl: string;
  avatarUrl: string;
  viewers: number;
}

const StreamCard = ({
  id,
  username,
  displayName,
  title,
  game,
  thumbnailUrl,
  avatarUrl,
  viewers,
}: StreamCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="group">
      <Link to={`/channel/${username}`} className="block relative aspect-video overflow-hidden rounded-lg mb-2">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-0.5 rounded">
          {t('viewers', { count: viewers })}
        </div>
      </Link>

      <div className="flex gap-2">
        <Avatar className="h-8 w-8 flex-shrink-0">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {displayName || username}
          </p>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {game}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StreamCard;
