/**
 * =========================================================================
 * 💗 A LITTLE WORLD OF BHUMMII - CENTRALIZED DATA CONFIGURATION 💗
 * =========================================================================
 * 
 * Edit this file to customize any text, photos, videos, or messages!
 * To add personal photos/videos:
 * 1. Place your files inside the `public/images/` or `public/videos/` folders.
 * 2. Update the `url`, `thumbnail`, or `videoUrl` paths below.
 * =========================================================================
 */

export const personalDetails = {
  fullName: "Bhumika Tyagi",
  nickname: "Bhummii",
  birthdayDate: "21st November",
  displayDate: "21 November",
  senderName: "Your Bestie",
  heroHeading: "Happy Birthday, My Bhummii! ♡",
  heroSubtitle: "To the girl who makes ordinary moments feel extraordinary.",
  heroButtonText: "Open Your Little Surprise ♡",
  heroTeaserImage: "/images/hero-teaser.jpg",
};

export const photoGallery = [
  {
    id: 1,
    url: "/images/photo1.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    caption: "The one where laughter wouldn't stop ✨",
    date: "A Day to Remember",
    rotation: "-3deg",
    tag: "Core Memory"
  },
  {
    id: 2,
    url: "/images/photo2.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    caption: "Radiating sunshine and pure cuteness 🌸",
    date: "Golden Hour Vibes",
    rotation: "2deg",
    tag: "Cutie"
  },
  {
    id: 3,
    url: "/images/photo3.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    caption: "Partners in crime & forever chaos 🎀",
    date: "Bestie Energy",
    rotation: "-2deg",
    tag: "Iconic"
  },
  {
    id: 4,
    url: "/images/photo4.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    caption: "That smile that lights up any dark room 💫",
    date: "Sweet Moments",
    rotation: "3deg",
    tag: "Precious"
  },
  {
    id: 5,
    url: "/images/photo5.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    caption: "Unfiltered, goofy, and 100% us 🧁",
    date: "No Filter Needed",
    rotation: "-1.5deg",
    tag: "Real One"
  },
  {
    id: 6,
    url: "/images/photo6.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    caption: "To a million more birthdays together! 🥂",
    date: "Forever & Ever",
    rotation: "2.5deg",
    tag: "Forever"
  }
];

export const videoGallery = [
  {
    id: 1,
    title: "Uncontrollable Giggles",
    videoUrl: "/videos/memory1.mp4",
    fallbackUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
    caption: "When we couldn't stop laughing for 20 minutes straight! 😂",
    duration: "0:45"
  },
  {
    id: 2,
    title: "Vibing & Singing Our Hearts Out",
    videoUrl: "/videos/memory2.mp4",
    fallbackUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    caption: "Car rides, favorite playlists, and terrible singing. Best memories! 🎶",
    duration: "1:15"
  },
  {
    id: 3,
    title: "Random Adventures with Bhummii",
    videoUrl: "/videos/memory3.mp4",
    fallbackUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    caption: "Every ordinary walk turns into an unforgettable adventure with you! 🎈",
    duration: "0:58"
  }
];

export const timelineEvents = [
  {
    id: 1,
    tag: "Chapter 1",
    title: "The Beginning of Our Bond",
    date: "Day One",
    description: "Who knew that a random conversation would turn into the most irreplaceable friendship of my life? From shy greetings to sharing every secret.",
    sticker: "🌱",
    color: "#FADADD"
  },
  {
    id: 2,
    tag: "Chapter 2",
    title: "Midnight Deep Talks & Chai",
    date: "Always",
    description: "Hours of talking about dreams, fears, gossip, college stress, and absolutely everything under the stars. The kind of conversations that heal the soul.",
    sticker: "☕",
    color: "#E6D9F2"
  },
  {
    id: 3,
    tag: "Chapter 3",
    title: "The Unmatched Craziness",
    date: "Every Single Day",
    description: "Inside jokes that only two people understand. The silent looks across the room where we both burst into laughter without uttering a single word.",
    sticker: "🤪",
    color: "#F8C8DC"
  },
  {
    id: 4,
    tag: "Chapter 4",
    title: "My Safe Haven",
    date: "Throughout Life",
    description: "Thank you for being the one person I can go to on my worst days and leave with a smile. You've been my constant anchor and greatest cheerleader.",
    sticker: "🛡️",
    color: "#FFF8F0"
  },
  {
    id: 5,
    tag: "Chapter 5",
    title: "Today & Beyond",
    date: "21 November 2026",
    description: "Celebrating YOU today! Another year older, wiser, prettier, and somehow even more lovable. Here's to lifelong madness together!",
    sticker: "👑",
    color: "#FADADD"
  }
];

