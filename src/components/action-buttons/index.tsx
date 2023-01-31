import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { ActionButtonsProps } from "./types";
import "./actionButton.css";

export const ActionButtons = ({ habbitId }: ActionButtonsProps) => {
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    const onClickDelete = (habbitId: string) => {
        // TODO: use fetch
        console.log('delete');
        setShow(false);
    }

    const onClickEdit = (habbitId: string) => {
        // TODO: use fetch
        console.log('edit');
        setShow(false);
    }

    const onClickHandler = () => {
        setShow(true);
    }
    const onClickOutside = () => {
        setShow(false);
    }
    useOnClickOutside(ref, onClickOutside);

    const actions = [
        {
            id: 1,
            title: "Изменить",
            onClick: () => onClickEdit(habbitId)
        },
        {
            id: 2,
            title: "Удалить",
            onClick: () => onClickDelete(habbitId)
        },
    ];
    
    return (
        <div>
            <button className="action-button" onClick={onClickHandler} ref={ref} >...</button>
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