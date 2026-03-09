import { Link } from "react-router-dom";
import { Heart, Stethoscope, Brain, Pill, Video, Shield, ArrowRight, Users, MapPin, Play, ChevronDown, Sparkles, Activity, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  { icon: Brain, title: "AI Symptom Checker", description: "Describe your symptoms and get instant AI-powered health assessments with urgency classification.", video: "https://videos.pexels.com/video-files/7579953/7579953-uhd_1440_2560_25fps.mp4" },
  { icon: Video, title: "Video Consultations", description: "Connect face-to-face with qualified doctors from the comfort of your village.", video: "https://videos.pexels.com/video-files/5765826/5765826-uhd_2560_1440_25fps.mp4" },
  { icon: Pill, title: "Medicine Finder", description: "Search nearby pharmacies to find available medicines and check stock in real-time.", video: "https://videos.pexels.com/video-files/7579576/7579576-uhd_1440_2560_25fps.mp4" },
  { icon: Shield, title: "Health Records", description: "Secure digital health records accessible anytime, with past consultations and prescriptions.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" },
  { icon: Users, title: "Doctor Network", description: "Access a curated network of specialist doctors serving rural communities.", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80" },
  { icon: MapPin, title: "Works Offline", description: "Designed as a PWA for low-bandwidth areas. Access key features even without internet.", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80" },
];

const stats = [
  { value: "10K+", label: "Patients Served", icon: Users },
  { value: "500+", label: "Village Coverage", icon: MapPin },
  { value: "200+", label: "Doctors Available", icon: Stethoscope },
  { value: "95%", label: "Satisfaction Rate", icon: Heart },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const LandingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero with HD Video Background */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80"
        >
          <source src="https://videos.pexels.com/video-files/5727600/5727600-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 video-overlay" />

        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-secondary/10 blur-[100px]"
          />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container relative z-10 mx-auto max-w-5xl text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary-foreground backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-secondary" />
              AI-Powered Rural Healthcare Platform
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 font-display text-5xl font-bold leading-[1.1] text-primary-foreground md:text-7xl lg:text-8xl"
          >
            Quality Healthcare,
            <br />
            <span className="text-gradient">Wherever You Are</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/70 md:text-xl font-body"
          >
            RuralCare connects patients in remote villages with doctors, AI diagnosis, and nearby pharmacies — all from your phone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link to="/register">
              <Button size="lg" className="gap-2 text-base font-semibold px-8 h-14 rounded-xl gradient-hero border-0 text-primary-foreground pulse-glow">
                Start Free Consultation <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/symptom-checker">
              <Button size="lg" variant="outline" className="gap-2 text-base font-semibold px-8 h-14 rounded-xl border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
                <Brain className="h-4 w-4" /> Check Symptoms
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* Stats with glass cards */}
      <section className="relative -mt-20 z-20 px-4">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                className="glass rounded-2xl p-6 text-center shadow-elevated"
              >
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                <div className="font-display text-3xl font-bold text-gradient md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features with media */}
      <section className="py-24 px-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
              <Activity className="h-4 w-4" />
              Platform Features
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-5xl">
              Everything You Need for
              <br />
              <span className="text-gradient">Rural Healthcare</span>
            </h2>
            <p className="text-muted-foreground text-lg">Built for low-bandwidth environments with simple, mobile-first interfaces.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-elevated"
              >
                {/* Media thumbnail */}
                <div className="relative h-40 overflow-hidden">
                  {'video' in f && f.video ? (
                    <video
                      autoPlay muted loop playsInline
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    >
                      <source src={f.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={f.image}
                      alt={f.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/90 backdrop-blur-sm shadow-lg">
                    <f.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video showcase section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="https://videos.pexels.com/video-files/5726806/5726806-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 video-overlay" />
        </div>
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 font-display text-3xl font-bold text-primary-foreground md:text-5xl">
              See How It <span className="text-gradient">Works</span>
            </h2>
            <p className="mb-10 text-lg text-primary-foreground/70">Watch how RuralCare is transforming healthcare access for millions in underserved communities.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-20 w-20 items-center justify-center rounded-full gradient-hero cursor-pointer pulse-glow"
            >
              <Play className="h-8 w-8 text-primary-foreground ml-1" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 bg-muted/40">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center font-display text-3xl font-bold text-foreground md:text-5xl"
          >
            Four Simple <span className="text-gradient">Steps</span>
          </motion.h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Register", desc: "Create your health profile in under 2 minutes", icon: Users, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80" },
              { step: "02", title: "Check Symptoms", desc: "AI analyzes your symptoms and suggests urgency", icon: Brain, image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80" },
              { step: "03", title: "Consult Doctor", desc: "Video call with a qualified doctor instantly", icon: Video, image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&q=80" },
              { step: "04", title: "Get Medicine", desc: "Find prescribed medicines at nearby pharmacies", icon: Pill, image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group text-center"
              >
                <div className="relative mx-auto mb-5 h-40 w-full overflow-hidden rounded-2xl">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 font-display text-3xl font-bold text-primary-foreground/40">{item.step}</div>
                  <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary/80 backdrop-blur-sm">
                    <item.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section className="py-24 px-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl shadow-elevated"
          >
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1920&q=80" alt="Healthcare" className="h-full w-full object-cover" />
              <div className="absolute inset-0 gradient-hero opacity-90" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center px-8 py-16 text-center md:py-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Clock className="mx-auto mb-4 h-10 w-10 text-primary-foreground/60" />
                <blockquote className="mx-auto max-w-2xl font-display text-2xl font-medium leading-relaxed text-primary-foreground md:text-3xl">
                  "RuralCare saved my mother's life. The AI detected high urgency and we got to the hospital in time."
                </blockquote>
                <p className="mt-6 text-primary-foreground/70">— Ravi Kumar, Uttar Pradesh Village</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl gradient-hero p-12 text-center shadow-elevated md:p-16"
          >
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary-foreground/5 blur-xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary-foreground/5 blur-xl" />

            <div className="relative z-10">
              <Stethoscope className="mx-auto mb-5 h-14 w-14 text-primary-foreground/70" />
              <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-5xl">Ready to Get Started?</h2>
              <p className="mb-10 text-lg text-primary-foreground/70">Join thousands of rural patients already receiving quality healthcare through RuralCare.</p>
              <Link to="/register">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="bg-primary-foreground text-foreground font-semibold px-10 h-14 rounded-xl text-base hover:bg-primary-foreground/90">
                    Register Now — It's Free
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 px-4">
        <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-hero">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">RuralCare</span>
          </div>
          <div className="flex gap-6">
            <Link to="/symptom-checker" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Symptoms</Link>
            <Link to="/medicine-search" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Medicine</Link>
            <Link to="/register" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Register</Link>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 RuralCare. Bridging healthcare gaps.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
