import { BiAccessibility, BiAtom, BiBasketball, BiBath, BiBeer, BiBookAlt, BiCycling, BiDesktop, BiBrain, BiDumbbell, BiJoystick, BiSwim } from "react-icons/bi";
import styles from '../styles.module.scss';

export const getIcon = (iconName: string, size: string) => {
  switch (iconName) {
    case 'BiAccessibility': return <BiAccessibility className={styles[`icon-${size}`]}/>
    case 'BiAtom': return <BiAtom className={styles[`icon-${size}`]}/>
    case 'BiBasketball': return <BiBasketball className={styles[`icon-${size}`]}/>
    case 'BiBath': return <BiBath className={styles[`icon-${size}`]}/>
    case 'BiBeer': return <BiBeer className={styles[`icon-${size}`]}/>
    case 'BiBookAlt': return <BiBookAlt className={styles[`icon-${size}`]}/>
    case 'BiCycling': return <BiCycling className={styles[`icon-${size}`]}/>
    case 'BiDesktop': return <BiDesktop className={styles[`icon-${size}`]}/>
    case 'BiBrain': return <BiBrain className={styles[`icon-${size}`]}/>
    case 'BiDumbbell': return <BiDumbbell className={styles[`icon-${size}`]}/>
    case 'BiJoystick': return <BiJoystick className={styles[`icon-${size}`]}/>
    case 'BiSwim': return <BiSwim className={styles[`icon-${size}`]}/>
  }
}