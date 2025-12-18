import { Project } from "../Project";
import style from "./projects.module.css";

export function Projects() {
	return (
		<section className={`${style.container}`}>
			<h2 className={`${style.title}`}>My projects</h2>
			<section className={`${style.content}`}>
				<Project
					name="Connect Learn"
					link="https://github.com/gmmbr10/connect-learn"
				>
					<p>
						Academic project aimed at developing an educational platform,
						working on the front-end, back-end and infrastructure of the
						application.
					</p>
				</Project>
				<Project
					name="Triagem Service"
					link="https://github.com/gmmbr10/triagem-service"
				>
					<p>
						Academic project focused on creating a medical screening system with
						scalable architecture and integration between modules.
					</p>
				</Project>
				<Project name="Urban Cut" link="https://github.com/gmmbr10/urban-cut">
					<p>
						Academic project aimed at developing an application for haircut
						scheduling.
					</p>
				</Project>
			</section>
		</section>
	);
}
