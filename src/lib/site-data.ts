import hero from "@/assets/hero.jpg";
import svcInterior from "@/assets/svc-interior.jpg";
import svcArch from "@/assets/svc-architecture.jpg";
import svcFurniture from "@/assets/svc-furniture.jpg";
import svcLighting from "@/assets/svc-lighting.jpg";
import workBedroom from "@/assets/work-bedroom.jpg";
import workKitchen from "@/assets/work-kitchen.jpg";
import workLobby from "@/assets/work-lobby.jpg";

export const company = {
  name: "Faizam Rasheed Interiors",
  city: "Clifton, Karachi",
  country: "Pakistan",
  founder: "Faizam Rasheed",
  phone: "+92 336 1996677",
  whatsapp: "https://wa.me/923361996677",
  email: "faizam.rasheed@gmail.com",
  facebook: "https://www.facebook.com/p/Faizam-Rasheed-Interiors-61556443859877/",
  instagram: "https://www.instagram.com/faizamrasheed/",
  tiktok: "https://www.tiktok.com/@faizam.rasheed.in",
};

export const images = { hero, svcInterior, svcArch, svcFurniture, svcLighting, workBedroom, workKitchen, workLobby };

export const services = [
  {
    slug: "architecture",
    title: "Architecture",
    short: "Thoughtful architectural design that blends form, function and natural flow.",
    image: svcArch,
    body: "We design buildings and spaces that feel grounded and intentional. From concept sketches to detailed drawings, every decision considers how light, materials and structure will work together in harmony.",
    points: ["Concept design & massing", "Structural planning", "Approval drawings", "Site supervision"],
  },
  {
    slug: "interior-design",
    title: "Complete Interior Design",
    short: "Full-service interior design from mood boards to final installation.",
    image: svcInterior,
    body: "We handle every layer of your interior — layouts, materials, finishes, furniture and lighting. Each project is designed as one cohesive story, ensuring a calm and consistent feel throughout.",
    points: ["Space planning", "Material & finish selection", "Furniture curation", "Lighting design"],
  },
  {
    slug: "turnkey-execution",
    title: "Turnkey Project Execution",
    short: "End-to-end project management and execution for a seamless experience.",
    image: svcLighting,
    body: "From the first sketch to handover, we manage everything. Our team coordinates contractors, suppliers and timelines so you receive a finished space without the stress of running a project.",
    points: ["Project management", "Contractor coordination", "Quality control", "Final handover"],
  },
  {
    slug: "custom-furniture",
    title: "Custom Furniture Curation & Manufacturing",
    short: "Bespoke furniture crafted to fit your space and style perfectly.",
    image: svcFurniture,
    body: "We design and commission custom pieces — sofas, dining tables, wardrobes and statement furniture — made with solid woods, natural stones and fine craftsmanship to last for generations.",
    points: ["Custom design", "Solid wood & veneer", "Upholstery & finishing", "Installation"],
  },
];

export const projects = [
  { slug: "premium-residential", title: "Premium Residential Renovation", category: "Residential", image: workBedroom, year: "2025", area: "6,500 sq ft", body: "A complete home renovation blending wabi-sabi warmth with modern functionality." },
  { slug: "luxury-kitchen", title: "Luxury Kitchen", category: "Residential", image: workKitchen, year: "2024", area: "1,200 sq ft", body: "A custom kitchen designed for cooking and gathering with earthy materials." },
  { slug: "high-end-cafe", title: "High-end Cafe & Commercial Design", category: "Commercial", image: workLobby, year: "2024", area: "3,800 sq ft", body: "A commercial space designed to feel calm, welcoming and thoughtfully detailed." },
  { slug: "modern-closet", title: "Modern Walk-in Closet", category: "Residential", image: svcInterior, year: "2025", area: "900 sq ft", body: "A bespoke closet system combining smart storage with organic textures." },
];

export const posts = [
  { slug: "wabi-sabi-home", title: "Wabi-Sabi at home: finding beauty in imperfection", date: "Sep 12, 2026", image: workKitchen, excerpt: "Embracing natural materials, weathered textures and the calm of imperfection in interior design." },
  { slug: "organic-modern", title: "Organic modern: how to layer raw textures and earthy tones", date: "Aug 28, 2026", image: svcArch, excerpt: "Creating warm, grounded spaces with natural materials and neutral palettes." },
  { slug: "custom-furniture", title: "Custom furniture vs ready-made: what is worth it?", date: "Aug 03, 2026", image: svcFurniture, excerpt: "When investing in bespoke pieces makes sense for your home." },
];

export const testimonials = [
  { name: "Sarah Ahmed", date: "October 2025", initials: "SA", text: "Faizam transformed our apartment into a warm, inviting home. The attention to detail and understanding of our lifestyle made the entire process seamless." },
  { name: "Omar Hassan", date: "September 2025", initials: "OH", text: "Working with Faizam Rasheed Interiors was an exceptional experience. The team's expertise in architecture and design exceeded our expectations." },
  { name: "Aisha Malik", date: "August 2025", initials: "AM", text: "The custom furniture and interior design created a space that feels both modern and timeless. We couldn't be happier with the results." },
];

export const awards = [
  { title: "Best Residential Interior Design", city: "Karachi", date: "2025" },
  { title: "Excellence in Custom Furniture", city: "Lahore", date: "2024" },
  { title: "Commercial Design Innovation", city: "Karachi", date: "2023" },
  { title: "Sustainable Architecture Award", city: "Islamabad", date: "2022" },
  { title: "Emerging Design Studio", city: "Karachi", date: "2021" },
];

export const process = [
  { title: "Consultation", text: "We meet to understand your vision, lifestyle and the feeling you want your space to have.", image: hero },
  { title: "Planning", text: "We create detailed layouts, timelines and plans before any work begins.", image: svcArch },
  { title: "Design", text: "Materials, furniture and lighting are selected to create a calm, cohesive whole.", image: svcFurniture },
  { title: "Execution", text: "Our team builds and installs every detail, handing over a finished space.", image: workLobby },
];

// TODO: confirm real values for stats (currently using placeholder numbers)
export const stats = {
  averageProjectValue: { to: 25, prefix: "PKR ", suffix: "M", label: "Average Project Value" },
  projectsCompleted: { to: 150, suffix: "+", label: "Projects Completed" },
  highestProjectValue: { to: 120, prefix: "PKR ", suffix: "M", label: "Highest Project Value" },
  teamMembers: { to: 30, suffix: "+", label: "Expert Team Members" },
};
