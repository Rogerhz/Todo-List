import React, { useState } from "react";

//create your first component
export function Home() {
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);

	return (
		<div className="text-center mt-5 d-flex align-items-center flex-column">
			<h1>TodoList</h1>
			<div className="lista">
				<input
					className="form-control"
					placeholder="New task"
					value={newTask}
					onChange={event => setNewTask(event.target.value)}
					onKeyPress={e => {
						if (e.key == "Enter") {
							setTasks([
								...tasks,
								{
									id: Math.random()
										.toString(16)
										.substring(2),
									label: newTask
								}
							]);
							setNewTask("");
						}
					}}
				/>
				<ul className="p-0">
					{tasks.map(task => (
						<li
							className="list-group-item d-flex justify-content-between"
							key={task.id}>
							{task.label}
							<span
								onClick={event => {
									let filterTasks = tasks.filter(
										t => t.id != task.id
									);
									setTasks(filterTasks);
								}}>
								❌
							</span>
						</li>
					))}
				</ul>
				<div>
					<span>
						{tasks.length == 1
							? `${tasks.length} Remaining tasks`
							: tasks.length == 0
							? "Chill, no task to do"
							: `${tasks.length} Remaining tasks`}
					</span>
				</div>
			</div>
		</div>
	);
}
document.body.style.backgroundColor = "darkgrey";
