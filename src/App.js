import students from './students-list.json';
import titles from './header-titles.json';
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './styles/popup-window.scss';
import './styles/global.scss';
import './styles/app.scss';
function App() {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<div className="app-container">
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}>
				<div className="popup-window">
					<h4 className="popup-window__title">Поставить отметку</h4>
					<div className="popup-window__student-info student-info">
						<p className="student-info__label">Студент</p>
						<p className="student-info__fullname">Васильевна Анна Игоревна</p>
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
					<p className="popup-window__field-value">5</p>
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
									onClick={handleClick}>
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
									onClick={handleClick}>
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
									onClick={handleClick}>
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
									onClick={handleClick}>
									{student.final_mark}
								</Button>
							</th>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
