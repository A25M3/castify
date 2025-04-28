
import { Link } from "react-router-dom";
import { Home, Video } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "@/hooks/useTranslation";
import { trendingStreamers } from "@/lib/mock-data";
import { useAuth } from "@/lib/auth-context";

export function AppSidebar() {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();
  
  // Mock data - in a real app, this would come from the user's profile
  const followedStreamers = trendingStreamers.slice(0, 5); // Show 5 followed streamers
  const recommendedStreamers = trendingStreamers.slice(5, 10); // Show 5 recommended streamers

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={t('home')}>
                  <Link to="/">
                    <Home />
                    <span>{t('home')}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={t('browse')}>
                  <Link to="/browse">
                    <Video />
                    <span>{t('browse')}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>{t('following')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {isAuthenticated ? (
                followedStreamers.map((streamer) => (
                  <SidebarMenuItem key={streamer.id}>
                    <SidebarMenuButton asChild tooltip={streamer.displayName}>
                      <Link to={`/channel/${streamer.username}`} className="flex items-center">
                        <Avatar className="h-6 w-6 mr-2">
                          <AvatarImage src={streamer.avatarUrl} />
                          <AvatarFallback>{streamer.username[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <span className="truncate">{streamer.displayName}</span>
                        {streamer.isLive && (
                          <span className="ml-2 h-2 w-2 rounded-full bg-red-500" title={t('live')}></span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              ) : (
                <SidebarMenuItem>
                  <div className="px-2 py-1 text-sm text-muted-foreground">
                    {t('login')} {t('toSeeFollowing')}
                  </div>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>{t('recommended')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recommendedStreamers.map((streamer) => (
                <SidebarMenuItem key={streamer.id}>
                  <SidebarMenuButton asChild tooltip={streamer.displayName}>
                    <Link to={`/channel/${streamer.username}`} className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarImage src={streamer.avatarUrl} />
                        <AvatarFallback>{streamer.username[0].toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <span className="truncate">{streamer.displayName}</span>
                      {streamer.isLive && (
                        <span className="ml-2 h-2 w-2 rounded-full bg-red-500" title={t('live')}></span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
