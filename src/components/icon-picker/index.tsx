import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useOnClickOutside } from "usehooks-ts";
import { Icon } from "../icon";
import { Colors, ColorsList, IconsList, DEFAULT_COLOR, Icons, DEFAULT_ICON } from "../../constants";
import '../../colors.css';
import './icon-picker.css';
import { COLORS_TITLE, ICONS_TITLE } from "./constants";

export const IconPicker = () => {
    const { setValue } = useFormContext();
    const [currentColor, setCurrentColor] = useState<Colors>(DEFAULT_COLOR);
    const [currentIcon, setCurrentIcon] = useState(DEFAULT_ICON);
    const [show, setShow] = useState(false);
    const ref = useRef(null);

    const onClickHandler = () => {
        setShow(!show);
    }
    const onClickOutside = () => {
        setShow(false);
    }
    const onChangeColorHandler = (color: Colors) => {
        setCurrentColor(color);
        setValue('color', color);
    }
    const onChangeIconHandler = (icon: Icons) => {
        setCurrentIcon(icon);
        setValue('icon', icon);
    }

    useOnClickOutside(ref, onClickOutside);

    return (
        <div ref={ref} className="icon-picker_wrapper">
            <div onClick={onClickHandler}>
                <Icon iconName={currentIcon} color={currentColor} size='medium'/>
            </div>
            {show && 
                <div className="icon-picker_dropdown">
                    <h4>{COLORS_TITLE}</h4>
                    <div className="icon-picker_dropdown-list-wrapper">
                        {ColorsList.map(item => 
                            <div key={item} className={`icon-picker_color ${item === currentColor ? 'picked': ''}`} onClick={() => onChangeColorHandler(item)}>
                                <Icon iconName="" color={item} size='small'/>
                            </div>
                        )}
                    </div>
                    <h4>{ICONS_TITLE}</h4>
                    <div className="icon-picker_dropdown-list-wrapper">
                        {IconsList.map(item => 
                            <div key={item} className={`icon-picker_color ${item === currentIcon ? 'picked': ''}`} onClick={() => onChangeIconHandler(item)}>
                                <Icon iconName={item} />
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}