import cn from 'classnames';
import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useOnClickOutside } from 'usehooks-ts';
import { Icon } from '../icon';
import {
  Colors,
  ColorsList,
  IconsList,
  DEFAULT_COLOR,
  Icons,
  DEFAULT_ICON,
} from '../../constants';
import { COLORS_TITLE, ICONS_TITLE } from './constants';
import styles from './styles.module.scss';

export const IconPicker = () => {
  const { setValue, watch } = useFormContext();
  const [currentColor, setCurrentColor] = useState<Colors>(watch('color') ?? DEFAULT_COLOR);
  const [currentIcon, setCurrentIcon] = useState(watch('icon') ?? DEFAULT_ICON);
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const onClickHandler = () => {
    setShow(!show);
  };
  const onClickOutside = () => {
    setShow(false);
  };
  const onChangeColorHandler = (color: Colors) => {
    setCurrentColor(color);
    setValue('color', color);
  };
  const onChangeIconHandler = (icon: Icons) => {
    setCurrentIcon(icon);
    setValue('icon', icon);
  };

  useOnClickOutside(ref, onClickOutside);

  return (
    <div ref={ref} className={styles['wrapper']}>
      <div
        onClick={onClickHandler}
        className={styles['main-icon']}
      >
        <Icon
          iconName={currentIcon}
          color={currentColor}
          size="medium"
        />
      </div>
      {show && (
        <div className={styles.dropdown}>
          <h4 className={styles.title}>
            {COLORS_TITLE}
          </h4>
          <div
            className={styles['dropdown-list-wrapper']}
          >
            {ColorsList.map((item) => (
              <div
                key={item}
                className={cn(
                  styles.color,
                  styles[
                  item === currentColor ? 'picked' : ''
                  ]
                )}
                onClick={() => onChangeColorHandler(item)}
              >
                <Icon iconName="" color={item} size="small" />
              </div>
            ))}
          </div>
          <h4 className={styles.title}>
            {ICONS_TITLE}
          </h4>
          <div
            className={styles['dropdown-list-wrapper']}
          >
            {IconsList.map((item) => (
              <div
                key={item}
                className={cn(
                  styles.icon,
                  styles[item === currentIcon ? 'picked' : '']
                )}
                onClick={() => onChangeIconHandler(item)}
              >
                <Icon iconName={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
