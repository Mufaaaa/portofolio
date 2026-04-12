import { Mail, MapPin } from "lucide-react";

export default function KontakPage() {
	return (
		<main className="min-h-screen bg-black px-6 py-20 text-white">
			<div className="mx-auto w-full max-w-6xl">
				<section className="mb-14 text-center">
					<p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
						Contact
					</p>
					<h1 className="text-4xl font-bold md:text-5xl">Let&apos;s Connect</h1>
					<p className="mx-auto mt-4 max-w-2xl text-gray-300">
						If you would like to discuss a project, collaborate, or ask a
						question, feel free to reach out using the details below or the
						contact form.
					</p>
				</section>

				<section className="mb-10 grid gap-4 md:grid-cols-2">
					<article className="rounded-2xl border border-white/10 bg-white/5 p-6">
						<div className="mb-3 flex items-center gap-3">
							<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/20">
								<Mail size={18} className="text-yellow-400" />
							</span>
							<h2 className="text-lg font-semibold">Email</h2>
						</div>
						<a
							href="mailto:faiq22836@gmail.com"
							className="text-gray-300 transition-colors hover:text-yellow-300"
						>
							faiq22836@gmail.com
						</a>
					</article>

					<article className="rounded-2xl border border-white/10 bg-white/5 p-6">
						<div className="mb-3 flex items-center gap-3">
							<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/20">
								<MapPin size={18} className="text-yellow-400" />
							</span>
							<h2 className="text-lg font-semibold">Location</h2>
						</div>
						<p className="text-gray-300">Batam, Kepulauan Riau, Indonesia</p>
					</article>
				</section>

				<section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
					<h2 className="mb-6 text-2xl font-semibold">Send a Message</h2>

					<form className="space-y-5" action="mailto:faiq22836@gmail.com" method="post" encType="text/plain">
						<div className="grid gap-5 md:grid-cols-2">
							<div>
								<label htmlFor="nama" className="mb-2 block text-sm font-medium text-gray-200">
									Name
								</label>
								<input
									id="nama"
									name="nama"
									type="text"
									required
									placeholder="Your full name"
									className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
								/>
							</div>

							<div>
								<label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-200">
									Email
								</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									placeholder="name@email.com"
									className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
								/>
							</div>
						</div>

						<div>
							<label htmlFor="subjek" className="mb-2 block text-sm font-medium text-gray-200">
								Subject
							</label>
							<input
								id="subjek"
								name="subjek"
								type="text"
								required
								placeholder="Example: New website project inquiry"
								className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
							/>
						</div>

						<div>
							<label htmlFor="pesan" className="mb-2 block text-sm font-medium text-gray-200">
								Message
							</label>
							<textarea
								id="pesan"
								name="pesan"
								required
								rows={6}
								placeholder="Write your message here..."
								className="w-full resize-y rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
							/>
						</div>

						<button
							type="submit"
							className="inline-flex rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
						>
							Send Message
						</button>
					</form>
				</section>
			</div>
		</main>
	);
}
