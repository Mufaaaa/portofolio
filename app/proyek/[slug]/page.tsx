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
	status: string;
};

const projectDetails: Record<string, ProjectDetail> = {
	"penyewaan-alat-camping": {
		title: "Aplikasi Penyewaan Barang Alat Camping",
		category: "Web App",
		description:
			"Aplikasi penyewaan barang alat camping berbasis PHP native yang fokus pada alur stok, pemesanan, dan transaksi sederhana untuk operasional harian.",
		stack: ["PHP Native", "MySQL", "Bootstrap 5", "JavaScript", "AJAX", "SweetAlert2"],
		highlights: ["Manajemen stok alat", "Pencatatan sewa dan pengembalian", "Dashboard admin sederhana"],
		images: [
			{ src: "/images/rentrail/Landing.png", alt: "Tampilan landing page aplikasi sewa alat camping" },
			{ src: "/images/rentrail/Home.png", alt: "Tampilan halaman home aplikasi sewa alat camping" },
			{ src: "/images/rentrail/Katalog.png", alt: "Tampilan katalog alat camping" },
			{ src: "/images/rentrail/Login.png", alt: "Tampilan halaman login aplikasi sewa alat camping" },
		],
		overview:
			"Bagian ini bisa dipakai untuk menjelaskan masalah yang diselesaikan, alur pengguna, dan alasan pemilihan teknologi pada project camping rental.",
		timeline: "Isi di sini dengan fase pengerjaan, misalnya analisis, implementasi, dan testing.",
		status: "Detail project siap diisi dengan dokumentasi lengkap, screenshot, atau link demo.",
	},
	"sewa-baju-adat-nikah": {
		title: "Aplikasi Penyewaan Baju Adat Nikah",
		category: "Web App",
		description:
			"Aplikasi penyewaan baju adat nikah berbasis web dengan Laravel, Livewire, Midtrans, dan Filament untuk pengelolaan transaksi yang lebih rapi.",
		stack: ["Laravel", "Blade", "MySQL", "Livewire", "Midtrans", "Filament", "Tailwind CSS"],
		highlights: ["Pembayaran online Midtrans", "Admin panel Filament", "Interaksi dinamis dengan Livewire"],
		images: [
			{ src: "/images/wuw/Landing.png", alt: "Tampilan landing page aplikasi penyewaan baju adat nikah" },
			{ src: "/images/wuw/cari baju.png", alt: "Tampilan pencarian baju adat pada aplikasi" },
			{ src: "/images/wuw/keranjang.png", alt: "Tampilan keranjang sewa baju adat" },
			{ src: "/images/wuw/riwayat.png", alt: "Tampilan riwayat penyewaan baju adat" },
		],
		overview:
			"Area ini cocok untuk menjelaskan proses pemesanan, konfirmasi pembayaran, dan flow administrasi penyewaan baju adat nikah.",
		timeline: "Tambahkan urutan pengerjaan dari desain, integrasi payment gateway, sampai deployment.",
		status: "Cocok untuk menaruh dokumentasi fitur, flow transaksi, dan hasil implementasi akhir.",
	},
	"deteksi-dini-asma": {
		title: "Sistem Pendukung Keputusan Deteksi Dini Penyakit Asma",
		category: "Decision Support",
		description:
			"Sistem pendukung keputusan untuk deteksi dini penyakit asma yang memadukan Laravel, FastAPI, dan model Random Forest.",
		stack: ["Laravel", "Blade", "MySQL", "Filament", "FastAPI", "Random Forest", "Python"],
		highlights: ["Prediksi berbasis machine learning", "API FastAPI untuk inferensi", "Pengelolaan data lewat Filament"],
		images: [
			{ src: "/images/asthmacare/landing.png", alt: "Tampilan landing page aplikasi deteksi dini asma" },
			{ src: "/images/asthmacare/artikel.png", alt: "Tampilan artikel edukasi asma" },
			{ src: "/images/asthmacare/fitur.png", alt: "Tampilan fitur aplikasi asma" },
			{
				src: "/images/asthmacare/form%20pertanyaan%20terkait%20asma.png",
				alt: "Tampilan form pertanyaan terkait asma",
			},
		],
		overview:
			"Tambahkan penjelasan mengenai fitur input gejala, proses prediksi, dan bagaimana hasil diagnosis ditampilkan ke pengguna.",
		timeline: "Isi dengan detail pelatihan model, validasi data, dan integrasi API ke aplikasi Laravel.",
		status: "Tempat ini bisa dipakai untuk menaruh metrik model, confusion matrix, atau hasil evaluasi lain.",
	},
	"eduzi-gizi-stunting": {
		title: "Eduzi - Media Edukasi Gizi Digital dalam Pencegahan Stunting",
		category: "Digital Learning",
		description:
			"Platform edukasi gizi digital untuk pencegahan stunting dengan Laravel, FastAPI, dan machine learning untuk fitur cerdas.",
		stack: ["Laravel", "Blade", "MySQL", "Filament", "FastAPI", "Machine Learning", "Python"],
		highlights: ["Konten edukasi gizi", "Integrasi ML untuk fitur cerdas", "Panel admin untuk konten"],
		overview:
			"Bagian ini bisa menjelaskan konsep Eduzi, target pengguna, dan bagaimana aplikasi membantu edukasi pencegahan stunting.",
		timeline: "Tambahkan proses pengembangan mulai dari riset kebutuhan sampai implementasi fitur utama.",
		status: "Siapkan area ini untuk menampilkan modul edukasi, dashboard, dan hasil integrasi AI/ML.",
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
					Kembali ke project
				</Link>

				<div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
					<div className="rounded-3xl border border-white/10 bg-white/5 p-8">
						<p className="text-sm uppercase tracking-[0.3em] text-yellow-400">Detail Project</p>
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
										<h2 className="text-lg font-bold text-white">Galeri Tampilan Aplikasi</h2>

										<div className="mt-4 grid gap-4 sm:grid-cols-2">
											{project.images.map((image) => (
												<Link
													key={image.src}
													href={image.src}
													target="_blank"
													rel="noreferrer noopener"
													aria-label={`Buka ${image.alt}`}
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
									<p className="text-sm font-semibold text-white">Tahapan / Timeline</p>
									<p className="mt-1 text-sm leading-7 text-zinc-300">{project.timeline}</p>
								</div>
							</div>
						</div>
					</div>

					<aside className="rounded-3xl border border-white/10 bg-white/5 p-8">
						<div className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">
							{project.category}
						</div>

						<h2 className="mt-5 text-xl font-bold text-white">Highlight Project</h2>
						<div className="mt-4 space-y-3 text-sm text-zinc-300">
							{project.highlights.map((item) => (
								<div key={item} className="flex items-start gap-2">
									<span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-300" />
									<span>{item}</span>
								</div>
							))}
						</div>

						<div className="mt-8 rounded-2xl border border-dashed border-yellow-400/25 bg-black/25 p-5">
							<p className="text-sm font-semibold text-yellow-300">Slot Detail Tambahan</p>
							<p className="mt-2 text-sm leading-7 text-zinc-300">{project.status}</p>
						</div>

						<Link
							href="/proyek"
							className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
						>
							<ChevronRight size={16} />
							Lihat project lain
						</Link>
					</aside>
				</div>
			</section>
		</main>
	);
}