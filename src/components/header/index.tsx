import { TITLE } from './constants';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>{TITLE}</h1>
    </div>
  );
};
