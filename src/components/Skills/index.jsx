import { Card } from "../Card";
import style from "./skills.module.css";

export function Skills() {
	const languages = [
		{
			skill: "JavaScript",
			badge: "badge-yellow",
		},
		{
			skill: "PHP",
			badge: "badge-purple",
		},
		{
			skill: "Java",
			badge: "badge-orange",
		},
		{
			skill: "Python",
			badge: "badge-yellow",
		},
	];

	const frameworks = [
		{
			skill: "React",
			badge: "badge-blue",
		},
		{
			skill: "Node.js",
		},
		{
            skill: "Laravel",
			badge: "badge-orange",
		},
        {
            skill: "Express.js",
        },
	];

	const others = [
		{
			skill: "PostgreSQL",
			badge: "badge-blue",
		},
		{
            skill: "Git",
			badge: "badge-red",
		},
        {
            skill: "MySQL",
            badge: "badge-orange",
        },
		{
			skill: "GitHub",
			badge: "badge-purple",
		},
		{
			skill: "Docker",
			badge: "badge-blue",
		},
	];

	const loadElements = (array) => {
		return array.map(({ skill, badge }, index) => (
			<span className={`${style.badge} ${badge != null ? style[badge] : ""}`} key={index}>
				{skill}
			</span>
		));
	};

	return (
		<section className={`${style.container}`}>
			<h2>My hard skills</h2>
			<div className={`${style.content}`}>
				<Card className={`${style.card}`}>
					<h3 className={`${style.cardTitle}`}>Languages</h3>
                    {loadElements(languages)}
				</Card>
				<Card className={`${style.card}`}>
					<h3 className={`${style.cardTitle}`}>Frameworks and libraries</h3>
                    {loadElements(frameworks)}
				</Card>
				<Card className={`${style.card}`}>
					<h3 className={`${style.cardTitle}`}>Others</h3>
                    {loadElements(others)}
				</Card>
			</div>
		</section>
	);
}
