import cn from 'classnames';
import { TextProps } from "./types";
import styles from './styles.module.scss';

export const Text = ({ children, className }: TextProps) => {
  return (
    <div className={cn(styles.text, className)}>
      {children}
    </div>
  )
}