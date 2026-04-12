import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Smartphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Faiq — Developer & Designer" },
      { name: "description", content: "Portfolio pribadi Muhammad Faiq. Developer dan desainer kreatif." },
      { property: "og:title", content: "Muhammad Faiq — Developer & Designer" },
      { property: "og:description", content: "Portfolio pribadi Muhammad Faiq. Developer dan desainer kreatif." },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const services = [
  { icon: Code2, title: "Web Development", desc: "Membangun aplikasi web modern dan responsif dengan teknologi terkini." },
  { icon: Palette, title: "UI/UX Design", desc: "Merancang antarmuka yang indah dan pengalaman pengguna yang intuitif." },
  { icon: Smartphone, title: "Mobile App", desc: "Mengembangkan aplikasi mobile yang cepat dan elegan." },
];

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm uppercase tracking-[0.3em] text-primary mb-6 font-body"
          >
            Halo, saya
          </motion.p>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
          >
            Muhammad{" "}
            <span className="text-gradient-gold italic">Faiq</span>
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto font-body"
          >
            Developer & desainer yang bersemangat menciptakan pengalaman digital yang memukau dan solusi kreatif untuk setiap tantangan.
          </motion.p>
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/proyek"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Lihat Proyek <ArrowRight size={16} />
            </Link>
            <Link
              to="/kontak"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-lg font-body font-semibold text-sm hover:bg-secondary transition-colors"
            >
              Hubungi Saya
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">Layanan</p>
            <h2 className="text-4xl md:text-5xl font-bold">Apa yang Saya <span className="italic text-gradient-gold">Tawarkan</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
