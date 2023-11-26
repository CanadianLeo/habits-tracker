import { DropdownProps } from './types';
import styles from './styles.module.scss';

export const Dropdown = ({ isOpen, children }: DropdownProps) => {
  return <>{isOpen && <div className={styles['container']}>{children}</div>}</>;
};
