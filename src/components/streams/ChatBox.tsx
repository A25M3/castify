
import { useState, useRef, useEffect } from 'react';
import { Send, Smile } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/lib/auth-context';
import { useToast } from '@/hooks/use-toast';
import { generateChatMessages } from '@/lib/mock-data';

interface ChatMessage {
  id: number;
  username: string;
  message: string;
  timestamp: Date;
  isSubscriber?: boolean;
  isModerator?: boolean;
}

export default function ChatBox() {
  const { isAuthenticated, user } = useAuth();
  const { toast } = useToast();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);
  
  // Load initial messages
  useEffect(() => {
    const initialMessages = generateChatMessages(30);
    setMessages(initialMessages);
  }, []);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Simulated incoming chat messages
  useEffect(() => {
    const interval = setInterval(() => {
      const newMessages = generateChatMessages(1);
      setMessages(msgs => [...msgs, ...newMessages]);
    }, 5000); // Add a new message every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!messageInput.trim()) return;
    
    if (!isAuthenticated) {
      toast({
        title: "Login required",
        description: "You need to login to send messages in chat.",
        variant: "destructive"
      });
      return;
    }
    
    const newMessage: ChatMessage = {
      id: messages.length + 1,
      username: user!.username,
      message: messageInput,
      timestamp: new Date(),
      isSubscriber: true, // Current user is always a subscriber in this demo
    };
    
    setMessages(msgs => [...msgs, newMessage]);
    setMessageInput('');
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="h-full flex flex-col rounded-lg bg-muted/30 neon-border">
      <div className="p-3 border-b border-border">
        <h2 className="font-semibold">Stream Chat</h2>
      </div>
      
      {/* Messages */}
      <ScrollArea className="flex-1 px-3 py-2" ref={scrollAreaRef}>
        <div className="space-y-3 pr-2">
          {messages.map((msg) => (
            <div key={`${msg.id}-${msg.timestamp.getTime()}`} className="flex items-start gap-2">
              <Avatar className="h-6 w-6 flex-shrink-0">
                <AvatarImage src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${msg.username}`} />
                <AvatarFallback>{msg.username[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0 space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <span 
                    className={`font-medium truncate ${
                      msg.isModerator ? 'text-castify-orange' : 
                      msg.isSubscriber ? 'text-castify-purple' : 
                      'text-foreground'
                    }`}
                  >
                    {msg.username}
                  </span>
                  
                  {msg.isModerator && (
                    <Badge variant="outline" className="h-4 text-[10px] px-1 bg-castify-orange/10 text-castify-orange border-castify-orange/30">
                      MOD
                    </Badge>
                  )}
                  
                  <span className="text-xs text-muted-foreground">
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
                <p className="text-sm break-words">{msg.message}</p>
              </div>
            </div>
          ))}
          <div ref={messageEndRef} />
        </div>
      </ScrollArea>
      
      {/* Input Area */}
      <form onSubmit={handleSendMessage} className="p-3 border-t border-border">
        <div className="flex gap-2">
          <Button 
            type="button" 
            variant="ghost" 
            size="icon" 
            className="flex-shrink-0"
          >
            <Smile className="h-5 w-5" />
          </Button>
          
          <Input 
            placeholder="Send a message"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="flex-1"
          />
          
          <Button 
            type="submit" 
            size="icon" 
            className="flex-shrink-0 bg-castify-purple hover:bg-castify-purple/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
