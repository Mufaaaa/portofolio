import Link from "next/link";
import { ChevronRight, Globe, Monitor } from "lucide-react";

type Project = {
	slug: string;
	title: string;
	category: string;
	description: string;
	stack: string[];
	highlights: string[];
	accent: string;
};

const projects: Project[] = [
	{
		slug: "penyewaan-alat-camping",
		title: "Camping Equipment Rental Management System",
		category: "Web App",
		description:
			"A PHP-based web rental platform for camping equipment with streamlined booking workflows, inventory control, and transaction tracking designed for day-to-day operations.",
		stack: ["PHP Native", "MySQL", "Bootstrap 5", "JavaScript", "AJAX", "SweetAlert2"],
		highlights: ["Inventory management", "Booking and returns flow", "Administrative dashboard"],
		accent: "from-blue-400/20 to-blue-500/5",
	},
	{
		slug: "sewa-baju-adat-nikah",
		title: "Traditional Wedding Attire Rental Platform",
		category: "Web App",
		description:
			"A web-based rental application for traditional wedding attire featuring an admin dashboard, transaction workflows, payment notifications, and structured data management.",
		stack: ["Laravel", "Blade", "MySQL", "Livewire", "Midtrans", "Filament", "Tailwind CSS"],
		highlights: ["Midtrans payment integration", "Filament admin panel", "Livewire real-time interactions"],
		accent: "from-sky-400/20 to-indigo-500/5",
	},
	{
		slug: "deteksi-dini-asma",
		title: "Early Asthma Detection Decision Support System",
		category: "Decision Support",
		description:
			"A decision support system for early asthma detection that integrates Laravel and FastAPI, leveraging a Random Forest model for prediction.",
		stack: ["Laravel", "Blade", "MySQL", "Filament", "FastAPI", "Random Forest", "Python"],
		highlights: ["ML-based prediction", "Data management panel", "FastAPI inference service"],
		accent: "from-cyan-400/20 to-blue-600/5",
	},
	{
		slug: "eduzi-gizi-stunting",
		title: "Eduzi - Digital Nutrition Education for Stunting Prevention",
		category: "Digital Learning",
		description:
			"A digital nutrition education platform for stunting prevention with informative content delivery, structured content management, and machine learning-powered intelligent features.",
		stack: ["Laravel", "Blade", "MySQL", "Filament", "FastAPI", "Machine Learning", "Python"],
		highlights: ["Nutrition-focused learning content", "FastAPI integration", "ML-powered intelligent features"],
		accent: "from-indigo-400/20 to-blue-700/5",
	},
];

export default function ProyekPage() {
	return (
		<main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_34%),linear-gradient(180deg,_#07111f_0%,_#020617_100%)] px-6 py-24 text-white">
			<section className="mx-auto max-w-6xl">
				<div className="mx-auto mb-14 max-w-3xl text-center">
					<p className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-400">
						Portfolio Projects
					</p>
					<h1 className="text-4xl font-bold leading-tight md:text-5xl">
						Featured Projects with Dedicated Detail Pages
					</h1>
					<p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
						This page highlights four core projects. Each card is connected to a dedicated detail page, making it easy to expand project content over time while keeping the overall structure consistent.
					</p>
				</div>

				<div className="mb-10 grid gap-4 sm:grid-cols-3">
					<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
						<p className="text-sm text-slate-400">Total Projects</p>
						<p className="mt-2 text-3xl font-bold text-blue-300">4</p>
					</div>
					<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
						<p className="text-sm text-slate-400">Detail Pages</p>
						<p className="mt-2 text-3xl font-bold text-blue-300">Ready</p>
					</div>
					<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
						<p className="text-sm text-slate-400">Core Stack</p>
						<p className="mt-2 text-3xl font-bold text-blue-300">Web + ML</p>
					</div>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{projects.map((project) => (
						<article
							key={project.slug}
							className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/35 hover:bg-white/[0.08]"
						>
							<div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
							<div className="relative">
								<div className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-slate-900/40 px-3 py-1 text-xs font-semibold tracking-wide text-blue-300">
									{project.category}
								</div>

								<h2 className="text-2xl font-bold leading-tight text-white">
									{project.title}
								</h2>
								<p className="mt-3 text-sm leading-7 text-slate-300">
									{project.description}
								</p>

								<div className="mt-5 space-y-2 text-sm text-slate-300">
									{project.highlights.map((highlight) => (
										<div key={highlight} className="flex items-start gap-2">
											<span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300" />
											<span>{highlight}</span>
										</div>
									))}
								</div>

								<div className="mt-5 flex flex-wrap gap-2">
									{project.stack.map((stack) => (
										<span
											key={`${project.slug}-${stack}`}
											className="rounded-full border border-white/10 bg-slate-900/45 px-3 py-1 text-xs text-slate-200"
										>
											{stack}
										</span>
									))}
								</div>

								<div className="mt-6 flex flex-wrap items-center gap-3">
									<Link
										href={`/proyek/${project.slug}`}
										className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
									>
										View Details
										<ChevronRight size={16} />
									</Link>

									<Link
										href="#"
										className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-blue-300/50 hover:text-blue-300"
									>
										<Globe size={16} />
										Live Demo
									</Link>

									<button
										type="button"
										className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-blue-300/50 hover:text-blue-300"								>
									<Monitor size={16} />
									UI Preview
								</button>
							</div>
						</div>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}