
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Layers,
  ArrowUpDown,
  Filter,
  ArrowDown,
  ArrowUp,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { categories, streamers } from '@/lib/mock-data';
import StreamCard from '@/components/streams/StreamCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const [sortBy, setSortBy] = useState<string>('viewers-desc');
  
  // Find category
  const categoryId = parseInt(id || '0');
  const category = categories.find(c => c.id === categoryId);
  
  // Find related streams
  const relatedStreams = streamers.filter(
    s => s.isLive && s.gameId === categoryId
  );

  // Apply sorting
  const sortedStreams = [...relatedStreams].sort((a, b) => {
    if (sortBy === 'viewers-desc') return b.viewers - a.viewers;
    if (sortBy === 'viewers-asc') return a.viewers - b.viewers;
    if (sortBy === 'recently-started') return 0; // Mock data doesn't include start time
    if (sortBy === 'alphabetical') return a.username.localeCompare(b.username);
    return 0;
  });
  
  // If category doesn't exist, show error
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <p className="text-muted-foreground mb-6">The category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/browse">Browse Categories</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={category.imageUrl} 
            alt={category.name}
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
          <p className="text-muted-foreground mb-4">
            {category.viewers.toLocaleString()} viewers
          </p>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="gap-1.5">
              <Layers className="h-4 w-4" />
              Similar Categories
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-1.5">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All Streams</DropdownMenuItem>
                <DropdownMenuItem>Partner Streams</DropdownMenuItem>
                <DropdownMenuItem>Affiliate Streams</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-1.5">
                  <ArrowUpDown className="h-4 w-4" />
                  Sort: {sortBy === 'viewers-desc' 
                    ? 'Viewers (High to Low)'
                    : sortBy === 'viewers-asc'
                    ? 'Viewers (Low to High)'
                    : sortBy === 'recently-started'
                    ? 'Recently Started'
                    : 'Alphabetical'
                  }
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                  <DropdownMenuRadioItem value="viewers-desc">
                    <ArrowDown className="h-4 w-4 mr-2" /> Viewers (High to Low)
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="viewers-asc">
                    <ArrowUp className="h-4 w-4 mr-2" /> Viewers (Low to High)
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="recently-started">
                    Recently Started
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="alphabetical">
                    Alphabetical
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      {/* Live Channels */}
      <h2 className="text-2xl font-bold mb-6">Live Channels</h2>
      
      {sortedStreams.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedStreams.map(stream => (
            <StreamCard
              key={stream.id}
              id={stream.id}
              username={stream.username}
              displayName={stream.displayName}
              title={stream.title}
              game={stream.game}
              thumbnailUrl={stream.thumbnail}
              avatarUrl={stream.avatarUrl}
              viewers={stream.viewers}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-20 border border-dashed border-border rounded-lg bg-muted/30">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">No live streams at the moment</h3>
            <p className="text-muted-foreground mb-6">
              Check back later or browse other categories
            </p>
            <Button asChild>
              <Link to="/browse">Browse Categories</Link>
            </Button>
          </div>
        </div>
      )}
      
      {/* Recommended Streamers */}
      <h2 className="text-2xl font-bold mt-12 mb-6">Recommended {category.name} Streamers</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {streamers.filter(s => s.gameId === categoryId).slice(0, 6).map(streamer => (
          <Link to={`/channel/${streamer.username}`} key={streamer.id} className="group">
            <div className="text-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition">
              <Avatar className="h-16 w-16 mx-auto group-hover:ring-2 ring-castify-purple transition">
                <AvatarImage src={streamer.avatarUrl} />
                <AvatarFallback>{streamer.username.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium line-clamp-1">{streamer.displayName || streamer.username}</h3>
                <p className="text-sm text-muted-foreground">{streamer.followers.toLocaleString()} followers</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
