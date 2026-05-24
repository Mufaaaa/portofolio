"use client";

import { motion } from "framer-motion";
import { Code2, Database, Wrench, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
};

const coreCompetencies = [
  "Frontend Architecture with Next.js",
  "Backend Development with Node.js and Laravel",
  "REST API Design and Integration",
  "Database Management with MySQL",
  "AI Integration for Web Applications",
];

const techStack = {
  frontend: [
    "HTML/CSS",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  
  ],
  backend: [
    "Laravel",
    "Node.js",
    "REST APIs",
    "MySQL",
  ],
  tools: [
    "Git",
    "Vercel",
    "Cloudflare",
    "Linux",
  ],
  other: [
    "UI/UX Design",
    "System Design",
    "AI Integration",
    "Agile",
  ],
};

const aboutBadgeClass =
  "border-border/70 bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground font-body";

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
              I am a Full Stack Developer with a primary focus on frontend and
              backend web development. Over the course of four academic
              semesters, I contributed to the PBL (Project Based Learning)
              initiative by supporting the development of scalable applications
              and practical digital solutions.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-muted-foreground font-body">
              My technical experience includes modern frontend technologies such
              as React and Next.js, as well as backend implementation with
              Node.js and Laravel. I emphasize maintainable code structure,
              performance, and clear system design in each project.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground font-body">
              I am also currently studying AI integration for web applications
              to expand solution capabilities and improve user experience. This
              remains an active learning area, and I continuously improve
              through project-based practice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-lg border border-border/50 bg-card/50 p-6"
            >
              <h3 className="mb-4 text-lg font-semibold">Core Competencies</h3>
              <ul className="flex flex-wrap gap-2">
                {coreCompetencies.map((item) => (
                  <li key={item}>
                    <Badge variant="outline" className={`${aboutBadgeClass} leading-relaxed`}>
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 text-sm uppercase tracking-[0.3em] text-primary font-body"
          >
            Skills & Expertise
          </motion.p>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-4xl font-bold md:text-5xl"
          >
            My Tech Stack
          </motion.h2>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Frontend */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-lg border border-border/50 bg-card/50 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code2 size={24} className="text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Frontend</h3>
              <ul className="flex flex-wrap gap-2">
                {techStack.frontend.map((tech) => (
                  <li key={tech}>
                    <Badge variant="outline" className={aboutBadgeClass}>
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Backend */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-lg border border-border/50 bg-card/50 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Database size={24} className="text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Backend</h3>
              <ul className="flex flex-wrap gap-2">
                {techStack.backend.map((tech) => (
                  <li key={tech}>
                    <Badge variant="outline" className={aboutBadgeClass}>
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tools & Infra */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-lg border border-border/50 bg-card/50 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Wrench size={24} className="text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Tools & Infra</h3>
              <ul className="flex flex-wrap gap-2">
                {techStack.tools.map((tech) => (
                  <li key={tech}>
                    <Badge variant="outline" className={aboutBadgeClass}>
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Other */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-lg border border-border/50 bg-card/50 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Other</h3>
              <ul className="flex flex-wrap gap-2">
                {techStack.other.map((tech) => (
                  <li key={tech}>
                    <Badge variant="outline" className={aboutBadgeClass}>
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}