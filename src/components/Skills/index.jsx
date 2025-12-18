import { Card } from "../Card";
import style from "./skills.module.css";

export function Skills() {
	const softSkills = ["Effective Communication", "Collaboration", "Team Work"];
	const frontEnd = [
		"HTML/CSS",
		"JavaScript",
		"Bootstrap",
		"TailwindCSS",
		"React",
	];
	const backEnd = ["PHP", "Laravel", "NodeJS", "Express", "Java"];
	const devops = ["Docker", "MySQL", "Git", "PostgreSQL"];

	const loadItems = (items) => {
		return items.map((item, index) => (
			<li key={index} className={`${style.item}`}>
				{item}
			</li>
		));
	};

	return (
		<section className={`${style.container}`}>
			<h2 className={`${style.title}`}>Skills</h2>
			<div className={`${style.content}`}>
				<ul className={`${style.list}`}>
					<h3>Front-end</h3>
					{loadItems(frontEnd)}
				</ul>
				<ul className={`${style.list}`}>
					<h3>Back-end</h3>
					{loadItems(backEnd)}
				</ul>
				<ul className={`${style.list}`}>
					<h3>Devops</h3>
					{loadItems(devops)}
				</ul>
				<ul className={`${style.list}`}>
					<h3>Soft skills</h3>
					{loadItems(softSkills)}
				</ul>
			</div>
		</section>
	);
}
