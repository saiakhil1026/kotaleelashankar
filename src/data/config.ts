const config = {
  title: "LEELA SHANKAR KOTA | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of LEELA SHANKAR KOTA, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of LEELA SHANKAR KOTA, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "LEELA SHANKAR KOTA",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "LEELA SHANKAR KOTA",
  email: "leelashankarkota@gmail.com",
  site: "https://github.com/lschowdary999",

  // for github stars button
  githubUsername: "lschowdary999",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/leelasankarkota7/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/lschowdary999",
  },
};
export { config };
