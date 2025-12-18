import { SquarePlus, SquareMinus } from "lucide-react";
import style from "./project.module.css";
import { useState } from "react";

export function Project({ name, children, link }) {
	const [display, setDisplay] = useState("none");

	const openContent = (e) => {
		setDisplay(display === "none" ? "flex" : "none");
	};

	const openLink = (link) => {
		window.open(link);
	};

	return (
		<section className={`${style.container}`}>
			<header className={`${style.header}`} onClick={openContent}>
				<h3 className={`${style.title}`}>{name}</h3>
				<span className={`${style.icon}`}>
					{display === "none" ? <SquarePlus /> : <SquareMinus />}
				</span>
			</header>
			<section className={`${style.content}`} style={{ display: display }}>
				{children}
				<button onClick={() => openLink(link)} className={`${style.button}`}>
					See on GitHub
				</button>
			</section>
		</section>
	);
}
