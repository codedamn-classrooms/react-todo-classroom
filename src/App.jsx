import React from 'react'
import Form from './Form'
import FilterButton from './FilterButton'
import Todo from './Todo'
import './App.css'

function App(props) {
	const taskList = props.tasks.map((task) => (
		<Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
	))
	return (
		<div className="todoapp stack-large">
			<Form />
			<div className="filters btn-group stack-exception">
				<FilterButton />
				<FilterButton />
				<FilterButton />
			</div>
			<h2 id="list-heading">3 tasks remaining</h2>
			<ul role="list" className="todo-list stack-large stack-exception">
				{taskList}
			</ul>
		</div>
	)
}

export default App
