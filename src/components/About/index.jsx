import style from "./about.module.css";

export function About() {
	return (
		<div className={`${style.container}`}>
			<h2>About me</h2>
			<p>
				I'm a software developer based in Brazil, focused on building backend
				and full-stack applications.
			</p>
			<p>
				I enjoy working on real-world problems like scheduling systems, hospital
				workflows, and scalable APIs.
				<br />
				My main interests are backend development, microservices, and system
				design.
			</p>
			<p>
				Currently, I’m looking for a junior or entry-level developer role where
				I can grow and contribute.
			</p>
		</div>
	);
}
