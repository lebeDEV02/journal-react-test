import React from 'react';
import students from '../mock-dbs/students-list.json';
import titles from '../mock-dbs/header-titles.json';
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import '../styles/general/popup-window.scss';

export default function Table() {
	// useState hooks

	const [anchorEl, setAnchorEl] = useState(null);
	const [student, setStudent] = useState();
	const [popupTitle, setPopupTitle] = useState();
	const [currentValue, setCurrentValue] = useState();
	const [transformValue, setTransformValue] = useState('left');
	const [anchorValue, setAnchorValue] = useState('right');
	const [pageX, setPageX] = useState();
	const [pageY, setPageY] = useState();

	// useState hooks

	// handlers

	const handleClick = (event, student, currentValue) => {
		setAnchorEl(event.currentTarget);
		setStudent(student.fullName);
		const coordinates = event.target.getBoundingClientRect();
		console.log(coordinates);
		event.target.parentNode.classList.add('active-ceil');
		if (window.outerWidth - (event.pageX + 900) <= 0) {
			setAnchorValue('left');
			setTransformValue('right');
			setPageX(coordinates.left - 700 - coordinates.width * 0.1);
		} else {
			setAnchorValue('right');
			setTransformValue('left');
			setPageX(coordinates.right + coordinates.width * 0.2);
		}
		setPageY(coordinates.top - coordinates.height);
		setCurrentValue(currentValue);
	};

	const handleClose = () => {
		anchorEl.parentNode.classList.remove('active-ceil');
		setAnchorEl(null);
	};

	// handlers

	// variables

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	// variables

	return (
		<>
			<Popover
				id={id}
				open={open}
				className="popover-elem"
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorReference="anchorPosition"
				anchorPosition={{ top: pageY, left: pageX }}>
				<div className="popup-window">
					<span
						className={`popup-window__polygon ${
							transformValue === 'left'
								? 'popup-window__polygon-left'
								: 'popup-window__polygon-right'
						}`}>
						▲
					</span>
					<h4 className="popup-window__title">{popupTitle}</h4>
					<div className="popup-window__student-info student-info">
						<p className="student-info__label">Студент</p>
						<p className="student-info__fullname">{student}</p>
					</div>
					<div className="popup-window__date-info date-info">
						<p className="date-info__date">Дата</p>
						<time className="date-info__time">21.11.2021</time>
					</div>
					<form className="popup-window__activity-form">
						<label>
							<input type="checkbox"></input>
							Не присутствовал
						</label>
					</form>
					<p className="popup-window__field-value">{currentValue}</p>
					<button className="popup-window__submit-button submit-button">Поставить отметку</button>
				</div>
			</Popover>
			<table>
				<thead>
					<tr>
						{titles.map((title, index) => (
							<th key={index}>{title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{students.map((student) => (
						<tr key={student.id}>
							<th>{student.id}</th>
							<th>{student.fullName}</th>
							<th>
								<Button
									sx={{
										color: '#2E2E3D',
										display: 'flex',
										maxWidth: '100%',
										maxHeight: '100%',
										minWidth: '100%',
										minHeight: '100%',
									}}
									className="students-spreadsheet__mark"
									onClick={(event) => {
										handleClick(event, student, student.mark);
										setPopupTitle('Отметка');
									}}>
									{student.mark}
								</Button>
							</th>
							<th>
								<Button
									sx={{
										color: '#2E2E3D',
										display: 'flex',
										maxWidth: '100%',
										maxHeight: '100%',
										minWidth: '100%',
										minHeight: '100%',
									}}
									onClick={(event) => {
										handleClick(event, student, student.absences);
										setPopupTitle('Отсутствий');
									}}>
									{student.absences}
								</Button>
							</th>
							<th>
								<Button
									sx={{
										color: '#2E2E3D',
										display: 'flex',
										maxWidth: '100%',
										maxHeight: '100%',
										minWidth: '100%',
										minHeight: '100%',
									}}
									onClick={(event) => {
										handleClick(event, student, student.points);
										setPopupTitle('Баллы по практическим занятиям');
									}}>
									{student.points}
								</Button>
							</th>
							<th>
								<Button
									sx={{
										color: '#2E2E3D',
										display: 'flex',
										maxWidth: '100%',
										maxHeight: '100%',
										minWidth: '100%',
										minHeight: '100%',
									}}
									onClick={(event) => {
										handleClick(event, student, student.final_mark);
										setPopupTitle('Итоговая оценка');
									}}>
									{student.final_mark}
								</Button>
							</th>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
