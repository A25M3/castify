
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { categories, trendingStreamers } from '@/lib/mock-data';
import CategoryCard from '@/components/streams/CategoryCard';
import StreamCard from '@/components/streams/StreamCard';
import { useState } from 'react';

const BrowsePage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Filter categories based on search query
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Group categories into chunks for display
  function chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }
  
  const categoryRows = chunkArray(filteredCategories, 6);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse</h1>
      
      <Tabs defaultValue="categories" className="mb-8">
        <TabsList>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="streams">Live Streams</TabsTrigger>
        </TabsList>
        
        <TabsContent value="categories" className="pt-6">
          {/* Categories Search */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto md:mx-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search categories"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Categories Grid */}
          {filteredCategories.length > 0 ? (
            <div className="space-y-12">
              {categoryRows.map((row, rowIndex) => (
                <div key={rowIndex}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {row.map(category => (
                      <CategoryCard
                        key={category.id}
                        id={category.id}
                        name={category.name}
                        imageUrl={category.imageUrl}
                        viewers={category.viewers}
                      />
                    ))}
                  </div>
                  
                  {rowIndex < categoryRows.length - 1 && <Separator className="mt-12" />}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-xl font-medium mb-2">No categories found</h2>
              <p className="text-muted-foreground">Try a different search term</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="streams" className="pt-6">
          <div className="space-y-8">
            {/* Featured Streams */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Featured Streams</h2>
                <Link to="/browse" className="text-castify-purple hover:underline flex items-center gap-1">
                  See all <ArrowRight className="h-4 w-4" />
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
            </section>
            
            {/* Category-specific streams */}
            {categories.slice(0, 12).map(category => {
              const categoryStreams = trendingStreamers
                .filter(streamer => streamer.game === category.name)
                .slice(0, 4);
                
              return categoryStreams.length > 0 ? (
                <section key={category.id} className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <Link to={`/category/${category.id}`} className="text-castify-purple hover:underline flex items-center gap-1">
                      See all <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categoryStreams.map(streamer => (
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
                  
                  <Separator className="mt-8" />
                </section>
              ) : null;
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BrowsePage;
