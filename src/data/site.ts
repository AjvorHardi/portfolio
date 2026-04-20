export const site = {
	name: "Goran Markovic",
	role: "software developer",
	email: "hello@example.com",
	resumePath: "/GoranMarkovic.pdf",
	description: "Minimal personal portfolio for Goran Markovic.",
	bio: "[PLACEHOLDER BIO] Replace with a short, concrete introduction.",
	footer: "[PLACEHOLDER FOOTER] Replace with final footer text."
} as const;

export type Site = typeof site;
