export type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  link?: string;
  linkLabel?: string;
  tag?: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Hack Winterthur 2026",
    date: "February 2026",
    excerpt:
      "48 hours of Hack Winterthur, and I was right in the middle of it! 🚀 The weekend of February 6–8 was all about hacking and discussing ideas. Little sleep, lots of coffee, and an incredible number of exciting and inspiring encounters. I had the opportunity to work on the City of Winterthur's challenge at this hackathon. The goal was to use digital ideas and new services to sustainably advance Winterthur as a place to live, learn, and work. The highlight was the highly motivated team that came together that evening. Even the intense hours were genuinely fun with this crew. A huge thank you to the organizers for this amazing hackathon and to all the inspiring people I had the chance to meet. The 48 hours were intense, challenging, and at the same time incredibly motivating. This was definitely not my last hackathon!",
    imageUrl: "/images/hack_winterthur_2026.png",
    link: "https://hackwinterthur.ch/",
    linkLabel: "Visit the Hack Winterthur",
    tag: "Hackathon · Hack Winterthur · Stadt Winterthur · WinLab · Entrepreneurship Club Winterthur",
  },
];

