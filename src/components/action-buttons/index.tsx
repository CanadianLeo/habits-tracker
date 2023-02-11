import cn from 'classnames';
import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { ActionButtonsProps } from "./types";
import "./actionButton.css";
import colors from '../../colors.module.scss';

export const ActionButtons = ({ habitId, color, hovered }: ActionButtonsProps) => {
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    const onClickDecrement = (habitId: string) => {
        // TODO: use fetch
        console.log('decrement ' + habitId);
        setShow(false);
    }

    const onClickDelete = (habitId: string) => {
        // TODO: use fetch
        console.log('delete ' + habitId);
        setShow(false);
    }

    const onClickEdit = (habitId: string) => {
        // TODO: use fetch
        console.log('edit ' + habitId);
        setShow(false);
    }

    const onClickReset = (habitId: string) => {
        // TODO: use fetch
        console.log('reset ' + habitId);
        setShow(false);
    }

    const onClickHandler = () => {
        setShow(!show);
    }
    const onClickOutside = () => {
        setShow(false);
        
    }
    useOnClickOutside(ref, onClickOutside);

    const actions = [
        {
            id: 1,
            title: "Уменьшить на 1",
            onClick: () => onClickDecrement(habitId)
        }, {
            id: 2,
            title: "Изменить",
            onClick: () => onClickEdit(habitId)
        }, {
            id: 3,
            title: "Сбросить до 0",
            onClick: () => onClickReset(habitId)
        }, {
            id: 4,
            title: "Удалить",
            onClick: () => onClickDelete(habitId)
        },
    ];
    
    
    return (
        <div ref={ref} >
            <button className={ cn('action-button', colors[`border-${color}`], (hovered ? colors[`${color}-hovered`] : ''))} onClick={onClickHandler} >...</button>
            { show && <div className="action-button_modal-container">
                { actions.map((item) => 
                    <div key={item.id} onClick={item.onClick} className="action-button_action">
                        {item.title}
                    </div>
                )}
            </div>}
        </div>
    )
}