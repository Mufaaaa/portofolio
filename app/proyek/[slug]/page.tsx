import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, FileText, Layers3 } from "lucide-react";
import { notFound } from "next/navigation";

type ProjectDetail = {
	title: string;
	category: string;
	description: string;
	stack: string[];
	highlights: string[];
	images?: { src: string; alt: string }[];
	overview: string;
	timeline: string;
};

const projectDetails: Record<string, ProjectDetail> = {
	"penyewaan-alat-camping": {
		title: "Camping Equipment Rental Management System",
		category: "Web App",
		description:
			"A PHP-based rental platform for camping equipment focused on booking flows, inventory management, and day-to-day transaction tracking.",
		stack: ["PHP Native", "MySQL", "Bootstrap 5", "JavaScript", "AJAX", "SweetAlert2"],
		highlights: ["Inventory management", "Rental and return records", "Lightweight admin dashboard"],
		images: [
			{ src: "/images/rentrail/Landing.png", alt: "Camping rental app landing page" },
			{ src: "/images/rentrail/Home.png", alt: "Camping rental app home page" },
			{ src: "/images/rentrail/Katalog.png", alt: "Camping equipment catalog view" },
			{ src: "/images/rentrail/Login.png", alt: "Camping rental app login page" },
		],
		overview:
			"Built to simplify manual rental operations by centralizing stock visibility, booking, and transaction records in one web interface.",
		timeline: "Planning, core feature development, integration testing, and deployment preparation.",
	},
	"sewa-baju-adat-nikah": {
		title: "Traditional Wedding Attire Rental Platform",
		category: "Web App",
		description:
			"A Laravel-based web platform for traditional wedding attire rentals with structured transaction workflows and payment processing.",
		stack: ["Laravel", "Blade", "MySQL", "Livewire", "Midtrans", "Filament", "Tailwind CSS"],
		highlights: ["Midtrans online payments", "Filament admin panel", "Dynamic Livewire interactions"],
		images: [
			{ src: "/images/wuw/Landing.png", alt: "Wedding attire rental landing page" },
			{ src: "/images/wuw/cari baju.png", alt: "Wedding attire search experience" },
			{ src: "/images/wuw/keranjang.png", alt: "Rental cart interface" },
			{ src: "/images/wuw/riwayat.png", alt: "Rental history view" },
		],
		overview:
			"Designed to improve rental business operations through clear catalog browsing, smooth checkout, and reliable transaction management.",
		timeline: "UX planning, payment gateway integration, admin workflow setup, and production rollout.",
	},
	"deteksi-dini-asma": {
		title: "Early Asthma Detection Decision Support System",
		category: "Decision Support",
		description:
			"A decision support application for early asthma detection that combines Laravel, FastAPI, and a Random Forest model.",
		stack: ["Laravel", "Blade", "MySQL", "Filament", "FastAPI", "Random Forest", "Python"],
		highlights: ["Machine learning-based prediction", "FastAPI inference service", "Filament-powered data management"],
		images: [
			{ src: "/images/asthmacare/landing.png", alt: "Asthma detection app landing page" },
			{ src: "/images/asthmacare/artikel.png", alt: "Asthma education article section" },
			{ src: "/images/asthmacare/fitur.png", alt: "Asthma platform feature overview" },
			{
				src: "/images/asthmacare/form%20pertanyaan%20terkait%20asma.png",
				alt: "Asthma symptom assessment form",
			},
		],
		overview:
			"Developed to support faster preliminary screening by translating symptom inputs into data-driven risk predictions.",
		timeline: "Data preparation, model training and validation, API integration, and application testing.",
	},
	"eduzi-gizi-stunting": {
		title: "Eduzi - Digital Nutrition Education for Stunting Prevention",
		category: "Digital Learning",
		description:
			"A digital nutrition education platform for stunting prevention with structured content delivery and intelligent features powered by machine learning.",
		stack: ["Laravel", "Blade", "MySQL", "Filament", "FastAPI", "Machine Learning", "Python"],
		highlights: ["Nutrition-focused educational content", "ML-enhanced intelligent features", "Content management admin panel"],
		overview:
			"Created to improve access to practical nutrition knowledge for families and communities through an accessible digital learning experience.",
		timeline: "Requirements research, content architecture, core feature implementation, and system integration.",
	},
};

type ProjectDetailPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
	const { slug } = await params;
	const project = projectDetails[slug];

	if (!project) {
		notFound();
	}

	return (
		<main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),_transparent_34%),linear-gradient(180deg,_#090909_0%,_#000000_100%)] px-6 py-24 text-white">
			<section className="mx-auto max-w-5xl">
				<Link
					href="/proyek"
					className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-yellow-300/40 hover:text-yellow-300"
				>
					<ArrowLeft size={16} />
					Back to projects
				</Link>

				<div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
					<div className="rounded-3xl border border-white/10 bg-white/5 p-8">
						<p className="text-sm uppercase tracking-[0.3em] text-yellow-400">Project Details</p>
						<h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{project.title}</h1>
						<p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">{project.description}</p>

						<div className="mt-6 flex flex-wrap gap-2">
							{project.stack.map((item) => (
								<span key={item} className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-zinc-200">
									{item}
								</span>
							))}
						</div>

						<div className="mt-8 space-y-5">
								{project.images ? (
									<div className="rounded-3xl border border-white/10 bg-black/20 p-4 sm:p-5">
										<h2 className="text-lg font-bold text-white">Application Gallery</h2>

										<div className="mt-4 grid gap-4 sm:grid-cols-2">
											{project.images.map((image) => (
												<Link
													key={image.src}
													href={image.src}
													target="_blank"
													rel="noreferrer noopener"
													aria-label={`Open ${image.alt}`}
													className="group block overflow-hidden rounded-2xl border border-white/10 bg-black/30 transition-transform duration-300 hover:-translate-y-0.5"
												>
													<div className="relative aspect-[4/3] w-full">
														<Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
													</div>
													<div className="border-t border-white/10 px-4 py-3 text-xs text-zinc-300">
														{image.alt}
													</div>
												</Link>
											))}
										</div>
									</div>
								) : null}

							<div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 p-4">
								<FileText className="mt-0.5 shrink-0 text-yellow-300" size={18} />
								<div>
									<p className="text-sm font-semibold text-white">Overview</p>
									<p className="mt-1 text-sm leading-7 text-zinc-300">{project.overview}</p>
								</div>
							</div>

							<div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 p-4">
								<Layers3 className="mt-0.5 shrink-0 text-yellow-300" size={18} />
								<div>
									<p className="text-sm font-semibold text-white">Timeline</p>
									<p className="mt-1 text-sm leading-7 text-zinc-300">{project.timeline}</p>
								</div>
							</div>
						</div>
					</div>

					<aside className="rounded-3xl border border-white/10 bg-white/5 p-8">
						<div className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">
							{project.category}
						</div>

						<h2 className="mt-5 text-xl font-bold text-white">Project Highlights</h2>
						<div className="mt-4 space-y-3 text-sm text-zinc-300">
							{project.highlights.map((item) => (
								<div key={item} className="flex items-start gap-2">
									<span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-300" />
									<span>{item}</span>
								</div>
							))}
						</div>

						<Link
							href="/proyek"
							className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
						>
							<ChevronRight size={16} />
							View other projects
						</Link>
					</aside>
				</div>
			</section>
		</main>
	);
}