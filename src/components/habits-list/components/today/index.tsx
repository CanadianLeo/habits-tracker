import { MONTHS } from "./constants";
import { getDateEnding } from "./utils/get-date-ending";
import styles from './styles.module.scss';

export const Today = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    return (
        <div className={ styles.wrapper }>
            <p className={ styles.day }>{ day }</p>
            <p className={ styles['date-ending']}>{ getDateEnding(day) }</p>
            <p className={ styles.month }>{ MONTHS[month] }</p>
        </div>
    );
}