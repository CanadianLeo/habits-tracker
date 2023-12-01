import { Today } from 'components/today';
import { Button } from 'components/button';
import { BUTTON_TITLE } from './constants';
import { HeaderProps } from './types';
import styles from './styles.module.scss';

export const Header = ({ onButtonClick }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <Today />
      <Button className={styles.button} title={BUTTON_TITLE} onClick={onButtonClick} />
    </div>
  );
};
