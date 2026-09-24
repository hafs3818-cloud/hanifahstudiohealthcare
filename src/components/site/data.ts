import {
  HeartPulse,
  Baby,
  Stethoscope,
  Flower2,
  Brain,
  TestTube,
  Phone,
  Mail,
  Clock,
  MapPin,
  Calendar,
  Users,
  Award,
  Ambulance,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "family-medicine",
    icon: Stethoscope,
    title: "Family Medicine",
    description:
      "From yearly physicals to managing long term conditions, our family physicians build lasting relationships with patients of every age. We take time to listen, explain your options, and follow up when something needs a closer look.",
    bullets: [
      "Annual wellness exams",
      "Chronic condition management",
      "Same day sick visits",
      "Vaccinations and boosters",
    ],
  },
  {
    id: "pediatrics",
    icon: Baby,
    title: "Pediatrics",
    description:
      "Our pediatric team cares for newborns through teenagers, tracking growth, catching concerns early, and helping parents feel confident at every stage. We make checkups easy and treats even easier.",
    bullets: [
      "Newborn and well child visits",
      "School and sports physicals",
      "Immunizations",
      "Developmental screenings",
    ],
  },
  {
    id: "cardiology",
    icon: HeartPulse,
    title: "Cardiology",
    description:
      "Heart disease runs in families, which is why our cardiology team focuses on prevention as much as treatment. We offer advanced screenings, EKG, and lifestyle coaching to keep your heart strong for the long run.",
    bullets: [
      "Heart health screenings",
      "EKG and stress testing",
      "Blood pressure management",
      "Cholesterol counseling",
    ],
  },
  {
    id: "womens-health",
    icon: Flower2,
    title: "Women's Health",
    description:
      "Compassionate, confidential care for every stage of a woman's life. From annual exams and family planning to prenatal support and menopause guidance, our team makes comfort and respect the priority.",
    bullets: [
      "Annual exams and Pap smears",
      "Prenatal and postpartum care",
      "Family planning",
      "Menopause support",
    ],
  },
  {
    id: "mental-health",
    icon: Brain,
    title: "Mental Health",
    description:
      "Mental health is health, full stop. Our counselors and psychiatric providers offer therapy and medication management for anxiety, depression, grief, and life transitions. Asking for help is a sign of strength.",
    bullets: [
      "Individual counseling",
      "Medication management",
      "Anxiety and depression care",
      "Stress and grief support",
    ],
  },
  {
    id: "lab-diagnostics",
    icon: TestTube,
    title: "Lab and Diagnostics",
    description:
      "Skip the trip across town. Our on site lab handles blood work, X ray imaging, and EKG testing, which means faster results and fewer appointments for you. Most tests come back within twenty four hours.",
    bullets: [
      "Blood work and panels",
      "X ray imaging",
      "EKG testing",
      "Twenty four hour results",
    ],
  },
];

export type Doctor = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  experience: string;
  education: string;
  bio: string;
};

export const doctors: Doctor[] = [
  {
    id: "sarah-whitman",
    name: "Dr. Sarah Whitman",
    role: "Family Medicine",
    specialty: "Family Physician",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/17c3ef0117fe.jpg",
    experience: "Twenty two years practicing",
    education: "MD, University of Michigan Medical School",
    bio:
      "Dr. Whitman grew up in Cedar Grove and came home after residency to open her first practice. She treats three generations of some families and still makes house calls for elderly patients who cannot travel.",
  },
  {
    id: "marcus-bell",
    name: "Dr. Marcus Bell",
    role: "Pediatrics",
    specialty: "Pediatrician",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/77354caccb17.jpg",
    experience: "Eighteen years practicing",
    education: "MD, Johns Hopkins School of Medicine",
    bio:
      "Kids leave his exam room smiling, which is exactly the point. Dr. Bell believes pediatric care should feel safe and even fun, and parents trust him to catch the small things before they grow.",
  },
  {
    id: "priya-anand",
    name: "Dr. Priya Anand",
    role: "Cardiology",
    specialty: "Cardiologist",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/47bb9b158309.jpg",
    experience: "Fifteen years practicing",
    education: "MD, Stanford School of Medicine",
    bio:
      "Dr. Anand focuses on prevention as much as treatment. She works with patients on lifestyle, nutrition, and stress, then brings out advanced testing only when it actually changes the plan.",
  },
  {
    id: "james-okoro",
    name: "Dr. James Okoro",
    role: "Internal Medicine",
    specialty: "Internist",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/732da508f06f.jpg",
    experience: "Twenty years practicing",
    education: "MD, Duke University School of Medicine",
    bio:
      "When a symptom does not fit one box, Dr. Okoro is who families call. He specializes in complex cases and connects patients to specialists when needed, then follows up to make sure nothing falls through.",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Maria Gonzalez",
    role: "Cedar Grove, parent of three",
    quote:
      "Dr. Bell called me on a Sunday when my youngest had a fever and walked me through what to watch for. That kind of care does not happen at big chain clinics. We will never go anywhere else.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Robert Chen",
    role: "Cardiology patient since 2019",
    quote:
      "I had high blood pressure for years and felt like a number at every other office. Dr. Anand sat with me for forty five minutes on the first visit. I finally feel like someone is paying attention.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Tasha Williams",
    role: "New mom, postpartum patient",
    quote:
      "The mental health team checked on me weekly for the first two months after my daughter was born. I never felt rushed or judged. Cedar Health treats the whole person, not just the chart.",
    rating: 5,
  },
];

export type Stat = {
  id: string;
  icon: LucideIcon;
  value: string;
  label: string;
};

export const stats: Stat[] = [
  {
    id: "s1",
    icon: Calendar,
    value: "40+",
    label: "Years serving Cedar Grove",
  },
  {
    id: "s2",
    icon: Users,
    value: "12,000",
    label: "Active patients of all ages",
  },
  {
    id: "s3",
    icon: Award,
    value: "18",
    label: "Doctors and nurse practitioners",
  },
  {
    id: "s4",
    icon: Ambulance,
    value: "24 hr",
    label: "On call nurse line for patients",
  },
];

export const contactInfo = [
  {
    icon: Phone,
    label: "Call us",
    value: "(555) 218-4400",
    detail: "Same day appointments available",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@cedarhealthclinic.com",
    detail: "We reply within one business day",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "418 Cedar Ridge Avenue",
    detail: "Cedar Grove, OR 97504",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon to Fri, 7am to 7pm",
    detail: "Saturday 8am to 2pm, closed Sunday",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Patients", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
