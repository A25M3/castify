
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share, Bell, Users, Calendar, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { streamers } from '@/lib/mock-data';
import VideoPlayer from '@/components/streams/VideoPlayer';
import ChatBox from '@/components/streams/ChatBox';
import { useAuth } from '@/lib/auth-context';

const ChannelPage = () => {
  const { username } = useParams<{ username: string }>();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // Find streamer data
  const streamer = streamers.find(s => s.username === username);
  
  // Handle follow button
  const handleFollow = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login required",
        description: "You need to login to follow channels",
        variant: "destructive"
      });
      return;
    }
    
    setIsFollowing(!isFollowing);
    toast({
      title: isFollowing ? "Unfollowed" : "Followed",
      description: isFollowing 
        ? `You've unfollowed ${streamer?.displayName || username}`
        : `You're now following ${streamer?.displayName || username}`,
    });
  };
  
  // Handle subscribe button
  const handleSubscribe = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login required",
        description: "You need to login to subscribe to channels",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Subscription",
      description: isSubscribed 
        ? "Subscription management coming soon"
        : "Subscription options coming soon",
    });
  };
  
  // If streamer doesn't exist, show error
  if (!streamer) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">Channel not found</h1>
          <p className="text-muted-foreground mb-6">The channel you're looking for doesn't exist or may have been renamed.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-16">
      {/* Channel Header/Banner */}
      <div 
        className="h-48 md:h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${streamer.bannerUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Channel Info */}
        <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 mb-8 relative z-10">
          <Avatar className="h-32 w-32 border-4 border-background rounded-full">
            <AvatarImage src={streamer.avatarUrl} />
            <AvatarFallback>{streamer.displayName?.charAt(0) || streamer.username.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="md:ml-6 mt-4 md:mt-0 flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">{streamer.displayName || streamer.username}</h1>
                <p className="text-muted-foreground mb-2">@{streamer.username}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="flex items-center mr-4">
                    <Users size={16} className="mr-1.5" />
                    {streamer.followers.toLocaleString()} followers
                  </div>
                  {streamer.isLive && (
                    <div className="live-indicator">
                      LIVE
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex mt-4 md:mt-0 gap-2">
                <Button 
                  onClick={handleFollow}
                  variant={isFollowing ? "outline" : "default"}
                  className={isFollowing 
                    ? "border-castify-purple text-castify-purple hover:bg-castify-purple/10"
                    : "bg-castify-purple hover:bg-castify-purple/90"
                  }
                >
                  <Heart className={`mr-1 h-4 w-4 ${isFollowing ? "fill-castify-purple" : ""}`} />
                  {isFollowing ? 'Following' : 'Follow'}
                </Button>
                
                <Button 
                  onClick={handleSubscribe}
                  variant={isSubscribed ? "outline" : "default"}
                  className={isSubscribed 
                    ? "border-castify-pink text-castify-pink"
                    : "bg-castify-pink hover:bg-castify-pink/90"
                  }
                >
                  {isSubscribed ? 'Subscribed' : 'Subscribe'}
                </Button>
                
                <Button variant="outline" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
                
                <Button variant="outline" size="icon">
                  <Share className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Channel Content */}
        <div className="space-y-6">
          {/* Live Stream Or Offline Content */}
          {streamer.isLive ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <VideoPlayer thumbnailUrl={streamer.thumbnail} isLive={true} />
                
                <div>
                  <h1 className="text-2xl font-bold mb-2">{streamer.title}</h1>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="flex items-center mr-4">
                      <Users size={16} className="mr-1.5" />
                      {streamer.viewers.toLocaleString()} viewers
                    </div>
                    <Link 
                      to={`/category/${streamer.gameId}`} 
                      className="hover:text-castify-purple transition"
                    >
                      {streamer.game}
                    </Link>
                    {streamer.tags.map((tag, i) => (
                      <span key={i} className="ml-2 px-2 py-1 bg-muted rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Tabs defaultValue="about">
                  <TabsList className="w-full justify-start border-b rounded-none bg-transparent">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                    <TabsTrigger value="videos">Videos</TabsTrigger>
                    <TabsTrigger value="clips">Clips</TabsTrigger>
                  </TabsList>
                  <TabsContent value="about" className="mt-4">
                    <div className="prose prose-invert max-w-none">
                      <p>{streamer.bio}</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="schedule" className="mt-4">
                    <div className="flex items-center justify-center h-48 border border-dashed border-border rounded-lg">
                      <div className="text-center">
                        <Calendar className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">Streaming schedule coming soon</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="videos" className="mt-4">
                    <div className="flex items-center justify-center h-48 border border-dashed border-border rounded-lg">
                      <div className="text-center">
                        <Clock className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">Past broadcasts coming soon</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="clips" className="mt-4">
                    <div className="flex items-center justify-center h-48 border border-dashed border-border rounded-lg">
                      <div className="text-center">
                        <ExternalLink className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">Popular clips coming soon</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="h-[calc(100vh-400px)] min-h-[500px]">
                <ChatBox />
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex items-center justify-center py-20 border border-dashed border-border rounded-lg bg-muted/30">
                <div className="text-center max-w-md">
                  <h2 className="text-2xl font-semibold mb-2">{streamer.displayName || streamer.username} is offline</h2>
                  <p className="text-muted-foreground mb-6">
                    {streamer.lastSeen 
                      ? `Last seen ${new Date(streamer.lastSeen).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}`
                      : 'Check back later to catch them live'
                    }
                  </p>
                  <Button onClick={handleFollow} className="bg-castify-purple hover:bg-castify-purple/90">
                    <Bell className="mr-1.5 h-4 w-4" />
                    Get notified when they go live
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="about">
                <TabsList className="w-full justify-start border-b rounded-none bg-transparent">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                  <TabsTrigger value="clips">Clips</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="mt-6">
                  <div className="prose prose-invert max-w-none">
                    <p>{streamer.bio}</p>
                  </div>
                </TabsContent>
                {/* Same tab content as above */}
                <TabsContent value="schedule" className="mt-4">
                  <div className="flex items-center justify-center h-48 border border-dashed border-border rounded-lg">
                    <div className="text-center">
                      <Calendar className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">Streaming schedule coming soon</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="videos" className="mt-4">
                  <div className="flex items-center justify-center h-48 border border-dashed border-border rounded-lg">
                    <div className="text-center">
                      <Clock className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">Past broadcasts coming soon</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="clips" className="mt-4">
                  <div className="flex items-center justify-center h-48 border border-dashed border-border rounded-lg">
                    <div className="text-center">
                      <ExternalLink className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">Popular clips coming soon</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
