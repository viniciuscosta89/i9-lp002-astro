import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
	text: string;
	textAlign?: 'text-left' | 'text-center' | 'text-right';
}
