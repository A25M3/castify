
import { faker } from '@faker-js/faker';

// Categories
export const categories = [
  { id: 1, name: 'Just Chatting', viewers: 483200, imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3' },
  { id: 2, name: 'Fortnite', viewers: 237500, imageUrl: 'https://i.ibb.co/LzqVTtH6/fortnite.jpg' },
  { id: 3, name: 'League of Legends', viewers: 198400, imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3' },
  { id: 4, name: 'Music', viewers: 104600, imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3' },
  { id: 5, name: 'VALORANT', viewers: 97800, imageUrl: 'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-4.0.3' },
  { id: 6, name: 'Grand Theft Auto V', viewers: 95400, imageUrl: 'https://images.unsplash.com/photo-1604846887565-640d2c52d2a7?ixlib=rb-4.0.3' },
  { id: 7, name: 'Minecraft', viewers: 83700, imageUrl: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?ixlib=rb-4.0.3' },
  { id: 8, name: 'Call of Duty: Warzone', viewers: 78200, imageUrl: 'https://images.unsplash.com/photo-1602673221577-0b56d7ce446b?ixlib=rb-4.0.3' },
  { id: 9, name: 'Art', viewers: 45600, imageUrl: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3' },
  { id: 10, name: 'Sports', viewers: 34500, imageUrl: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?ixlib=rb-4.0.3' },
  { id: 11, name: 'Cooking', viewers: 29800, imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3' },
  { id: 12, name: 'Science & Tech', viewers: 21400, imageUrl: 'https://images.unsplash.com/photo-1581092921461-fd0e43120dde?ixlib=rb-4.0.3' }
];

// Generate random streamers with realistic data
export const generateStreamers = (count = 20) => {
  const streamers = [];
  
  for (let i = 0; i < count; i++) {
    const isLive = Math.random() > 0.4; // 60% chance of being live
    const categoryId = Math.floor(Math.random() * categories.length) + 1;
    const category = categories.find(c => c.id === categoryId)!;
    
    const streamer = {
      id: i + 1,
      username: faker.internet.userName().replace(/[._]/g, ''),
      displayName: faker.person.fullName(),
      avatarUrl: faker.image.avatar(),
      followers: faker.number.int({ min: 100, max: 1000000 }),
      isLive: isLive,
      title: isLive ? faker.lorem.sentence() : '',
      game: isLive ? category.name : '',
      gameId: isLive ? category.id : null,
      thumbnail: isLive ? `https://picsum.photos/seed/${i + 1}/640/360` : '',
      viewers: isLive ? faker.number.int({ min: 10, max: 50000 }) : 0,
      tags: [
        faker.word.sample(),
        faker.word.sample(),
        faker.word.sample()
      ],
      lastSeen: isLive ? null : faker.date.recent({ days: 14 }),
      bio: faker.lorem.paragraph(),
      bannerUrl: `https://picsum.photos/seed/banner${i}/1280/360`,
    };
    
    streamers.push(streamer);
  }
  
  return streamers;
};

export const streamers = generateStreamers();

// Featured streamers (for homepage)
export const featuredStreamers = streamers
  .filter(streamer => streamer.isLive && streamer.viewers > 5000)
  .slice(0, 3);

// Trending streamers
export const trendingStreamers = streamers
  .filter(streamer => streamer.isLive)
  .sort((a, b) => b.viewers - a.viewers)
  .slice(0, 8);

// Recommended streamers
export const recommendedStreamers = streamers
  .filter(streamer => streamer.isLive)
  .sort(() => 0.5 - Math.random())
  .slice(0, 8);

// Generate mock chat messages for a stream
export const generateChatMessages = (count = 20) => {
  const messages = [];
  
  const chatUsernames = [
    'NeonRacer', 'QuantumCat', 'PixelWarrior', 'ByteWizard',
    'StellarNova', 'CyberPenguin', 'GlitchHunter', 'EchoFrost',
    'VoidWalker', 'BinaryBard', 'AstralPilot', 'ChromePhoenix',
    'VirtualGhost', 'LaserLynx', 'NebulaNomad', 'CrystalCore',
    'FluxFalcon', 'SynthSeer', 'RadiantRook', 'PlasmaPixie'
  ];

  // 3 hours ago to now timestamp range
  const end = new Date();
  const start = new Date(end.getTime() - 3 * 60 * 60 * 1000); 
  
  for (let i = 0; i < count; i++) {
    const timestamp = faker.date.between({ from: start, to: end });
    
    const message = {
      id: i + 1,
      username: chatUsernames[Math.floor(Math.random() * chatUsernames.length)],
      message: faker.lorem.sentence(),
      timestamp: timestamp,
      isSubscriber: Math.random() > 0.7, // 30% chance of being a subscriber
      isModerator: Math.random() > 0.9, // 10% chance of being a moderator
    };
    
    messages.push(message);
  }
  
  return messages.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
};
