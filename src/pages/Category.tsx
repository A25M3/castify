
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StreamCard from '@/components/streams/StreamCard';
import { useTranslation } from '@/hooks/useTranslation';
import { categories, streamers } from '@/lib/mock-data';

export default function CategoryPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [category, setCategory] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [liveStreams, setLiveStreams] = useState<any[]>([]);

  useEffect(() => {
    // Fetch category by id
    const foundCategory = categories.find(c => c.id === id);
    setCategory(foundCategory);
    
    // Get streams for this category
    if (foundCategory) {
      const categoryStreams = streamers
        .filter(streamer => streamer.game?.toLowerCase() === foundCategory.name.toLowerCase())
        .slice(0, 8); // Limit to 8 streams
      
      setLiveStreams(categoryStreams);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="container mx-auto px-4 py-12 text-center">{t('loading')}</div>;
  }

  if (!category) {
    return <div className="container mx-auto px-4 py-12 text-center">{t('error')}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">{category.name}</h1>
        <div className="px-3 py-1 bg-muted rounded-full text-sm">
          {t('viewers', { count: category.viewers })}
        </div>
      </div>
      
      <Tabs defaultValue="streams">
        <TabsList>
          <TabsTrigger value="streams">{t('streams')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="streams" className="py-6">
          {liveStreams.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {liveStreams.map((stream) => (
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
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium mb-2">{t('noLiveStreams')}</h3>
              <p className="text-muted-foreground mb-6">{t('checkBackLater')}</p>
              <Button asChild>
                <a href="/categories">{t('browseCategories')}</a>
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
