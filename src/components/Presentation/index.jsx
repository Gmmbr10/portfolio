import style from "./presentation.module.css";
import imageProfile from "../../assets/profile.jpeg"

export function Presentation() {
	return (
		<section className={`${style.container}`}>
			<div className={`${style.imageBox}`}>
				<img
					src={imageProfile}
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
