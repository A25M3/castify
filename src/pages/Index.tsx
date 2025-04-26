
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import StreamCard from '@/components/streams/StreamCard';
import CategoryCard from '@/components/streams/CategoryCard';
import VideoPlayer from '@/components/streams/VideoPlayer';
import { useTranslation } from '@/hooks/useTranslation';
import { 
  categories, 
  featuredStreamers, 
  trendingStreamers, 
  recommendedStreamers 
} from '@/lib/mock-data';

const HomePage = () => {
  const { t } = useTranslation();
  // Pick a featured streamer for the hero section
  const heroStreamer = featuredStreamers[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {heroStreamer && (
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent z-10" />
          
          <div className="relative z-20 container mx-auto px-4 pt-8 pb-16 lg:pt-16 lg:pb-24 flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
                {t('welcomeToCastify')}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-foreground/80">
                {t('discoverStreamers')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-castify-purple hover:bg-castify-purple/90">
                  <Link to="/browse">
                    {t('browseStreams')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/signup">
                    {t('becomeStreamer')}
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl neon-border">
                <VideoPlayer 
                  thumbnailUrl={heroStreamer.thumbnail} 
                  isLive 
                />
              </div>
              
              <div className="mt-4 flex items-center">
                <Link to={`/channel/${heroStreamer.username}`} className="font-medium text-lg hover:text-castify-purple transition">{heroStreamer.title}</Link>
                <span className="mx-2">•</span>
                <Link to={`/channel/${heroStreamer.username}`} className="text-muted-foreground hover:text-castify-purple transition">{heroStreamer.username}</Link>
                <span className="mx-2">•</span>
                <Link to={`/category/${heroStreamer.gameId}`} className="text-muted-foreground hover:text-castify-purple transition">{heroStreamer.game}</Link>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Trending Streams */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">{t('trendingStreams')}</h2>
            <Link to="/browse" className="text-castify-purple hover:underline flex items-center gap-1">
              {t('seeAll')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingStreamers.slice(0, 4).map(streamer => (
              <StreamCard
                key={streamer.id}
                id={streamer.id}
                username={streamer.username}
                displayName={streamer.displayName}
                title={streamer.title}
                game={streamer.game}
                thumbnailUrl={streamer.thumbnail}
                avatarUrl={streamer.avatarUrl}
                viewers={streamer.viewers}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">{t('popularCategories')}</h2>
            <Link to="/categories" className="text-castify-purple hover:underline flex items-center gap-1">
              {t('viewAll')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.slice(0, 6).map(category => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                imageUrl={category.imageUrl}
                viewers={category.viewers}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Recommended Streams */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">{t('recommendedStreams')}</h2>
            <Link to="/browse" className="text-castify-purple hover:underline flex items-center gap-1">
              {t('seeMore')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendedStreamers.slice(0, 8).map(streamer => (
              <StreamCard
                key={streamer.id}
                id={streamer.id}
                username={streamer.username}
                displayName={streamer.displayName}
                title={streamer.title}
                game={streamer.game}
                thumbnailUrl={streamer.thumbnail}
                avatarUrl={streamer.avatarUrl}
                viewers={streamer.viewers}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Community CTA */}
      <section className="py-16 bg-gradient-to-r from-castify-purple-darkest to-castify-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {t('joinCommunity')}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            {t('joinCommunityDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-castify-purple-dark hover:bg-white/90">
              <Link to="/signup">
                {t('signUpNow')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/about">
                {t('learnMore')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
