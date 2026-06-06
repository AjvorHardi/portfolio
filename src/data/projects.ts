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
		name: "Slack-alike",
		summary: "Slack-alike is a real-time guest chat app with multiple rooms, live messaging, presence, typing indicators, and room creation. Usage note: Best tested in two browser windows or two different browsers to verify real-time messaging, presence, and typing indicators.",
		techStack: ["React", "Vite", "TypeScript", "Tailwind", "Supabase Realtime"],
		image: {
			src: "/projects/slack-alike.png",
			alt: "Slack-alike preview"
		},
		liveUrl: "https://slack-alike.vercel.app/",
		githubUrl: "https://github.com/AjvorHardi/fake-slack"
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
