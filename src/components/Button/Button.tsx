import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  href: string;
  color?: string;
}

export const Button = ({ children, href, color }: ButtonProps) => (
  <a
    className={`${styles.button} ${color === 'dark' ? styles.darkButton : ''}`}
    href={href}
    target='_blank'
  >
    {children}
  </a>
);
