import style from "./card.module.css";

export function Card({ children, className, ...props }) {
	return (
		<div className={`${style.card} ${className}`} {...props}>
			{children}
		</div>
	);
}
