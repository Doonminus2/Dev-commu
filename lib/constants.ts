export interface EventItem {
  title: string;
  slug: string;
  image: string; // path under /public/images
  location: string;
  date: string; // human-friendly date
  time: string; // human-friendly time
 
}

export const events: EventItem[] = [
  {
    title: "React Summit 2026",
    slug: "react-summit-2026",
    image: "/images/event1.png",
    location: "Amsterdam, Netherlands",
    date: "2026-03-15",
    time: "09:00",
  },
  {
    title: "JSConf EU 2026",
    slug: "jsconf-eu-2026",
    image: "/images/event2.png",
    location: "Lisbon, Portugal",
    date: "2026-05-20",
    time: "10:00",
  },
  {
    title: "Next.js Conf 2026",
    slug: "nextjs-conf-2026",
    image: "/images/event3.png",
    location: "Online & San Francisco, CA",
    date: "2026-04-07",
    time: "11:00",
  },
  {
    title: "HackMIT 2026",
    slug: "hackmit-2026",
    image: "/images/event4.png",
    location: "Cambridge, MA, USA",
    date: "2026-02-28",
    time: "18:00",
  },
  {
    title: "Google I/O 2026",
    slug: "google-io-2026",
    image: "/images/event5.png",
    location: "Mountain View, CA, USA",
    date: "2026-05-18",
    time: "09:00",
  },
  {
    title: "Dev Meetup Bangkok",
    slug: "dev-meetup-bangkok-2026",
    image: "/images/event6.png",
    location: "Bangkok, Thailand",
    date: "2026-06-12",
    time: "19:00",
  },
];

// Named export 'events' is intentionally used so components can import: import { events } from '@/lib/constants'
