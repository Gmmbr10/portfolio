import style from "./presentation.module.css";

export function Presentation() {
	return (
		<section className={`${style.container}`}>
			<h1>Hi, I'm Giovanne Monteiro 👋🏽</h1>
			<div className={`${style.content}`}>
				<p>
					<span className={`${style.mark}`}>Software Developer</span> based in
					Brazil.
				</p>
				<p>
					I turn real-world problems into scalable backend systems and clean web
					applications.
				</p>
			</div>
		</section>
	);
}
