import styles from './Container.module.css';
import type { ContainerProps } from './types';

function Container({ children, ...props }: ContainerProps) {
	return (
		<div className={styles.container} {...props}>
			{children}
		</div>
	);
}

export default Container;
