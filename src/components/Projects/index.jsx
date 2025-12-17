import { Card } from "../Card";
import style from "./projects.module.css";

export function Projects(){

    const projects = [
        {
            title: 'Connect Learn',
            description: 'A homeschooler\'s network system',
            github: 'connect_learn',
        },
        {
            title: 'Triagem service',
            description: 'A microservice for hospital\'s triage',
            github: 'triagem-service',
        },
        {
            title: 'Urban Cut',
            description: 'A barber\'s scheduling system',
            github: 'urban-cut',
        },
    ];

    const projectElements = projects.map(({title,description,github},index) => {
        return (
            <Card key={index}>
                <h3>{title}</h3>
                <p className={`${style.describe}`}>
                    {description}
                </p>
                <a href={`https://github.com/gmmbr10/${github}`} target="_blank" className={`${style.link}`}>Click here to see</a>
            </Card>
        )
    })

    return (
        <section className={`${style.container}`}>
            <h2 className={`${style.title}`}>Main projects</h2>
            {projectElements}
        </section>
    )
}