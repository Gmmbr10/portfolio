import style from "./presentation.module.css";

export function Presentation() {
	return (
		<section className={`${style.container}`}>
			<div className={`${style.imageBox}`}>
				<img
					src="https://github.com/gmmbr10.png"
					className={`${style.image}`}
				/>
			</div>
			<div className={`${style.description}`}>
				<h1 className={`${style.title}`}>Hi, I'm Giovanne Monteiro 👋🏽</h1>
				<p className={`${style.highlight}`}>
					Fullstack<br/>
					Developer
				</p>
				<p>
					I'm a fullstack developer based in Brazil, I turn real-world problems
					into scalable backend systems and clean web applications.
				</p>
			</div>
		</section>
	);
}
