import style from './Button.module.css';
import type { ButtonProps } from './types';

function Button({ text, textAlign, ...props }: ButtonProps) {
	return (
		<a
			className={`${style.btn} ${
				style[`btn--${textAlign}`] || style['btn--text-center']
			}`}
			href="/"
			target="_blank"
			rel="noreferrer"
			{...props}
		>
			{text}
		</a>
	);
}

export default Button;
