"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
    },
  }),
};

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Building modern, responsive web applications with up-to-date technologies.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Designing clear, elegant interfaces with intuitive user experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    desc: "Developing fast, polished mobile applications with a seamless feel.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero background"
            fill
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-6 text-white md:grid-cols-2">
          <div className="text-center md:text-left">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 text-sm uppercase tracking-[0.3em] text-yellow-400"
            >
              Hello, I am
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl"
            >
              Muhammad <span className="italic text-yellow-400">Faiq</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-8 max-w-xl text-lg text-gray-200 md:mx-0"
            >
              My journey in technology began at Batam State Polytechnic, where I
              studied Informatics Engineering and developed a strong interest in
              how software and AI can work together. Since then, I have focused
              on creating digital solutions that are not only functional, but
              also smooth and enjoyable for users.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-8 py-4 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                View Projects <ArrowRight size={16} />
              </Link>

              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto"
          >
            <div className="relative h-72 w-56 overflow-hidden rounded-2xl border-4 border-yellow-400/70 shadow-2xl shadow-black/40 md:h-96 md:w-72">
              <Image
                src="/images/diri.jpeg"
                alt="Portrait of Muhammad Faiq"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black px-6 py-32 text-white" id="projects">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 text-center"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
              Services
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              What I <span className="italic text-yellow-500">Offer</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-200/20 transition-colors group-hover:bg-yellow-200/30">
                  <service.icon size={24} className="text-yellow-600" />
                </div>

                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-center text-white" id="contact">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto max-w-3xl rounded-2xl border border-yellow-400/30 bg-white/5 px-6 py-10 shadow-xl shadow-black/30 md:px-10">
            <h2 className="mb-4 text-4xl font-bold">Contact Me</h2>
            <p className="mb-8 text-gray-300">
              Ready to collaborate on your next website, design, or application
              project.
            </p>
            <a
              href="/kontak"
              className="inline-block rounded-lg border border-yellow-400/50 bg-yellow-400 px-8 py-4 font-semibold text-black transition-opacity hover:opacity-90"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}