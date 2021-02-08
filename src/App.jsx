import React from 'react'
import './App.css'

const App = () => {
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
				<li className="todo stack-small">
					<div className="c-cb">
						<input id="todo-0" type="checkbox" defaultChecked={true} />
						<label className="todo-label" htmlFor="todo-0">
							Eat
						</label>
					</div>
					<div className="btn-group">
						<button type="button" className="btn">
							Edit
						</button>
						<button type="button" className="btn btn__danger">
							Delete
						</button>
					</div>
				</li>
				<li className="todo stack-small">
					<div className="c-cb">
						<input id="todo-1" type="checkbox" />
						<label className="todo-label" htmlFor="todo-1">
							Sleep
						</label>
					</div>
					<div className="btn-group">
						<button type="button" className="btn">
							Edit
						</button>
						<button type="button" className="btn btn__danger">
							Delete
						</button>
					</div>
				</li>
				<li className="todo stack-small">
					<div className="c-cb">
						<input id="todo-2" type="checkbox" />
						<label className="todo-label" htmlFor="todo-2">
							Repeat
						</label>
					</div>
					<div className="btn-group">
						<button type="button" className="btn">
							Edit
						</button>
						<button type="button" className="btn btn__danger">
							Delete
						</button>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default App
