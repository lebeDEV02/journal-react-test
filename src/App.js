import './App.css';
import students from './students-list.json'
import titles from "./header-titles.json"
function App() {
  return (
    <div className="app-container">
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
						<th><button onClick={() => alert(`Поставить отметку ${student.mark}`)}>{student.mark}</button></th>
						<th><button onClick={() => alert(`Отсутствий у студента ${student.absences}`)}>{student.absences}</button></th>
						<th><button onClick={() => alert(`Баллов у студента ${student.points}`)}>{student.points}</button></th>
						<th><button onClick={() => alert(`Итоговая отметка студента ${student.final_mark}`)}>{student.final_mark}</button></th>
					</tr>
				))}
          </tbody>
			 </table>
    </div>
  );
}

export default App;
