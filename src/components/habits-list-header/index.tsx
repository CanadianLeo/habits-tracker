import { Today } from 'components/today';
import { BUTTON_TITLE } from './constants';
import { HeaderProps } from './types';
import styles from './styles.module.scss';

export const Header = ({ onButtonClick }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <Today />
      <button className={styles.button} onClick={onButtonClick} title={BUTTON_TITLE}>
        {BUTTON_TITLE}
      </button>
    </div>
  );
};
