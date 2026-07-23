const projects = [
  {
    id: "homehub",
    title: "HomeHub Rwanda",
    subtitle: "A web platform connecting tenants and landlords in Kigali, streamlining housing searches.",
    role: "Lead Frontend Developer",
    timeline: "4 Weeks",
    tags: ["HTML5", "CSS Grid", "ES6 JS", "LocalStorage"],
    image: "assets/homehub_mockup.png",
    demoUrl: "#",
    githubUrl: "https://github.com/Jpaulb12/homehub-rwanda",
    challenge: "Finding affordable rental housing in Kigali typically requires relying on informal brokers who charge high commission fees. Jean Paul wanted to build a simple, direct rental search platform that doesn't require intermediaries.",
    design: "I designed a clean, grid-based card layout showcasing housing filters, prices in RWF, and location badges (e.g., Kacyiru, Nyarugenge, Kimironko). I prioritized responsive whitespace so students and professionals can navigate listings on low-bandwidth mobile networks.",
    engineering: "I engineered the frontend search query system in Vanilla JS. Listing data is stored in static JSON arrays and filters run client-side to ensure fast loading times. I also integrated local storage caching so user searches are saved offline.",
    results: "Shipped as a classroom capstone project at the University of Kigali, praised for user flow efficiency and local market focus."
  },
  {
    id: "iwacustore",
    title: "IwacuStore",
    subtitle: "A responsive e-commerce web platform showcasing local Kigali artisans.",
    role: "Full-Stack Developer",
    timeline: "6 Weeks",
    tags: ["JavaScript", "CSS Flexbox", "JSON API"],
    image: "assets/iwacustore_mockup.png",
    demoUrl: "#",
    githubUrl: "https://github.com/Jpaulb12/iwacu-store",
    challenge: "Local Kigali craft markets and artisans lacked an accessible, lightweight web portal to showcase products online to international buyers and local Kigali residents.",
    design: "I focused on a typography-led interface that emphasizes high-quality product images. I implemented a strict visual hierarchy using CSS Flexbox layouts, avoiding heavy JavaScript packages to keep the checkout funnel fast.",
    engineering: "I programmed the interactive shopping cart, item counters, and product filtering using Vanilla ES6 JS. Product details load dynamically from a mock API, and checkout state transitions are handled smoothly via native CSS transitions.",
    results: "Showcased at a university innovation fair; successfully demonstrated a full purchase flow running in under 1 second on mobile devices."
  },
  {
    id: "pharmafinder",
    title: "PharmaFinder",
    subtitle: "A Figma-designed mobile application mapping open pharmacies and medicine inventory in Kigali.",
    role: "UI/UX Designer",
    timeline: "3 Weeks",
    tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    image: "assets/pharmafinder_mockup.png",
    demoUrl: "#",
    githubUrl: "#",
    challenge: "Locating pharmacies carrying specific prescription drugs at night is difficult in Kigali. Residents often travel to multiple shops before finding what they need.",
    design: "I conducted user interviews with local residents to draft empathy maps and user flows. In Figma, I created low-fidelity wireframes and built a high-fidelity mobile prototype containing map routes, pharmacy lists, and stock search screens.",
    engineering: "Though built as a design showcase, I structured the Figma components using auto-layouts and tokenized color grids, making the project direct and developer-ready for translation to React Native or Thunkable.",
    results: "Received top honors for the UI/UX design capstone class at the University of Kigali, with testers scoring the flow 92/100 on ease-of-use."
  },
  {
    id: "mychat",
    title: "MyChat App",
    subtitle: "A real-time mobile messaging application utilizing Firebase database sync.",
    role: "Mobile App Developer",
    timeline: "5 Weeks",
    tags: ["Thunkable", "Firebase DB", "Realtime Database"],
    image: "assets/mychat_mockup.png",
    demoUrl: "#",
    githubUrl: "https://github.com/Jpaulb12/mychat-app",
    challenge: "Students at the University of Kigali needed a lightweight messaging application to share lecture notes and organize study groups without high data costs.",
    design: "I structured a simple, message-first chat screen inside Thunkable, using high-contrast text bubbles and a clean layout grid with minimal decorative bloat to load fast on older Android devices.",
    engineering: "I integrated Firebase Realtime Database for message syncing and user registration. I leveraged Thunkable's native blocks to handle connection state listeners, allowing offline messages to queue and send when internet connectivity restores.",
    results: "Deployed as a lightweight Android package (.apk) utilized by a class of 30+ IT students to coordinate university group assignments."
  },
  {
    id: "attendance",
    title: "University Attendance System",
    subtitle: "An automated QR-code tracking attendance system for the University of Kigali.",
    role: "Frontend Developer",
    timeline: "5 Weeks",
    tags: ["HTML5 Canvas", "JS QR Engine", "LocalStorage"],
    image: "assets/attendance_mockup.png",
    demoUrl: "#",
    githubUrl: "https://github.com/Jpaulb12/uok-attendance",
    challenge: "Lecturers at the University of Kigali waste time at the start of classes passing around paper sign-in sheets, which can be easily lost or falsified.",
    design: "I designed a clean split-panel desktop interface: one side displays a live-refreshing QR code for the projector screen, and the other side displays a real-time list of present student records.",
    engineering: "I built the system using a JavaScript QR reader library and the HTML5 Canvas API. The scan parses the encrypted token, verifies student identity, and stores data in LocalStorage. It works directly from any web browser without server installations.",
    results: "Presented the prototype to the department heads of the University of Kigali IT school as a proposal to modernize lecture tracking."
  }
];

if (typeof module !== 'undefined') {
  module.exports = projects;
}
