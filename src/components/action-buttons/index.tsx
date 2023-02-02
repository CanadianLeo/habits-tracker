import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { ActionButtonsProps } from "./types";
import "./actionButton.css";
import '../../colors.css';

export const ActionButtons = ({ habbitId, color, hovered }: ActionButtonsProps) => {
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    const onClickDecrement = (habbitId: string) => {
        // TODO: use fetch
        console.log('decrement ' + habbitId);
        setShow(false);
    }

    const onClickDelete = (habbitId: string) => {
        // TODO: use fetch
        console.log('delete ' + habbitId);
        setShow(false);
    }

    const onClickEdit = (habbitId: string) => {
        // TODO: use fetch
        console.log('edit ' + habbitId);
        setShow(false);
    }

    const onClickReset = (habbitId: string) => {
        // TODO: use fetch
        console.log('reset ' + habbitId);
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
            onClick: () => onClickDecrement(habbitId)
        }, {
            id: 2,
            title: "Изменить",
            onClick: () => onClickEdit(habbitId)
        }, {
            id: 3,
            title: "Сбросить до 0",
            onClick: () => onClickReset(habbitId)
        }, {
            id: 4,
            title: "Удалить",
            onClick: () => onClickDelete(habbitId)
        },
    ];
    
    
    return (
        <div ref={ref} >
            <button className={`action-button border-${color} ` + (hovered ? `${color}-hovered` : '')} onClick={onClickHandler} >...</button>
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