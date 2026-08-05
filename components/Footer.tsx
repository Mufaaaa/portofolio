import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t border-blue-400/20 bg-slate-950 py-8 text-slate-200 [font-family:var(--font-poppins)]">
			<div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
				<div>
					<p className="text-base font-semibold text-blue-300">Mufaaaa.</p>
					<p className="text-sm text-slate-400">© 2026 All rights reserved.</p>
				</div>

				<div className="flex items-center gap-3" aria-label="Social links">
					<Link
						href="https://github.com/Mufaaaa"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="rounded-md border border-blue-400/20 p-2 text-blue-300 transition-colors hover:bg-blue-400/10 hover:text-blue-200"
					>
						<svg
							aria-hidden="true"
							viewBox="0 0 24 24"
							className="h-[18px] w-[18px] fill-current"
						>
							<path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.01-1.04-0.015-2.042-3.338 0.724-4.042-1.61-4.042-1.61-0.546-1.385-1.332-1.754-1.332-1.754-1.09-0.744 0.083-0.729 0.083-0.729 1.205 0.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492 0.998 0.108-0.776 0.419-1.305 0.763-1.605-2.665-0.3-5.466-1.332-5.466-5.93 0-1.31 0.47-2.38 1.236-3.22-0.123-0.303-0.536-1.524 0.117-3.176 0 0 1.008-0.322 3.3 1.23a11.49 11.49 0 0 1 3.003-0.404c1.02 0.005 2.045 0.138 3.003 0.404 2.292-1.552 3.297-1.23 3.297-1.23 0.655 1.653 0.243 2.874 0.12 3.176 0.77 0.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92 0.43 0.372 0.815 1.103 0.815 2.222 0 1.605-0.014 2.898-0.014 3.293 0 0.321 0.216 0.694 0.825 0.576C20.565 22.092 24 17.595 24 12.297 24 5.67 18.627 0.297 12 0.297z" />
						</svg>
					</Link>
					<Link
						href="https://www.linkedin.com/in/muhammad-faiq-38a76234b/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="rounded-md border border-blue-400/20 p-2 text-blue-300 transition-colors hover:bg-blue-400/10 hover:text-blue-200"
					>
						<svg
							aria-hidden="true"
							viewBox="0 0 24 24"
							className="h-[18px] w-[18px] fill-current"
						>
							<path d="M20.447 20.452H16.89V14.87c0-1.331-0.027-3.045-1.854-3.045-1.856 0-2.14 1.45-2.14 2.948v5.679H9.34V9h3.414v1.561h0.049c0.476-0.9 1.637-1.85 3.37-1.85 3.604 0 4.269 2.372 4.269 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.127 2.063 2.063 0 0 1 0 4.127zM7.119 20.452H3.553V9h3.566v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0h0.003z" />
						</svg>
					</Link>
				</div>
			</div>
		</footer>
	);
}
