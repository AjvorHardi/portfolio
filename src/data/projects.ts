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
		summary: "Slack-alike is a real-time guest chat app with multiple rooms, live messaging, presence, typing indicators, and room creation. Usage note: Best tested with two different browsers to verify real-time messaging, presence, and typing indicators.",
		techStack: ["React", "Vite", "TypeScript", "Tailwind", "Supabase Realtime"],
		image: {
			src: "/projects/slack-alike.png",
			alt: "Slack-alike preview"
		},
		liveUrl: "https://slack-alike.vercel.app/",
		githubUrl: "https://github.com/AjvorHardi/fake-slack"
	},
	{
		name: "News-mailer",
		summary: "News-mailer is a full-stack newsletter manager for creating newsletters, managing subscribers, building signup forms, segmenting audiences, writing campaigns, and reviewing delivery activity. Includes a no-login demo mode with seeded localStorage data. Usage note: Demo and real app share the same UI patterns, but demo mode uses localStorage and never calls Supabase or Resend.",
		techStack: ["React", "TypeScript", "Supabase", "Supabase Edge Functions", "Resend"],
		image: {
			src: "/projects/news-mailer.png",
			alt: "News-mailer preview"
		},
		liveUrl: "https://news-mailer-demo.vercel.app/",
		githubUrl: "https://github.com/AjvorHardi/news-mailer"
	}
];
