import { DialogProps } from "./types";
import styles from './styles.module.scss';

export const Dialog = ({onClose, children}: DialogProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles['new-habit']}>
                <div className={styles.cross} onClick={onClose}>
                    X
                </div>
                {children}
            </div>
        </div>
    )
}