import style from './presentation.module.css'

export function Presentation(){
    return (
        <section className={`${style.container}`}>
            <h2>Hey There!</h2>
            <div className={`${style.content}`}>
                <p>
                    I'm Giovanne a future <span className={`${style.mark}`}>Software Developer</span>
                </p>
                <p>
                    I'm based on Brazil and looking for a job
                </p>
                <p>
                    I'm curious, so I'm always studying something (mainly IT)
                </p>
            </div>
        </section>
    )
}