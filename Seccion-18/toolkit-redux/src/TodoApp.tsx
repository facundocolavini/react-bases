import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis';

type Props = {};
interface Todo {
	completed: boolean;
	id: number;
	title: string;
	userId: number;
}
export const TodoApp = (props: Props) => {
	const [todoId, setTodoId] = useState(1);
	// const { data: todos = [], isLoading, isFetching } = useGetTodosQuery({});
	const { data: todo, isLoading, isFetching } = useGetTodoQuery(todoId);
	console.log(todo);

	const nextTodo = () => {
		setTodoId((todoId) => todoId + 1);
	};
	const prevTodo = () => {
		if (todoId === 1) return;
		setTodoId((todoId) => todoId - 1);
	};

	return (
		<>
			<h1>Todo - RTK Query</h1>
			<hr />
			<h4>isLoading:{isLoading ? 'True' : 'False'}</h4>
			<pre>{JSON.stringify(todo)}</pre>
			{/* 			<ul>
				{todos?.map((todo: Todo) => (
					<li key={todo?.id}>
						<strong>{todo.completed ? 'DONE' : 'PENDING'}</strong>
						{todo?.title}
					</li>
				))}
			</ul> */}
			<button onClick={prevTodo}>Previous Todo</button>
			<button onClick={nextTodo}>Next Todo</button>
		</>
	);
};
