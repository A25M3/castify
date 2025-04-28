
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

export function AppSidebar() {
  const { t } = useTranslation();
  const followedStreamers = trendingStreamers.slice(0, 3); // Mock followed streamers
  const recommendedStreamers = trendingStreamers.slice(3, 6); // Mock recommended streamers

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
              {followedStreamers.map((streamer) => (
                <SidebarMenuItem key={streamer.id}>
                  <SidebarMenuButton asChild tooltip={streamer.displayName}>
                    <Link to={`/channel/${streamer.username}`}>
                      <Avatar className="h-5 w-5">
                        <AvatarImage src={streamer.avatarUrl} />
                        <AvatarFallback>{streamer.username[0].toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <span>{streamer.displayName}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
                    <Link to={`/channel/${streamer.username}`}>
                      <Avatar className="h-5 w-5">
                        <AvatarImage src={streamer.avatarUrl} />
                        <AvatarFallback>{streamer.username[0].toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <span>{streamer.displayName}</span>
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
