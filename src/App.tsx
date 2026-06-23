import { useEffect, useState, type FormEvent } from "react";
import profile from "./assets/thanusri.jpeg";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  ArrowRight,
  Sparkles,
  Code2,
  Briefcase,
  Award,
  MessageSquare,
  Menu,
  X,
  Check,
} from "lucide-react";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    title: "CareerPilot AI",
    tag: "AI · Career Platform",
    desc: "AI-powered career guidance platform that helps students discover career opportunities, required skills, and personalized learning pathways.",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
    link: "https://career-pilot-ai-final-project-77rp-qx6b0ek9g.vercel.app/",
  },
  {
    title: "AI Mock Interview Platform",
    tag: "AI · Interview Prep",
    desc: "A modern interview prep platform that lets users practice technical and HR interviews through AI-powered real-time interactions.",
    stack: ["React.js", "Firebase", "JavaScript"],
    link: "https://ai-interview-member.lovable.app/",
  },
  {
    title: "MediRecord App",
    tag: "Healthcare · CRUD App",
    desc: "Healthcare management application designed to manage patient records efficiently with full create, read, update, and delete functionality.",
    stack: ["Python", "Flask", "MySQL", "JavaScript"],
    link: null,
  },
];

const SKILLS = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"] },
  { title: "Programming", items: ["Java", "Python"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Firebase", "Vercel"] },
  { title: "AI Tools", items: ["ChatGPT", "Claude AI", "Gemini AI", "Cursor AI"] },
];

const SERVICES = [
  { n: "01", t: "Portfolio Websites", d: "Personal and professional portfolios that present your work with clarity and impact." },
  { n: "02", t: "Business Websites", d: "Polished, conversion-ready websites that build trust with your customers." },
  { n: "03", t: "Landing Pages", d: "Focused, high-converting landing pages for campaigns and product launches." },
  { n: "04", t: "React Frontend", d: "Component-driven web applications built for scale and maintainability." },
  { n: "05", t: "Website Redesign", d: "Modernizing outdated sites into fast, responsive, premium experiences." },
  { n: "06", t: "Maintenance & Care", d: "Ongoing updates, fixes, and performance improvements after launch." },
  { n: "07", t: "Hosting & Deploy", d: "Smooth deployment pipelines on Vercel and Firebase, configured right." },
  { n: "08", t: "AI-Powered Web", d: "Integrating AI tools into your product and workflow for a real edge." },
];

const CERTS = [
  { t: "React.js Development", s: "Frontend · Component Architecture" },
  { t: "Modern JavaScript (ES6+)", s: "Programming Fundamentals" },
  { t: "AI & Data Science", s: "Coursework · In Progress" },
];

const TESTIMONIALS = [
  { q: "Thanusri delivered a clean, fast website well ahead of schedule. Communication was clear throughout.", n: "Ramesh K.", r: "Small Business Owner" },
  { q: "Our landing page conversions improved noticeably after the redesign. Great attention to responsive detail.", n: "Aisha M.", r: "Startup Founder" },
  { q: "Professional, easy to work with, and genuinely good at translating ideas into a polished interface.", n: "David L.", r: "Product Manager" },
];

const ROLES = ["Frontend Developer", "React Developer", "AI-Powered Web Builder"];

export default function App() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Certificates />
        <Resume />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold">
          Thanusri<span className="text-gradient">.</span>
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-sm">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          Hire Me <ArrowRight className="size-3.5" />
        </a>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="px-5 py-4 space-y-3">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-1.5 text-muted-foreground hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Typewriter() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [c, setC] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = ROLES[i];
    const t = setTimeout(
      () => {
        if (del) {
          setText(word.substring(0, c - 1));
          setC(c - 1);
          if (c - 1 === 0) {
            setDel(false);
            setI((i + 1) % ROLES.length);
          }
        } else {
          setText(word.substring(0, c + 1));
          setC(c + 1);
          if (c + 1 === word.length) setTimeout(() => setDel(true), 1400);
        }
      },
      del ? 40 : 80
    );
    return () => clearTimeout(t);
  }, [c, del, i]);
  return <span className="cursor-blink">{text}</span>;
}

