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
    title: "Communal elections in Suhr",
    date: "September 2025",
    excerpt:
      "On September 30, 2025, communal elections were held in Switzerland. I am very pleased to have been elected to the office of my commune of Suhr with 913 votes. 🙌🏼 Thank you very much for your votes and your trust! 🙏🏼 Even though it is not a major political mandate, it was an intense election campaign. This makes it all the more gratifying that the effort was worthwhile. For me personally, this means a great deal. It is my first official step into local politics. 🔝 I am grateful for all the support I have received over the past few weeks! We ran a successful election campaign. 👏🏼 I would particularly like to congratulate my young party colleagues on their election to the election office and the communal committee! I am very pleased that we, as the younger generation here in the commune of Suhr, can work together and bring a new wind of fresh air. 💪🏼",
    imageUrl: "/images/communal_election2025.jpeg",
    link: "https://www.linkedin.com/posts/samuel-soun-a49049247_gestern-fanden-die-kommunalwahlen-statt-activity-7378484150456098816-qcAC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0NdpkBtxc-g1A0OgCfGlAuZaa38wKRtW0",
    linkLabel: "Read on LinkedIn",
    tag: "FDP.Die Liberalen Aargau Jungfreisinnige Aarau-Lenzburg-Kulm",
  },
];

