import { useState, useRef } from 'react';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useOnClickOutside } from 'usehooks-ts';
import { useDispatch } from 'react-redux';
import { fetchHabits } from '../../store/action-creators/habits';
import { EditHabit } from '../edit-habit';
import { Dropdown } from '../dropdown';
import { Button } from '../button';
import { fetchDeleteHabit } from './utils/fetch-delete-habit';
import { ActionButtonsProps } from './types';
import styles from './styles.module.scss';

export const ActionButtons = ({
	habitId,
	color,
}: ActionButtonsProps) => {
	const ref = useRef(null);
	const [show, setShow] = useState(false);
	const [editHabitShow, setEditHabitShow] = useState(false);
	const dispatch = useDispatch();

	const onClickDelete = async () => {
		fetchDeleteHabit(habitId).then(() => {
			dispatch<any>(fetchHabits());
		});
		setShow(false);
	};

	const onClickEdit = () => {
		setEditHabitShow(true);
		setShow(false);
	};

	const onClickReset = () => {
		// TODO: use fetch
		console.log('reset ' + habitId);
		dispatch<any>(fetchHabits());
		setShow(false);
	};

	const onClickHandler = () => {
		setShow(!show);
	};
	const onClickOutside = () => {
		setShow(false);
	};
	useOnClickOutside(ref, onClickOutside);

	const actions = [
		{
			id: 1,
			title: 'Edit',
			onClick: onClickEdit,
		},
		{
			id: 2,
			title: 'Reset',
			onClick: onClickReset,
		},
		{
			id: 3,
			title: 'Delete',
			onClick: onClickDelete,
		},
	];

	return (
		<div ref={ref}>
			<Button
				color={color}
				onClick={onClickHandler}
				icon={<BiDotsVerticalRounded />}
			/>
			<Dropdown isOpen={show}>
				{actions.map((item) => (
					<div
						key={item.id}
						onClick={item.onClick}
						className={styles['action-button_action']}
					>
						{item.title}
					</div>
				))}
			</Dropdown>
			{editHabitShow && (
				<EditHabit habitId={habitId} onClose={() => setEditHabitShow(false)} />
			)}
		</div>
	);
};
