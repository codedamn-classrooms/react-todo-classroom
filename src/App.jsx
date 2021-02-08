import React from 'react'
import './App.css'
import Todo from './Todo'

const App = (props) => {
	const taskList = props.tasks.map((task) => (
		<Todo id={task.id} name={task.name} completed={task.completed} />
	))

	return (
		<div className="todoapp stack-large">
			<h1>TodoMatic</h1>
			<form>
				<h2 className="label-wrapper">
					<label htmlFor="new-todo-input" className="label__lg">
						What needs to be done?
					</label>
				</h2>
				<input type="text" className="input input__lg" autoComplete="off" />
				<button type="submit" className="btn btn__primary btn__lg">
					Add
				</button>
			</form>
			<div className="filters btn-group stack-exception">
				<button type="button" className="btn toggle-btn">
					all
				</button>
				<button type="button" className="btn toggle-btn">
					Active
				</button>
				<button type="button" className="btn toggle-btn">
					Completed
				</button>
			</div>
			<h2 id="list-heading">3 tasks remaining</h2>
			<ul
				role="list"
				className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading"
			>
				{taskList}
			</ul>
		</div>
	)
}

export default App
