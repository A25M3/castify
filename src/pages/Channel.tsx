
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Calendar, Bell, Play } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import VideoPlayer from '@/components/streams/VideoPlayer';
import ChatBox from '@/components/streams/ChatBox';
import DonateButton from '@/components/streams/DonateButton';
import { useTranslation } from '@/hooks/useTranslation';
import { streamers } from '@/lib/mock-data';

export default function ChannelPage() {
  const { username } = useParams();
  const { t } = useTranslation();
  const [channel, setChannel] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch streamer by username
    const streamer = streamers.find(s => s.username === username);
    setChannel(streamer);
    setLoading(false);
  }, [username]);

  if (loading) {
    return <div className="container mx-auto px-4 py-12 text-center">{t('loading')}</div>;
  }

  if (!channel) {
    return <div className="container mx-auto px-4 py-12 text-center">{t('error')}</div>;
  }

  const isLive = channel.isLive !== undefined ? channel.isLive : false;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Channel Header */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="flex-shrink-0">
          <Avatar className="h-24 w-24 border-4 border-background">
            <AvatarImage src={channel.avatarUrl} />
            <AvatarFallback>{channel.displayName[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{channel.displayName}</h1>
            {isLive && (
              <Badge className="bg-red-500 hover:bg-red-500/90">
                {t('live')}
              </Badge>
            )}
          </div>
          
          <div className="text-muted-foreground">@{channel.username}</div>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span>{Math.floor(channel.viewers * 0.7)} {t('followers')}</span>
            </div>
            {isLive && (
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{channel.viewers} {t('viewers')}</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-3 pt-2">
            <Button className="bg-castify-purple hover:bg-castify-purple/90">
              <Heart className="mr-2 h-4 w-4" /> Follow
            </Button>
            <Button variant="outline">
              <Bell className="mr-2 h-4 w-4" /> Subscribe
            </Button>
            <DonateButton streamerName={channel.displayName} />
          </div>
        </div>
      </div>
      
      {/* Stream Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <VideoPlayer thumbnailUrl={channel.thumbnail} isLive={isLive} />
          </div>
          
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">{channel.title}</h2>
            <div className="flex items-center gap-2">
              <Badge variant="outline">{channel.game}</Badge>
              {isLive && (
                <span className="text-sm text-muted-foreground">
                  {t('startedStreaming', { time: '2 hours' })}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 h-[500px]">
          <ChatBox />
        </div>
      </div>
      
      {/* Channel Content Tabs */}
      <Tabs defaultValue="videos">
        <TabsList>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos" className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="group relative rounded-lg overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <img 
                  src={channel.thumbnail} 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <span className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/70 text-white text-xs rounded">
                  1:24:38
                </span>
              </div>
              <div className="p-2">
                <h3 className="font-medium truncate">Previous Stream Highlights</h3>
                <p className="text-sm text-muted-foreground">3 days ago • 10K views</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="about" className="py-6">
          <div className="max-w-3xl">
            <h3 className="text-xl font-medium mb-4">About {channel.displayName}</h3>
            <p className="text-muted-foreground mb-6">
              Welcome to my channel! I stream a variety of games and love interacting with my viewers.
              Make sure to follow for stream notifications and join our community!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Schedule</h4>
                <div className="text-sm space-y-1 text-muted-foreground">
                  <p>Monday: 7PM - 11PM</p>
                  <p>Wednesday: 7PM - 11PM</p>
                  <p>Friday: 8PM - 1AM</p>
                  <p>Saturday: 3PM - 8PM</p>
                </div>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Social Media</h4>
                <div className="text-sm space-y-1">
                  <p><a href="#" className="text-castify-purple hover:underline">Twitter</a></p>
                  <p><a href="#" className="text-castify-purple hover:underline">Instagram</a></p>
                  <p><a href="#" className="text-castify-purple hover:underline">Discord</a></p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="schedule" className="py-6">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-lg bg-castify-purple/10 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-castify-purple" />
              </div>
              <div>
                <h3 className="font-medium">Next stream: Friday, Apr 30 at 8:00 PM</h3>
                <p className="text-muted-foreground">Playing: {channel.game}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="p-4 border border-border rounded-lg">
                  <div className="font-medium">Monday, May 3</div>
                  <div className="text-sm text-muted-foreground">7:00 PM - 11:00 PM</div>
                  <div className="mt-2 text-sm">Game: To be announced</div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
