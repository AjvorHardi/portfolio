export const site = {
	name: "Goran Markovic",
	role: "software developer",
	email: "markovic.goran@outlook.com",
	resumePath: "/GoranMarkovic.pdf",
	description: "Minimal personal portfolio for Goran Markovic.",
	bio: "[PLACEHOLDER BIO] Replace with a short, concrete introduction.",
	footer: "© 2026 Goran Markovic"
} as const;

export type Site = typeof site;