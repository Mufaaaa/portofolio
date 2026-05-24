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
		title: "Aplikasi Penyewaan Barang Alat Camping",
		category: "Web App",
		description:
			"Sistem penyewaan alat camping berbasis PHP native dengan alur pemesanan, pengelolaan stok, dan pencatatan transaksi yang sederhana tapi siap dipakai operasional.",
		stack: ["PHP Native", "MySQL", "Bootstrap 5", "JavaScript", "AJAX", "SweetAlert2"],
		highlights: ["Kelola stok alat", "Booking dan pengembalian", "Dashboard admin"],
		accent: "from-amber-400/20 to-yellow-500/5",
	},
	{
		slug: "sewa-baju-adat-nikah",
		title: "Aplikasi Penyewaan Baju Adat Nikah",
		category: "Web App",
		description:
			"Aplikasi penyewaan baju adat nikah berbasis web dengan dashboard admin, alur transaksi, notifikasi pembayaran, dan manajemen data yang lebih rapi.",
		stack: ["Laravel", "Blade", "MySQL", "Livewire", "Midtrans", "Filament", "Tailwind CSS"],
		highlights: ["Pembayaran Midtrans", "Admin panel Filament", "Interaksi real-time dengan Livewire"],
		accent: "from-orange-400/20 to-rose-500/5",
	},
	{
		slug: "deteksi-dini-asma",
		title: "Sistem Pendukung Keputusan Deteksi Dini Penyakit Asma",
		category: "Decision Support",
		description:
			"Sistem pendukung keputusan untuk membantu deteksi dini asma dengan integrasi Laravel dan FastAPI yang memanfaatkan model Random Forest untuk prediksi.",
		stack: ["Laravel", "Blade", "MySQL", "Filament", "FastAPI", "Random Forest", "Python"],
		highlights: ["Prediksi berbasis ML", "Panel pengelolaan data", "API FastAPI untuk inferensi"],
		accent: "from-emerald-400/20 to-cyan-500/5",
	},
	{
		slug: "eduzi-gizi-stunting",
		title: "Eduzi - Media Edukasi Gizi Digital dalam Pencegahan Stunting",
		category: "Digital Learning",
		description:
			"Platform edukasi gizi digital untuk pencegahan stunting dengan tampilan informatif, pengelolaan konten, dan dukungan machine learning untuk fitur cerdas.",
		stack: ["Laravel", "Blade", "MySQL", "Filament", "FastAPI", "Machine Learning", "Python"],
		highlights: ["Konten edukasi gizi", "Integrasi FastAPI", "Fitur cerdas berbasis ML"],
		accent: "from-sky-400/20 to-indigo-500/5",
	},
];

export default function ProyekPage() {
	return (
		<main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),_transparent_34%),linear-gradient(180deg,_#090909_0%,_#000000_100%)] px-6 py-24 text-white">
			<section className="mx-auto max-w-6xl">
				<div className="mx-auto mb-14 max-w-3xl text-center">
					<p className="mb-3 text-sm uppercase tracking-[0.35em] text-yellow-400">
						Portfolio Projects
					</p>
					<h1 className="text-4xl font-bold leading-tight md:text-5xl">
						Empat Project Utama yang Bisa Dibuka Detailnya Satu per Satu
					</h1>
					<p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
						Halaman ini menampilkan ringkasan 4 project utama. Setiap kartu sudah disiapkan ke halaman detail per project, jadi nanti tinggal isi isiannya lebih lengkap tanpa mengubah struktur besar halaman.
					</p>
				</div>

				<div className="mb-10 grid gap-4 sm:grid-cols-3">
					<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
						<p className="text-sm text-zinc-400">Total Project</p>
						<p className="mt-2 text-3xl font-bold text-yellow-300">4</p>
					</div>
					<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
						<p className="text-sm text-zinc-400">Detail Page</p>
						<p className="mt-2 text-3xl font-bold text-yellow-300">Ready</p>
					</div>
					<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
						<p className="text-sm text-zinc-400">Stack Utama</p>
						<p className="mt-2 text-3xl font-bold text-yellow-300">Web + ML</p>
					</div>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{projects.map((project) => (
						<article
							key={project.slug}
							className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/35 hover:bg-white/[0.08]"
						>
							<div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
							<div className="relative">
								<div className="mb-4 inline-flex rounded-full border border-yellow-400/30 bg-black/30 px-3 py-1 text-xs font-semibold tracking-wide text-yellow-300">
									{project.category}
								</div>

								<h2 className="text-2xl font-bold leading-tight text-white">
									{project.title}
								</h2>
								<p className="mt-3 text-sm leading-7 text-zinc-300">
									{project.description}
								</p>

								<div className="mt-5 space-y-2 text-sm text-zinc-300">
									{project.highlights.map((highlight) => (
										<div key={highlight} className="flex items-start gap-2">
											<span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-300" />
											<span>{highlight}</span>
										</div>
									))}
								</div>

								<div className="mt-5 flex flex-wrap gap-2">
									{project.stack.map((stack) => (
										<span
											key={`${project.slug}-${stack}`}
											className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-zinc-200"
										>
											{stack}
										</span>
									))}
								</div>

								<div className="mt-6 flex flex-wrap items-center gap-3">
									<Link
										href={`/proyek/${project.slug}`}
										className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
									>
										Lihat Detail
										<ChevronRight size={16} />
									</Link>

									<Link
										href="#"
										className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-yellow-300/50 hover:text-yellow-300"
									>
										<Globe size={16} />
										Live Demo
									</Link>

									<button
										type="button"
										className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-yellow-300/50 hover:text-yellow-300"
									>
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
