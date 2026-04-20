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

// Add or remove entries here; the projects section renders whatever this array contains.
export const projects: Project[] = [
	{
		name: "[Project One]",
		summary: "[PLACEHOLDER SUMMARY] Replace with a one-sentence description of the product and the result.",
		techStack: ["Astro", "TypeScript", "Tailwind"],
		image: {
			src: "/projects/project-01-placeholder.svg",
			alt: "[PLACEHOLDER IMAGE] Project one preview"
		},
		liveUrl: "https://example.com/project-one",
		githubUrl: "https://github.com/your-name/project-one"
	},
	{
		name: "[Project Two]",
		summary: "[PLACEHOLDER SUMMARY] Replace with a one-sentence description of the workflow or audience.",
		techStack: ["Next.js", "TypeScript", "PostgreSQL"],
		image: {
			src: "/projects/project-02-placeholder.svg",
			alt: "[PLACEHOLDER IMAGE] Project two preview"
		},
		liveUrl: "https://example.com/project-two",
		githubUrl: "https://github.com/your-name/project-two"
	}
];
