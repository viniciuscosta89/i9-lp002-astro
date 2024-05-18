import Container from '@components/Container';
import styles from './Header.module.css';
import type { HeaderProps } from './types';

function Header({ title, highlightTitle, text }: HeaderProps) {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.header__content}>
					<h1 className={styles.header__title}>
						{title}
						<div className={styles['header__highlight-text']}>
							{highlightTitle}
						</div>
					</h1>

					<p>{text}</p>
				</div>
			</Container>
		</header>
	);
}

export default Header;
