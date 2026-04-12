"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
};

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Node.js", level: 88 },
  { name: "Figma", level: 80 },
];

const stats = [
  { icon: Briefcase, value: "50+", label: "Completed Projects" },
  { icon: Heart, value: "30+", label: "Satisfied Clients" },
  { icon: Award, value: "5+", label: "Years of Experience" },
  { icon: GraduationCap, value: "10+", label: "Certifications" },
];

export default function TentangPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 text-sm uppercase tracking-[0.3em] text-primary font-body"
          >
            About Me
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl font-bold leading-tight md:text-6xl"
          >
            The Story Behind the
            <span className="italic text-gradient-gold"> Work</span>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl items-start gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground font-body">
              I am a designer and developer who is passionate about creating
              meaningful digital experiences. With more than five years of
              experience, I have helped businesses turn their digital vision
              into practical products.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground font-body">
              I believe great design is not only about aesthetics, but also
              about solving real problems and building intuitive user
              experiences. Every project is an opportunity to learn and grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm font-medium font-body">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground font-body">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-card/50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <stat.icon size={24} className="text-primary" />
              </div>
              <p className="text-3xl font-bold text-gradient-gold">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground font-body">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}