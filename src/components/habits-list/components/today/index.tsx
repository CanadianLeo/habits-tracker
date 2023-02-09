import { MONTHS } from "./constants";
import styles from './styles.module.scss';

export const Today = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.day }>{ day }</div>
            <div className={ styles.month }>{ MONTHS[month] }</div>
        </div>
    );
}