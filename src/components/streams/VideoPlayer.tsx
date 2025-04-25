
import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface VideoPlayerProps {
  thumbnailUrl: string;
  isLive?: boolean;
}

const qualityOptions = ['1080p60', '720p60', '480p', '360p', 'Auto'];

export default function VideoPlayer({ thumbnailUrl, isLive = true }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [quality, setQuality] = useState('Auto');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  
  const playerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<number | null>(null);
  
  // Format time in MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!playerRef.current) return;
    
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };
  
  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  
  // Simulate video progress
  useEffect(() => {
    if (!isLive && isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 100;
          }
          return prev + 0.1;
        });
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [isPlaying, isLive]);
  
  // Simulate video duration
  useEffect(() => {
    if (!isLive) {
      setDuration(300); // 5 minutes
    }
  }, [isLive]);
  
  // Control visibility of player controls
  useEffect(() => {
    const handleMouseMovement = () => {
      setShowControls(true);
      
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      
      if (!isHovering) {
        controlsTimeoutRef.current = window.setTimeout(() => {
          setShowControls(false);
        }, 3000);
      }
    };
    
    const playerElement = playerRef.current;
    if (playerElement) {
      playerElement.addEventListener('mousemove', handleMouseMovement);
    }
    
    return () => {
      if (playerElement) {
        playerElement.removeEventListener('mousemove', handleMouseMovement);
      }
      
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isHovering]);

  return (
    <div 
      ref={playerRef}
      className={`relative w-full aspect-video bg-black rounded-lg overflow-hidden ${isFullscreen ? 'fixed inset-0 z-[100]' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Video/Thumbnail Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={thumbnailUrl} 
          alt="Stream thumbnail" 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay that simulates the video */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Live indicator overlay */}
        {isLive && (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 z-20">
            <div className="live-indicator">
              LIVE
            </div>
          </div>
        )}
      </div>
      
      {/* Controls Overlay - visible based on showControls state */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 flex flex-col justify-between p-4 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {/* Top controls - title, viewers, etc. */}
        <div className="flex justify-between items-center">
          <div>
            {/* Stream/Video title could go here */}
          </div>
          <div>
            {/* Additional top controls could go here */}
          </div>
        </div>
        
        {/* Center play/pause button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {!isPlaying && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(true);
              }}
            >
              <Play className="h-8 w-8" />
            </Button>
          )}
        </div>
        
        {/* Bottom controls - progress bar, volume, etc. */}
        <div className="space-y-3" onClick={(e) => e.stopPropagation()}>
          {/* Progress bar (only for non-live videos) */}
          {!isLive && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-white">{formatTime(duration * progress / 100)}</span>
              <Slider
                value={[progress]}
                max={100}
                step={0.1}
                className="flex-grow"
                onValueChange={(value) => {
                  setProgress(value[0]);
                }}
              />
              <span className="text-xs text-white">{formatTime(duration)}</span>
            </div>
          )}
          
          {/* Control buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(!isPlaying);
                }}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted(!isMuted);
                  }}
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
                
                <Slider
                  value={[isMuted ? 0 : volume]}
                  max={100}
                  className="w-24"
                  onValueChange={(value) => {
                    if (value[0] > 0 && isMuted) {
                      setIsMuted(false);
                    }
                    setVolume(value[0]);
                  }}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Quality selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Settings className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Quality</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={quality} onValueChange={setQuality}>
                    {qualityOptions.map((option) => (
                      <DropdownMenuRadioItem key={option} value={option}>
                        {option}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Fullscreen toggle */}
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
              >
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
