import { BiXCircle } from "react-icons/bi";
import { DialogProps } from "./types";
import styles from './styles.module.scss';

export const Dialog = ({ onClose, children }: DialogProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['new-habit']}>
        <BiXCircle onClick={onClose} className={styles.cross}/>
        {children}
      </div>
    </div>
  )
}