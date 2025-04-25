
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth-context';

// Mock data for dashboard
const viewerData = [
  { time: '12 AM', viewers: 0 },
  { time: '1 AM', viewers: 10 },
  { time: '2 AM', viewers: 25 },
  { time: '3 AM', viewers: 45 },
  { time: '4 AM', viewers: 70 },
  { time: '5 AM', viewers: 120 },
  { time: '6 AM', viewers: 230 },
  { time: '7 AM', viewers: 350 },
  { time: '8 AM', viewers: 470 },
  { time: '9 AM', viewers: 580 },
  { time: '10 AM', viewers: 620 },
  { time: '11 AM', viewers: 700 },
  { time: '12 PM', viewers: 750 },
  { time: '1 PM', viewers: 790 },
  { time: '2 PM', viewers: 880 },
  { time: '3 PM', viewers: 950 },
  { time: '4 PM', viewers: 1020 },
  { time: '5 PM', viewers: 1150 },
  { time: '6 PM', viewers: 1300 },
  { time: '7 PM', viewers: 1500 },
  { time: '8 PM', viewers: 1700 },
  { time: '9 PM', viewers: 1400 },
  { time: '10 PM', viewers: 1100 },
  { time: '11 PM', viewers: 800 },
];

const followerData = [
  { date: 'Jan', followers: 1200 },
  { date: 'Feb', followers: 1900 },
  { date: 'Mar', followers: 3000 },
  { date: 'Apr', followers: 4780 },
  { date: 'May', followers: 5890 },
  { date: 'Jun', followers: 6390 },
  { date: 'Jul', followers: 6800 },
  { date: 'Aug', followers: 8200 },
  { date: 'Sep', followers: 9200 },
  { date: 'Oct', followers: 12000 },
  { date: 'Nov', followers: 13100 },
  { date: 'Dec', followers: 15000 },
];

const categoryData = [
  { name: 'Gaming', hours: 120 },
  { name: 'Just Chatting', hours: 80 },
  { name: 'Art', hours: 40 },
  { name: 'Music', hours: 30 },
  { name: 'Sports', hours: 20 },
];

const streamSessions = [
  {
    id: 1,
    title: 'Late Night Gaming Marathon',
    date: '2023-11-15',
    duration: '8h 23m',
    averageViewers: 1342,
    peakViewers: 2105,
    followers: 143,
    subscribers: 37,
  },
  {
    id: 2,
    title: 'Casual Sunday Stream',
    date: '2023-11-12',
    duration: '4h 12m',
    averageViewers: 980,
    peakViewers: 1450,
    followers: 87,
    subscribers: 21,
  },
  {
    id: 3,
    title: 'New Game Release Day!',
    date: '2023-11-08',
    duration: '6h 45m',
    averageViewers: 1650,
    peakViewers: 2780,
    followers: 215,
    subscribers: 59,
  },
];

const DashboardPage = () => {
  const { user } = useAuth();
  const [isLive, setIsLive] = useState(false);
  
  const toggleLiveStatus = () => {
    setIsLive(!isLive);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Creator Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your stream performance and audience growth
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            onClick={toggleLiveStatus}
            className={isLive ? "bg-red-500 hover:bg-red-600" : "bg-castify-purple hover:bg-castify-purple/90"}
          >
            {isLive ? "End Stream" : "Go Live"}
          </Button>
          
          <Button variant="outline" asChild>
            <Link to={`/channel/${user?.username}`}>View Channel</Link>
          </Button>
        </div>
      </div>
      
      {/* Stream Status */}
      <Card className={`mb-8 border-l-4 ${isLive ? "border-l-red-500" : "border-l-muted"}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`h-4 w-4 rounded-full ${isLive ? "bg-red-500 animate-pulse" : "bg-muted"}`}></div>
              <div>
                <h3 className="text-lg font-medium">Stream Status</h3>
                <p className={isLive ? "text-red-500 font-medium" : "text-muted-foreground"}>
                  {isLive ? "LIVE" : "Offline"}
                </p>
              </div>
            </div>
            
            {isLive && (
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Current viewers</p>
                <p className="text-2xl font-bold">1,723</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      {/* Analytics Tabs */}
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="streams">Past Streams</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Followers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">15,342</div>
                <p className="text-xs text-green-500 mt-1">+243 this week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Stream Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">287</div>
                <p className="text-xs text-green-500 mt-1">+12 this week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Concurrent Viewers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,245</div>
                <p className="text-xs text-green-500 mt-1">+18% this month</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Viewer Stats (24h)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={viewerData}>
                      <defs>
                        <linearGradient id="colorViewers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#9b87f5" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                      <XAxis dataKey="time" stroke="#888" fontSize={12} />
                      <YAxis stroke="#888" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#222',
                          borderColor: '#444',
                          borderRadius: '0.5rem'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="viewers" 
                        stroke="#9b87f5" 
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorViewers)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Follower Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={followerData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                      <XAxis dataKey="date" stroke="#888" fontSize={12} />
                      <YAxis stroke="#888" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#222',
                          borderColor: '#444',
                          borderRadius: '0.5rem'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="followers" 
                        stroke="#D946EF" 
                        strokeWidth={2} 
                        dot={{ r: 4, strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Stream Hours by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                    <XAxis dataKey="name" stroke="#888" fontSize={12} />
                    <YAxis stroke="#888" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#222',
                        borderColor: '#444',
                        borderRadius: '0.5rem'
                      }} 
                    />
                    <Legend />
                    <Bar 
                      dataKey="hours" 
                      name="Stream Hours"
                      fill="#1EAEDB" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="streams">
          <h2 className="text-2xl font-bold mb-6">Recent Broadcasts</h2>
          
          <div className="space-y-6">
            {streamSessions.map(session => (
              <Card key={session.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-lg">{session.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(session.date).toLocaleDateString()} • {session.duration}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div>
                        <p className="text-muted-foreground">Avg. Viewers</p>
                        <p className="font-bold">{session.averageViewers.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Peak Viewers</p>
                        <p className="font-bold">{session.peakViewers.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">New Followers</p>
                        <p className="font-bold text-green-500">+{session.followers}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">New Subs</p>
                        <p className="font-bold text-castify-purple">+{session.subscribers}</p>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="md:self-center whitespace-nowrap">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="engagement">
          <div className="flex items-center justify-center h-96 border border-dashed border-border rounded-lg bg-muted/30">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                Detailed engagement analytics will be available soon
              </p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="revenue">
          <div className="flex items-center justify-center h-96 border border-dashed border-border rounded-lg bg-muted/30">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                Revenue tracking and payout features will be available soon
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPage;
