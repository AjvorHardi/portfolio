export type Project = {
	name: string;
	summary: string;
	techStack: string[];
	image: {
		src: string;
		alt: string;
	};
	liveUrl: string;
	githubUrl: string;
};

export const projects: Project[] = [
	{
		name: "[Project One]",
		summary: "[PLACEHOLDER SUMMARY] Replace with a one-sentence description.",
		techStack: ["Astro", "TypeScript", "Tailwind"],
		image: {
			src: "/projects/project-01-placeholder.webp",
			alt: "[PLACEHOLDER IMAGE] Project one preview"
		},
		liveUrl: "https://example.com/project-one",
		githubUrl: "https://github.com/your-name/project-one"
	},
	{
		name: "[Project Two]",
		summary: "[PLACEHOLDER SUMMARY] Replace with a one-sentence description.",
		techStack: ["Astro", "TypeScript", "Tailwind"],
		image: {
			src: "/projects/project-02-placeholder.webp",
			alt: "[PLACEHOLDER IMAGE] Project two preview"
		},
		liveUrl: "https://example.com/project-two",
		githubUrl: "https://github.com/your-name/project-two"
	},
	{
		name: "[Project Three]",
		summary: "[PLACEHOLDER SUMMARY] Replace with a one-sentence description.",
		techStack: ["Astro", "TypeScript", "Tailwind"],
		image: {
			src: "/projects/project-03-placeholder.webp",
			alt: "[PLACEHOLDER IMAGE] Project three preview"
		},
		liveUrl: "https://example.com/project-three",
		githubUrl: "https://github.com/your-name/project-three"
	},
	{
		name: "[Project Four]",
		summary: "[PLACEHOLDER SUMMARY] Replace with a one-sentence description.",
		techStack: ["Astro", "TypeScript", "Tailwind"],
		image: {
			src: "/projects/project-04-placeholder.webp",
			alt: "[PLACEHOLDER IMAGE] Project four preview"
		},
		liveUrl: "https://example.com/project-four",
		githubUrl: "https://github.com/your-name/project-four"
	}
];
