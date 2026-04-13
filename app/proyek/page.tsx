import Link from "next/link";
import { ArrowUpRight, Globe, Monitor } from "lucide-react";

const projects = [
	{
		title: "Construction Company Profile Website",
		category: "Company Profile",
		description:
			"A professional company profile website featuring service pages, project showcases, and lead-generation forms.",
		tech: ["Next.js", "TypeScript", "Tailwind CSS"],
		liveUrl: "#",
	},
	{
		title: "Interior Service Landing Page",
		category: "Landing Page",
		description:
			"A conversion-focused landing page for ad campaigns, complete with strategic CTAs, testimonials, and FAQs.",
		tech: ["React", "Framer Motion", "Tailwind CSS"],
		liveUrl: "#",
	},
	{
		title: "Photo Studio Booking System",
		category: "Web App",
		description:
			"A booking web application with schedule management, time-slot control, booking status tracking, and an admin dashboard.",
		tech: ["Next.js", "Node.js", "PostgreSQL"],
		liveUrl: "#",
	},
	{
		title: "Fashion E-Commerce Website",
		category: "E-Commerce",
		description:
			"A responsive online store with product catalog, shopping cart, and a streamlined checkout flow.",
		tech: ["Next.js", "Stripe", "Prisma"],
		liveUrl: "#",
	},
	{
		title: "School Information Portal",
		category: "Education",
		description:
			"An education portal for publishing news, events, galleries, and official announcements.",
		tech: ["Next.js", "TypeScript", "Supabase"],
		liveUrl: "#",
	},
	{
		title: "Sales Monitoring Dashboard",
		category: "Dashboard",
		description:
			"A sales analytics dashboard with KPI summaries, performance charts, and flexible date-range filtering.",
		tech: ["React", "Recharts", "Tailwind CSS"],
		liveUrl: "#",
	},
];

export default function ProyekPage() {
	return (
		<main className="min-h-screen bg-black px-6 py-20 text-white">
			<section className="mx-auto max-w-6xl">
				<div className="mb-14 text-center">
					<p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
						Portfolio
					</p>
					<h1 className="text-4xl font-bold md:text-5xl">
						Selected Projects
					</h1>
					<p className="mx-auto mt-4 max-w-2xl text-gray-300">
						A curated selection of projects highlighting my experience in full-stack development, product execution, and user-focused solutions.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{projects.map((project) => (
						<article
							key={project.title}
							className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/10"
						>
							<div className="mb-4 inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">
								{project.category}
							</div>

							<h2 className="mb-3 text-xl font-bold leading-snug">{project.title}</h2>
							<p className="mb-5 text-sm leading-relaxed text-gray-300">
								{project.description}
							</p>

							<div className="mb-6 flex flex-wrap gap-2">
								{project.tech.map((stack) => (
									<span
										key={`${project.title}-${stack}`}
										className="rounded-md bg-black/40 px-2.5 py-1 text-xs text-gray-200"
									>
										{stack}
									</span>
								))}
							</div>

							<div className="flex items-center gap-3">
								<Link
									href={project.liveUrl}
									className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
								>
									<Globe size={16} />
									Live Demo
									<ArrowUpRight size={15} />
								</Link>

								<button
									type="button"
									className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-yellow-300/50 hover:text-yellow-300"
								>
									<Monitor size={16} />
									UI Preview
								</button>
							</div>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
