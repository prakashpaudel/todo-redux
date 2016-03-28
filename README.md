# todo-redux
## Description

My attempt to build a redux/react todo app from scratch. Closely based of the tutorial from the redux docs.

## Structure
###Root
	- package.json
	- webpack.config.js
	- .babelrc
	- .gitignore
	- App
		- index.html
		- index.js
		- actions [type, ...]
			- index: addTodo, setVisibilityFilter, toggleTodo
		- reducers: (state, action) => nextState
			- index: combineReducers
			- todos: ADD_TODO, TOGGLE_TODO
		- components (presentat, stateless functions)
			App
			- TodoList
			  - Todo
			- Footer
			  - Link
		- containers (wrappers for presentation components, redux connect)
			- Addtodo
			- VisibleTodoList
			- FilterLink

## Data Flow
	- Comoponents
			1. User action, network request (Button press, input)
			2. Callback triggered (onClick, onChange)
	- Containers
			1. Action dispatched via matchDispatchtoProps
	- Action
		  1. Returns action object with type set, and other needed values
	- Reducer
			1. Takes action object and state and returns new state
	- Containers
			1. Containers are subscribed to changes of state and render the change via props
