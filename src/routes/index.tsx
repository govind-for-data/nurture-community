import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider, useLang } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import { Heart, Users, Sprout, BookOpen, Stethoscope, Mail, Phone, MapPin, Languages } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aasha Foundation — Empowering Rural India" },
      { name: "description", content: "Aasha Foundation is a non-profit working on rural education, healthcare, women empowerment and the environment across India." },
      { property: "og:title", content: "Aasha Foundation — Empowering Rural India" },
      { property: "og:description", content: "Join us in transforming villages through education, healthcare and sustainable livelihoods." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}

function Site() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Upcoming />
        <Impact />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "hi" : "en")}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition hover:bg-secondary"
      aria-label="Switch language"
    >
      <Languages className="h-4 w-4 text-primary" />
      <span className={lang === "en" ? "font-semibold text-primary" : "text-muted-foreground"}>EN</span>
      <span className="text-muted-foreground">/</span>
      <span className={lang === "hi" ? "font-semibold text-primary" : "text-muted-foreground"}>हिंदी</span>
    </button>
  );
}

function Header() {
  const { t } = useLang();
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#work", label: t.nav.work },
    { href: "#upcoming", label: t.nav.upcoming },
    { href: "#impact", label: t.nav.impact },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "var(--gradient-warm)" }}>
            <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
          </div>
          <span className="text-lg font-bold tracking-tight">Aasha Foundation</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch />
          <a href="#cta" className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition hover:opacity-90 sm:inline-block">
            {t.nav.donate}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24 md:gap-12">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            <Sprout className="h-3.5 w-3.5 text-primary" /> {t.hero.tag}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-accent-foreground shadow-md transition hover:translate-y-[-1px]" style={{ background: "var(--gradient-sun)", boxShadow: "var(--shadow-soft)" }}>
              <Heart className="h-4 w-4" fill="currentColor" /> {t.hero.cta1}
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-semibold text-primary transition hover:bg-secondary">
              <Users className="h-4 w-4" /> {t.hero.cta2}
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-secondary/50 blur-2xl" aria-hidden />
          <img src={heroImg} alt="Children at an Aasha Foundation school" width={1600} height={1024} className="relative h-full w-full rounded-3xl object-cover shadow-2xl" />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{kicker}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full" style={{ background: "var(--gradient-sun)" }} />
    </div>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker={t.about.kicker} title={t.about.title} />
        <p className="mx-auto max-w-3xl text-center text-lg text-muted-foreground">{t.about.body}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Sprout className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{t.about.missionTitle}</h3>
            <p className="mt-2 text-muted-foreground">{t.about.mission}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <Heart className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">{t.about.visionTitle}</h3>
            <p className="mt-2 text-muted-foreground">{t.about.vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const workIcons = [BookOpen, Stethoscope, Users, Sprout];

function Work() {
  const { t } = useLang();
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker={t.work.kicker} title={t.work.title} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.work.items.map((it, i) => {
            const Icon = workIcons[i];
            return (
              <div key={i} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Upcoming() {
  const { t } = useLang();
  return (
    <section id="upcoming" className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker={t.upcoming.kicker} title={t.upcoming.title} />
        <div className="grid gap-6 md:grid-cols-2">
          {t.upcoming.items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">{it.tag}</span>
              <h3 className="mt-3 text-xl font-bold">{it.title}</h3>
              <p className="mt-2 text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const { t } = useLang();
  return (
    <section id="impact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker={t.impact.kicker} title={t.impact.title} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.impact.stats.map((s, i) => (
            <div key={i} className="rounded-2xl p-8 text-center text-primary-foreground shadow-lg" style={{ background: "var(--gradient-warm)" }}>
              <div className="text-4xl font-extrabold tracking-tight md:text-5xl">{s.n}</div>
              <div className="mt-2 text-sm uppercase tracking-wider opacity-90">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const { t } = useLang();
  const imgs = [g1, g2, g3, g4];
  return (
    <section id="gallery" className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker={t.gallery.kicker} title={t.gallery.title} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {imgs.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-md">
              <img src={src} alt="" loading="lazy" width={800} height={800} className="aspect-square h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useLang();
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker={t.testimonials.kicker} title={t.testimonials.title} />
        <div className="grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((it, i) => (
            <figure key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="text-4xl leading-none text-accent">"</div>
              <blockquote className="mt-2 text-foreground">{it.quote}</blockquote>
              <figcaption className="mt-4 border-t border-border pt-4">
                <div className="font-semibold">{it.name}</div>
                <div className="text-sm text-muted-foreground">{it.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { t } = useLang();
  return (
    <section id="cta" className="px-4 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl p-10 text-center text-primary-foreground shadow-2xl md:p-16" style={{ background: "var(--gradient-warm)" }}>
        <h2 className="text-3xl font-bold md:text-4xl">{t.cta.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl opacity-95">{t.cta.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-md transition hover:opacity-90">
            <Heart className="h-4 w-4" fill="currentColor" /> {t.cta.donate}
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-transparent px-6 py-3 text-sm font-semibold transition hover:bg-primary-foreground/10">
            <Users className="h-4 w-4" /> {t.cta.volunteer}
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker={t.contact.kicker} title={t.contact.title} />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></div>
              <div><div className="font-semibold">{t.contact.addressLabel}</div><div className="text-muted-foreground">{t.contact.address}</div></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Phone className="h-5 w-5" /></div>
              <div><div className="font-semibold">{t.contact.phoneLabel}</div><div className="text-muted-foreground">+91 98100 12345</div></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Mail className="h-5 w-5" /></div>
              <div><div className="font-semibold">{t.contact.emailLabel}</div><div className="text-muted-foreground">hello@aashafoundation.org</div></div>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <input type="text" placeholder={t.contact.name} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <input type="email" placeholder={t.contact.email} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <textarea placeholder={t.contact.message} rows={5} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
              {t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "var(--gradient-warm)" }}>
            <Heart className="h-4 w-4 text-primary-foreground" fill="currentColor" />
          </div>
          <span className="font-semibold text-foreground">Aasha Foundation</span>
        </div>
        <p className="text-center">{t.footer.tagline}</p>
        <p>© {new Date().getFullYear()} · {t.footer.rights}</p>
      </div>
    </footer>
  );
}