function Hero() {
  return (
    <section id="home" className="pt-28 sm:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_minmax(0,1.2fr)] gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1 mx-auto lg:mx-0 animate-fade-up">
          <div className="absolute inset-0 -m-6 rounded-[2rem] blur-3xl opacity-60"
            style={{ background: "var(--gradient-hero)" }} />
          <div className="relative w-[280px] sm:w-[340px] h-[360px] sm:h-[440px] rounded-[2rem] overflow-hidden glass animate-float"
            style={{ boxShadow: "var(--shadow-glow)" }}>
            <img src={profile} alt="Thanusri P, Frontend Developer" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 flex items-center gap-2 text-xs whitespace-nowrap">
            <span className="size-2 rounded-full bg-green-400 animate-pulse" />
            Available for freelance work
          </div>
        </div>

        <div className="order-1 lg:order-2 animate-fade-up">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
            <Sparkles className="size-3.5 text-primary" />
            Frontend Developer · AI & Data Science Student
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Building Modern Websites & <span className="text-gradient">Digital Experiences</span> that Help Businesses Grow Online
          </h1>
          <div className="mt-5 text-lg sm:text-xl font-display font-medium text-muted-foreground">
            <Typewriter />
          </div>
          <p className="mt-5 text-muted-foreground max-w-xl leading-relaxed">
            I'm Thanusri P — I design and build clean, responsive, high-performance web applications with React.js, JavaScript, and modern tooling, blending solid frontend craft with an AI-driven workflow to ship faster without cutting corners.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition">
              Hire Me <ArrowRight className="size-4" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-sm font-medium border border-border hover:bg-muted transition">
              View Projects
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "3+", l: "Live Projects" },
              { n: "8+", l: "Core Tech" },
              { n: "100%", l: "Responsive" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">{s.n}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">{eyebrow}</div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-[1fr_1.5fr] gap-10 items-center">
        <div className="glass p-2 rounded-3xl overflow-hidden">
          <img src={profile} alt="Thanusri P" className="w-full aspect-[4/5] object-cover rounded-2xl" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">About Me</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
            A frontend developer who thinks in components and cares about the details.
          </h2>
          <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm <strong className="text-foreground">Thanusri P</strong>, a Frontend Developer and Artificial Intelligence & Data Science student passionate about creating modern, responsive, user-focused web applications.
            </p>
            <p>
              I specialize in <strong className="text-foreground">portfolio websites, business sites, landing pages, and interactive web apps</strong> using React.js, JavaScript, HTML, CSS, and modern tooling — with a focus on clean interfaces, optimized performance, and experiences that help businesses grow.
            </p>
          </div>
          <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm">
            {[
              "Modern, intentional UI design",
              "Fully responsive across devices",
              "Clean, maintainable architecture",
              "Fast, optimized builds",
              "Professional communication",
              "AI-assisted development workflow",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2">
                <Check className="size-4 text-primary mt-0.5 shrink-0" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow="Skills" title="The toolkit behind every build" sub="A focused stack for shipping production-ready frontend work — from interface to deployment." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((s) => (
            <div key={s.title} className="glass p-6 hover:-translate-y-1 transition">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="size-4 text-primary" />
                <h3 className="font-display font-semibold">{s.title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {s.items.map((i) => <li key={i} className="flex items-center gap-2"><span className="size-1 rounded-full bg-primary" />{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow="Services" title="What I can build for you" sub="End-to-end frontend services — from first wireframe to live deployment." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s) => (
            <div key={s.n} className="glass p-6 hover:-translate-y-1 transition group">
              <div className="font-display text-3xl font-bold text-gradient mb-3">{s.n}</div>
              <h3 className="font-display font-semibold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow="Featured Projects" title="Selected work" sub="A few projects that show how I approach problems — from AI-driven platforms to healthcare tooling." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="glass overflow-hidden flex flex-col hover:-translate-y-1 transition">
              <div className="aspect-[16/10] relative flex items-center justify-center font-display font-bold text-xl text-center px-4"
                style={{ background: "linear-gradient(135deg, oklch(0.30 0.08 290 / 0.7), oklch(0.25 0.08 200 / 0.7))" }}>
                <div className="absolute inset-0 opacity-30"
                  style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.05) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.05) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <span className="relative text-gradient">{p.title}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs uppercase tracking-widest text-primary mb-2">{p.tag}</div>
                <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-muted text-muted-foreground border border-border">{t}</span>
                  ))}
                </div>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80">
                    View Live Project <ExternalLink className="size-3.5" />
                  </a>
                ) : (
                  <span className="mt-auto text-sm text-muted-foreground">Source available on request</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow="Certificates" title="Continuous learning" sub="Credentials that back up a workflow built on React, modern JavaScript, and AI-assisted development." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((c) => (
            <div key={c.t} className="glass p-6 flex items-start gap-4 hover:-translate-y-1 transition">
              <div className="size-12 rounded-xl flex items-center justify-center bg-primary/15 text-primary shrink-0">
                <Award className="size-6" />
              </div>
              <div className="min-w-0">
                <h4 className="font-display font-semibold">{c.t}</h4>
                <span className="text-sm text-muted-foreground">{c.s}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="py-12">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="glass p-8 sm:p-10 grid sm:grid-cols-[1fr_auto] items-center gap-6"
          style={{ boxShadow: "var(--shadow-glow)" }}>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Resume</div>
            <h3 className="font-display text-2xl font-bold">Want the full breakdown?</h3>
            <p className="text-muted-foreground mt-2">Download my resume for a complete look at my skills, projects, and experience as a frontend developer.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition whitespace-nowrap">
            <Download className="size-4" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow="Testimonials" title="What clients say" sub="Feedback from people I've collaborated with on web projects." />
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.n} className="glass p-6">
              <MessageSquare className="size-5 text-primary mb-3" />
              <p className="text-sm leading-relaxed text-muted-foreground">"{t.q}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="size-10 rounded-full flex items-center justify-center font-display font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-hero)" }}>{t.n[0]}</div>
                <div>
                  <b className="block text-sm">{t.n}</b>
                  <span className="text-xs text-muted-foreground">{t.r}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("Send Message");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(String(data.get("subject") || "Portfolio enquiry"));
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:thanusripalraj@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Opening email…");
    setTimeout(() => setStatus("Send Message"), 2500);
  };
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow="Contact" title="Let's build something together" sub="Have a project in mind? Send a message and I'll get back to you shortly." />
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass p-7">
            <div className="flex items-center gap-3 mb-6">
              <img src={profile} alt="Thanusri P" className="size-14 rounded-full object-cover" />
              <div>
                <h4 className="font-display font-semibold">Thanusri P</h4>
                <span className="text-sm text-muted-foreground">Frontend & React Developer</span>
              </div>
            </div>
            {[
              { icon: Mail, label: "Email", value: "thanusripalraj@gmail.com", href: "mailto:thanusripalraj@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "thanusri-p", href: "https://www.linkedin.com/in/thanusri-p-589b60386" },
              { icon: Github, label: "GitHub", value: "github.com/thanu-sri5", href: "https://github.com/thanu-sri5" },
              { icon: MapPin, label: "Location", value: "India · Open to remote & international work" },
            ].map((r) => (
              <div key={r.label} className="flex items-start gap-3 py-3 border-t border-border first:border-t-0">
                <div className="size-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <r.icon className="size-4" />
                </div>
                <div className="min-w-0">
                  <b className="block text-xs uppercase tracking-widest text-muted-foreground">{r.label}</b>
                  {r.href ? (
                    <a href={r.href} target="_blank" rel="noreferrer" className="text-sm hover:text-primary break-words">{r.value}</a>
                  ) : (
                    <span className="text-sm break-words">{r.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit} className="glass p-7 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Name" placeholder="Your full name" required />
              <Field name="email" label="Email" type="email" placeholder="you@example.com" required />
            </div>
            <Field name="subject" label="Subject" placeholder="Project type, e.g. Landing Page" />
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 block">Message</label>
              <textarea name="message" required rows={5} placeholder="Tell me about your project..."
                className="w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button type="submit"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition">
              <Briefcase className="size-4" /> {status}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", placeholder, required }: { name: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 block">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder}
        className="w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-display text-lg font-bold">
          Thanusri<span className="text-gradient">.</span>
        </a>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="https://github.com/thanu-sri5" target="_blank" rel="noreferrer" className="hover:text-foreground inline-flex items-center gap-1.5"><Github className="size-4" /> GitHub</a>
          <a href="https://www.linkedin.com/in/thanusri-p-589b60386" target="_blank" rel="noreferrer" className="hover:text-foreground inline-flex items-center gap-1.5"><Linkedin className="size-4" /> LinkedIn</a>
          <a href="mailto:thanusripalraj@gmail.com" className="hover:text-foreground inline-flex items-center gap-1.5"><Mail className="size-4" /> Email</a>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Thanusri P</div>
      </div>
    </footer>
  );
}
