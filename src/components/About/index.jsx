import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import style from "./about.module.css";

export function About() {
	return (
		<div className={`${style.container}`}>
			<div className={`${style.imageBox}`}>
				<img
					src="https://images.unsplash.com/photo-1607706009771-de8808640bcf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					className={`${style.image}`}
				/>
			</div>
			<div className={`${style.description}`}>
				<h2>About me</h2>
				<p>
					I'm a software developer based in Brazil, focused on building backend
					and fullstack applications. I enjoy working on real-world problems
					like scheduling systems, hospital workflows, and scalable APIs. My
					main interests are backend development, microservices, and system
					design. Currently, I’m looking for a junior or entry-level developer
					role where I can grow and contribute.
				</p>
				<nav className={`${style.navbar}`}>
					<a href="https://github.com/gmmbr10" target="_blank">
						<Github size={24} />
					</a>
					<a href="https://instagram.com/gmmbr10" target="_blank">
						<Instagram size={24} />
					</a>
					<a href="https://linkedin.com/in/giovanne-monteiro" target="_blank">
						<Linkedin size={24} />
					</a>
					<a href="https://x.com/gmmbr10" target="_blank">
						<Twitter size={24} />
					</a>
				</nav>
			</div>
		</div>
	);
}
