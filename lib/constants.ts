export type EventItems ={
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};


export const events: EventItems[] = [
  {
    title: "Hack the Future 2025",
    image: "/images/event1.png",
    slug: "hack-the-future-2025",
    location: "Bangalore, India",
    date: "2025-11-10",
    time: "10:00 AM",
  },
  {
    title: "AI & Cloud Summit",
    image: "/images/event2.png",
    slug: "ai-cloud-summit",
    location: "Delhi, India",
    date: "2025-12-02",
    time: "9:30 AM",
  },
  {
    title: "Open Source Meetup",
    image: "/images/event3.png",
    slug: "open-source-meetup",
    location: "Chennai, India",
    date: "2025-12-15",
    time: "5:00 PM",
  },
  {
    title: "Next.js Global Conf",
    image: "/images/event4.png",
    slug: "nextjs-global-conf",
    location: "Online",
    date: "2026-01-05",
    time: "6:00 PM",
  },
   
  {
    title: "DevOps India 2025",
    image: "/images/event5.png",
    slug: "devops-india-2025",
    location: "Pune, India",
    date: "2025-11-25",
    time: "11:00 AM",
  },
  {
    title: "Data Science Meetup",
    image: "/images/event6.png",
    slug: "data-science-meetup",
    location: "Hyderabad, India",
    date: "2025-12-20",
    time: "4:00 PM",
  }
];