export const letterContent = {
  envelopeTitle: "There's something I want to tell you...",
  salutation: "Dear Bhummii,",
  body: `Happy Birthday to my favourite human!

I don't know how to put all our memories, laughter, craziness and little moments into words, but I hope you know how special you are to me.

Thank you for being YOU. I hope this year brings you endless happiness, beautiful surprises, exciting adventures and everything your heart wishes for.

No matter how many birthdays pass, I hope we keep making memories, laughing at our stupid jokes and being our usual crazy selves.

Love you loads, Bhummii! ❤️`,
  signOff: "Forever your bestie.",
  postScript: "P.S. You will always be stuck with me! Deal with it ♡"
};

export const bouquetFlowers = [
  {
    id: "rose",
    name: "Soft Pink Rose",
    meaning: "For gentle kindness, endless warmth & genuine love",
    color: "#F8C8DC",
    bloomEmoji: "🌸",
    symbol: "Rose"
  },
  {
    id: "tulip",
    name: "Pastel Tulip",
    meaning: "For the happiest thoughts and unconditional care",
    color: "#FADADD",
    bloomEmoji: "🌷",
    symbol: "Tulip"
  },
  {
    id: "sunflower",
    name: "Golden Sunflower",
    meaning: "For your radiant smile that lights up every room",
    color: "#FFE599",
    bloomEmoji: "🌻",
    symbol: "Sunflower"
  },
  {
    id: "lavender",
    name: "Sweet Lavender",
    meaning: "For peace, calm vibes, and our comforting talks",
    color: "#E6D9F2",
    bloomEmoji: "🪻",
    symbol: "Lavender"
  },
  {
    id: "daisy",
    name: "Little Daisy",
    meaning: "For pure laughter, innocence, and our goofy moments",
    color: "#FFF8F0",
    bloomEmoji: "🌼",
    symbol: "Daisy"
  },
  {
    id: "babybreath",
    name: "Baby's Breath",
    meaning: "For everlasting friendship that never fades",
    color: "#FFFFFF",
    bloomEmoji: "✨",
    symbol: "Blossom"
  }
];

export const reasonsList = [
  {
    id: 1,
    title: "Your Smile",
    highlight: "Instantly contagious",
    description: "It has the power to brighten up the gloomiest day. Seeing you happy is my favorite sight in the world.",
    icon: "Sparkles",
    tag: "01"
  },
  {
    id: 2,
    title: "Your Craziness",
    highlight: "Matching my energy",
    description: "Who else will join me in the most unhinged dance moves, dramatic acting sessions, and spontaneous midnight shenanigans?",
    icon: "HeartHandshake",
    tag: "02"
  },
  {
    id: 3,
    title: "Our Endless Conversations",
    highlight: "From 2 PM to 4 AM",
    description: "We can talk about serious existential dilemmas for an hour and then debate nonsense for the next three. Never a dull moment.",
    icon: "MessageCircleHeart",
    tag: "03"
  },
  {
    id: 4,
    title: "Our Inside Jokes",
    highlight: "One glance is all it takes",
    description: "We don't even need words. One look in a crowded room, and we're both struggling to hold back snorts of laughter.",
    icon: "Smile",
    tag: "04"
  },
  {
    id: 5,
    title: "All The Little Things That Make You YOU",
    highlight: "One in a million",
    description: "Your kind heart, your dramatic storytelling, the way you care for people, and your pure soul. There is truly nobody like you, Bhummii.",
    icon: "Crown",
    tag: "05"
  }
];

export const sweetSurpriseMessages = [
  "Bhummii, if friendship were an art, ours would be a masterpiece hanging in the Louvre! 🎨💗",
  "Reminder: You are gorgeous, talented, deeply loved, and entirely irreplaceable! 🌸✨",
  "Promise me we'll still be laughing at silly jokes when we're 80 years old with rocking chairs! 👵🏼👵🏼",
  "May your birthday cake be as sweet as your heart and your year as bright as your smile! 🎂💫",
  "Every memory with you is bookmarked in my heart forever. Love you tons! 📖💖",
  "You're not just a friend; you're the sister chosen by heart! Happy Birthday, bestie! 👯‍♀️🌷",
  "Eat as much cake as you want today—birthday calories are officially illegal! 🍰🧁",
  "Thank you for being my constant, my sounding board, and my ride-or-die! 🚗💨💗"
];

export const finalScreen = {
  quote: "Here's to more memories, more madness, more laughter and a million more birthdays together.",
  cheer: "Happy Birthday, Bhummii! 💗",
  credit: "Crafted with endless love by your best friend."
};
