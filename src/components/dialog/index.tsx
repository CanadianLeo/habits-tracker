import { BiX } from 'react-icons/bi';
import { DialogProps } from './types';
import styles from './styles.module.scss';

export const Dialog = ({ onClose, children }: DialogProps) => {
  return (
    <div className={styles.container}>
      <div className={styles['new-habit']}>
        <BiX onClick={onClose} className={styles.cross} />
        {children}
      </div>
    </div>
  );
};
